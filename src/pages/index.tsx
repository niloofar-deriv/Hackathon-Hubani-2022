import { useState } from 'react';
import Button from 'components/button';
import Layout from 'components/layout';
import Template from 'components/template';
import InformationForm from 'components/information-form';
import QRModal from 'components/qr_modal';

export type FormType = {
  full_name: string
  mobile: string
  email: string
  company: string
  address: string
  website: string
}

const formInitialValues = {
  full_name: '',
  mobile: '',
  email: '',
  company: '',
  address: '',
  website: ''
}

const Home = () => {
  const [modal_state, setModalState] = useState('none');
  const [qr_value, setQrValue] = useState<FormType>(formInitialValues);
  const [is_submit_trigger, setIsSubmitTrigger] = useState(false);
  const formProps = { is_submit_trigger, setQrValue, setModalState, setIsSubmitTrigger };
  const modalProps = { qr_value, setModalState, modal_state };

  return (
    <Layout>
      <Template
        website={qr_value?.website || 'www.brandname.com'}
        brand_name={qr_value?.company || 'Brand Name'}
        generate_qr_code={<Button onClick={() => setIsSubmitTrigger(true)} />}
      >
        <InformationForm {...formProps} />
      </Template>

      <QRModal {...modalProps} />
    </Layout>
  );
}

export default Home;
