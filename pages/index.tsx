import { useFormik } from 'formik';

const Home = () => {
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
      alert(JSON.stringify(values, null, 2));
    },
  });
  return ( 
    <div className='wrapper'>
      <h1>Hubani VCard Generator</h1>
      <form onSubmit={vCardForm.handleSubmit}>
      {/* <label htmlFor="email">Email Address</label> */}
        <div>
          <label>Your name:</label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            placeholder="First name"
            onChange={vCardForm.handleChange}
            value={vCardForm.values.first_name}
          />
          <input
            id="last_name"
            name="last_name"
            type="text"
            placeholder="Last name"
            onChange={vCardForm.handleChange}
            value={vCardForm.values.last_name}
          />
        </div>
        <div>
          <label>Contact:</label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            placeholder="Mobile"
            onChange={vCardForm.handleChange}
            value={vCardForm.values.mobile}
          />
          <div>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Home phone"
              onChange={vCardForm.handleChange}
              value={vCardForm.values.phone}
            />
            <input
              id="fax"
              name="fax"
              type="text"
              placeholder="Fax"
              onChange={vCardForm.handleChange}
              value={vCardForm.values.fax}
            />
          </div>
        </div>
        <div>
          <label>Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={vCardForm.handleChange}
            value={vCardForm.values.email}
          />
        </div>
        <div>
          <label>Company:</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Company"
            onChange={vCardForm.handleChange}
            value={vCardForm.values.company}
          />
          <input
            id="your_job"
            name="your_job"
            type="text"
            placeholder="Your job"
            onChange={vCardForm.handleChange}
            value={vCardForm.values.your_job}
          />
        </div>
        <div>
          <label>Street:</label>
          <input
            id="street"
            name="street"
            type="text"
            placeholder="Street"
            onChange={vCardForm.handleChange}
            value={vCardForm.values.email}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            id="city"
            name="city"
            type="text"
            placeholder="City"
            onChange={vCardForm.handleChange}
            value={vCardForm.values.city}
          />
          <input
            id="zip"
            name="zip"
            type="text"
            placeholder="Zip"
            onChange={vCardForm.handleChange}
            value={vCardForm.values.zip}
          />
        </div>
        <div>
          <label>State:</label>
          <input
            id="state"
            name="state"
            type="text"
            placeholder="State"
            onChange={vCardForm.handleChange}
            value={vCardForm.values.state}
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            id="country"
            name="country"
            type="text"
            placeholder="Country"
            onChange={vCardForm.handleChange}
            value={vCardForm.values.country}
          />
        </div>
        <div>
          <label>Website:</label>
          <input
            id="website"
            name="website"
            type="text"
            placeholder="Website"
            onChange={vCardForm.handleChange}
            value={vCardForm.values.website}
          />
        </div>
        <button type="submit">Generate QR</button>
      </form>
    </div>
  );
}

export default Home