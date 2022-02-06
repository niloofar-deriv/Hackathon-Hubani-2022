import React from 'react';
import { useFormik } from 'formik';

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

    return(
        <form className='vcard-form' onSubmit={handleSubmit}>
            <div className='inputs-container'>
              <div className='custom-input'>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.first_name}
                />
                <label>First name</label>
              </div>
              <div className='custom-input'>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.last_name}
                />
                <label>Last name</label>
              </div>
            </div>
            <div className='inputs-container'>
              <div className='custom-input'>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.mobile}
                />
                <label>Mobile</label>
              </div>
            </div>
            <div className='inputs-container'>
              <div className='custom-input'>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.phone}
                />
                <label>Phone</label>
              </div>
              <div className='custom-input'>
                <input
                  id="fax"
                  name="fax"
                  type="text"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.fax}
                />
                <label>Fax</label>
              </div>
            </div>
            <div className='inputs-container'>
              <div className='custom-input'>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.email}
                />
                <label>Email</label>
              </div>
            </div>
            <div className='inputs-container'>
              <div className='custom-input'>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.company}
                />
                <label>Company</label>
              </div>
              <div className='custom-input'>
                <input
                  id="your_job"
                  name="your_job"
                  type="text"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.your_job}
                />
                <label>Your job</label>
              </div>
            </div>
            <div className='inputs-container'>
              <div className='custom-input'>
                <input
                  id="street"
                  name="street"
                  type="text"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.street}
                />
                <label>Street</label>
              </div>
            </div>
            <div className='inputs-container'>
              <div className='custom-input'>
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.city}
                />
                <label>City</label>
              </div>
              <div className='custom-input'>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.zip}
                />
                <label>Zip code</label>
              </div>
            </div>
            <div className='inputs-container'>
              <div className='custom-input'>
                <input
                  id="state"
                  name="state"
                  type="text"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.state}
                />
                <label>State</label>
              </div>
            </div>
            <div className='inputs-container'>
              <div className='custom-input'>
                <input
                  id="country"
                  name="country"
                  type="text"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.country}
                />
                <label>Country</label>
              </div>
            </div>
            <div className='inputs-container'>
              <div className='custom-input'>
                <input
                  id="website"
                  name="website"
                  type="text"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.website}
                />
                <label>Website</label>
              </div>
            </div>
            <div className='button-container'>
              <button type="submit">Generate QR</button>
            </div>
          </form>
    );
  };

  export default CardForm;
