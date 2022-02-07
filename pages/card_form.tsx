import React from 'react';
import { useFormik } from 'formik';
import Input from './input';

const CardForm = ({setQrValue, setModalState}) => {
const vCardForm = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      mobile: '',
      phone: '',
      fax: '',
      email: '',
      company: '',
      your_job: '',
      street: '',
      city: '',
      zip: '',
      state: '',
      country: '',
      website: '',
    },
    onSubmit: values => {
      setModalState('flex');
      setQrValue(JSON.stringify(values));
    },
});

const {handleChange, handleSubmit, values} = vCardForm;

const handleTellChange = e => {
  e.target.setCustomValidity('');
  handleChange(e);
}

const onTellInvalid = e => {
  e.target.setCustomValidity('Use +0123456789');
}

    return(
        <form className='vcard-form' onSubmit={handleSubmit}>
            <div className='inputs-container'>
              <Input handleChange={handleChange} id='first_name' label='First name' type="text" value={values.first_name} />
              <Input handleChange={handleChange} id='last_name' label='Last name' type="text" value={values.last_name} />
            </div>
            <div className='inputs-container'>
            <Input handleChange={handleTellChange} id='mobile' label='Mobile' type="tel" value={values.mobile} pattern="^[0-9-+\s()]*$" onInvalid={onTellInvalid} />
            </div>
            <div className='inputs-container'>
            <Input handleChange={handleTellChange} id='phone' label='Phone' type="tel" value={values.phone} pattern="^[0-9-+\s()]*$" onInvalid={onTellInvalid} />
            <Input handleChange={handleTellChange} id='fax' label='Fax' type="tel" value={values.fax} pattern="^[0-9-+\s()]*$" onInvalid={onTellInvalid} />
            </div>
            <div className='inputs-container'>
            <Input handleChange={handleChange} id='email' label='Email' type="email" value={values.email} />
            </div>
            <div className='inputs-container'>
            <Input handleChange={handleChange} id='company' label='Company' type="text" value={values.company} />
            <Input handleChange={handleChange} id='your_job' label='Your job' type="text" value={values.your_job} />
            </div>
            <div className='inputs-container'>
            <Input handleChange={handleChange} id='street' label='Street' type="text" value={values.street} />
            </div>
            <div className='inputs-container'>
            <Input handleChange={handleChange} id='city' label='City' type="text" value={values.city} />
            <Input handleChange={handleChange} id='zip' label='Zip code' type="text" value={values.zip} />
            </div>
            <div className='inputs-container'>
            <Input handleChange={handleChange} id='state' label='State' type="text" value={values.state} />
            </div>
            <div className='inputs-container'>
            <Input handleChange={handleChange} id='country' label='Country' type="text" value={values.country} />
            </div>
            <div className='inputs-container'>
            <Input handleChange={handleChange} id='website' label='Website' type="url" value={values.website} />
            </div>
            <div className='button-container'>
              <button type="submit">Generate QR</button>
            </div>
          </form>
    );
  };

  export default CardForm;
