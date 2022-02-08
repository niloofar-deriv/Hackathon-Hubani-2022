import { FC, useEffect, useState } from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Image from 'next/image'
import Microphone from '../../public/microphone.svg'
import GoogleMic from '../../public/google-mic.svg'

type InputProps = {
    label: string
    id: string
    type: string
    value: string
    handleChange: (e: any) => void
    pattern?: string
    onInvalid?: any
    placeholder: string
}

const Input: FC<InputProps> = ({ label, id, type, value, handleChange, ...props }) => {
    const [input_text, setInputText] = useState('');
    const [input_id, setInputId] = useState('');
    const [input_event, setInputEvent] = useState({});

    const {
        transcript,
        listening,
        resetTranscript
    } = useSpeechRecognition();

    useEffect(() => {
        if (id === input_id) {
            setInputText(transcript);
            handleChange(input_event);
        }
    }, [transcript, input_text]);

    const onMouseDown = e => {
        setInputId(e.target.id);
        const input = document.getElementById(id);
        input.focus();
        if (id === e.target.id) {
            if (transcript) {
                resetTranscript();
            }
            else {
                SpeechRecognition.startListening();
            }
        }
    }

    const onMouseUp = e => {
        SpeechRecognition.stopListening();
        setInputId('');
    }

    const handleInputChange = e => {
        setInputText(e.target.value);
        handleChange(e);
    }

    return (
        <div className='input-wraper'>
            <label className='label-wraper text'>{`${label}:`}</label>
            <input
                id={id}
                name={id}
                type={type}
                onFocus={e => setInputEvent(e)}
                onChange={handleInputChange}
                value={input_text}
                {...props}
            />
            <div style={{ flexShrink: 0 }}>
                <Image id={id} width="20" height="20" src={listening && id === input_id ? Microphone : GoogleMic} alt='listening' onMouseDown={onMouseDown} onMouseUp={onMouseUp} />
            </div>
        </div>
    )
}

export default Input;
