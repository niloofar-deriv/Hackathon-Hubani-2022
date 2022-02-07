import { useState } from 'react';
import Layout from 'components/layout';
import Template from 'components/template';
import InformationForm from 'components/information-form';
import QRModal from 'components/qr_modal';

const Home = () => {
  const [modal_state, setModalState] = useState('none');
  const [qr_value, setQrValue] = useState<any>({});
  const formProps = { setQrValue, setModalState };
  const modalProps = { qr_value, setModalState, modal_state }

  return (
    <Layout>
      <Template
        website={'www.brandname.com'}
        brand_name={'Brand Name'}
        generate_qr_code={<InformationForm showButton {...formProps} />}
      >
        <InformationForm {...formProps} />
      </Template>

      <QRModal {...modalProps} />
    </Layout>
  );
}

export default Home;
