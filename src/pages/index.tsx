import React from 'react';
import CardForm from './card_form'
import QRModal from './qr_modal'

const Home = () => {
  const [modal_state, setModalState] = React.useState('none');
  const [qr_value, setQrValue] = React.useState('');


  return ( 
    <div>
      <div className='wrapper'>
        <div className='form-content'>
          <h1>Hubani VCard Generator</h1>
          <CardForm setQrValue={setQrValue} setModalState={setModalState} />
        </div>
      </div>
      <QRModal qr_value={qr_value} setModalState={setModalState} state={modal_state}  />
    </div>
  );
}

export default Home
