import { Dispatch, FC, useEffect } from 'react';
import { useFormik } from 'formik';
import Input from './input';

type InformationFormProps = {
  is_submit_trigger: boolean
  setModalState: Dispatch<React.SetStateAction<string>>
  setQrValue: Dispatch<React.SetStateAction<any>>
  setIsSubmitTrigger: Dispatch<React.SetStateAction<boolean>>
}

const InformationForm: FC<InformationFormProps> = ({ is_submit_trigger, setQrValue, setModalState, setIsSubmitTrigger }) => {
  const vCardForm = useFormik({
    initialValues: {
      full_name: '',
      mobile: '',
      email: '',
      company: '',
      address: '',
      website: ''
    },

    onSubmit: values => {
      setModalState('flex');
      setQrValue(JSON.stringify(values));
    },
  });

  const { handleChange, handleSubmit, values } = vCardForm;

  useEffect(() => {
    if (is_submit_trigger) {
      handleSubmit();
      setIsSubmitTrigger(false);
    }
  })

  const handleTellChange = e => {
    e.target.setCustomValidity('');
    handleChange(e);
  }

  const onTellInvalid = e => {
    e.target.setCustomValidity('Use +0123456789');
  }

  const inputs = [
    { label: 'Name', placeholder: 'John Smith', id: 'full_name', type: 'text', value: values.full_name, handleChange },
    { label: 'Mobile', placeholder: '4302388999', id: 'mobile', type: 'tel', value: values.mobile, pattern: "^[0-9-+\s()]*$", onInvalid: onTellInvalid, handleChange: handleTellChange },
    { label: 'Email', placeholder: 'test@gmail.com', id: 'email', type: 'email', value: values.email, handleChange },
    { label: 'Company', placeholder: 'Brand Name', id: 'company', type: 'text', value: values.company, handleChange },
    { label: 'Adress', placeholder: 'NewYork', id: 'address', type: 'text', value: values.address, handleChange },
    { label: 'Website', placeholder: 'www.brandname.com', id: 'website', type: 'url', value: values.website, handleChange },
  ]

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map(items => <Input key={items.id} {...items} />)}
    </form>
  );
};

export default InformationForm;
