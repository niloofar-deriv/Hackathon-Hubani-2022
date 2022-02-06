import React from 'react';
import QRCode from 'qrcode.react'

const QRModal = ({qr_value, setModalState, state}) => {
    return (
      <div className='qr-modal-wrapper' style={{display: state}}>
        <div className='qr-modal'>
          <h2>Your QR code is generated</h2>
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