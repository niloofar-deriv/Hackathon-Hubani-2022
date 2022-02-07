import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Image from 'next/image'
import Microphone from '../public/microphone.svg'
import GoogleMic from '../public/google-mic.svg'

const Input = ({handleChange, id, label, type, value, ...props }) => {
    const [input_text, setInputText] = React.useState('');
    const [input_id, setInputId] = React.useState('');
    const [input_event, setInputEvent] = React.useState({});
    
    const {
        transcript,
        listening,
        resetTranscript
    } = useSpeechRecognition();
    
    React.useEffect(() => {
        if(id === input_id){
            setInputText(transcript);
            handleChange(input_event);
        }
    }, [transcript]);

      const onMouseDown = e => {
          setInputId(e.target.id);
          const input = document.getElementById(id);
          input.focus();
          if(id === e.target.id){
          if(transcript){
            resetTranscript();
          }
          else{ 
            SpeechRecognition.startListening();
        }}
    }
    
    const onMouseUp = e => {
        SpeechRecognition.stopListening();
        setInputId('');
      }

      const handleInputChange = e => {
          setInputText(e.target.value);
          handleChange(e);
      }

    return(
        <div className='input-wraper'>
            <div className='custom-input'>
                <input
                    id={id}
                    name={id}
                    type={type}
                    placeholder=" "
                    onFocus={e=>setInputEvent(e)}
                    onChange={handleInputChange}
                    value={input_text}
                    {...props}
                />
                <label>{label}</label>
            </div>
            <Image id={id} width="15" height="10"  src={listening && id === input_id ? Microphone : GoogleMic} alt='listening' onMouseDown={onMouseDown} onMouseUp={onMouseUp} />
        </div>
    )
}

export default Input;