import { FormType } from 'pages';
import QRCode from 'qrcode.react';
import { Dispatch, FC } from 'react';

type QRModalTypes = {
  qr_value: FormType
  setModalState: Dispatch<React.SetStateAction<string>>
  modal_state: string
}

const QRModal: FC<QRModalTypes> = ({ qr_value, setModalState, modal_state }) => {
  return (
    <div className='qr-modal-wrapper' style={{ display: modal_state }}>
      <div className='qr-modal'>
        <h2>Your QR code is generated<br />you can scan it with your phone!</h2>

        <div className='qr-code'>
          <QRCode value={qr_value} size={165} />
        </div>

        <div className='button-container'>
          <button onClick={() => setModalState('none')}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default QRModal;