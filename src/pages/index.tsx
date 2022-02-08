import { useState } from "react";
import Button from "components/button";
import InformationForm from "components/information-form";
import Layout from "components/layout";
import QRModal from "components/qr_modal";
import Template from "components/template";

const Home = () => {
  const [modal_state, setModalState] = useState("none");
  const [qr_value, setQrValue] = useState<string>("");
  const [is_submit_trigger, setIsSubmitTrigger] = useState(false);
  const formProps = {
    is_submit_trigger,
    setQrValue,
    setModalState,
    setIsSubmitTrigger,
  };
  const modalProps = { qr_value, setModalState, modal_state };
  let form_values;

  if (qr_value) form_values = JSON.parse(qr_value);

  return (
    <Layout>
      <Template
        website={form_values?.website || "www.brandname.com"}
        brand_name={form_values?.company || "Brand Name"}
        generate_qr_code={<Button onClick={() => setIsSubmitTrigger(true)} />}
      >
        <InformationForm {...formProps} />
      </Template>
      <QRModal {...modalProps} />
    </Layout>
  );
};

export default Home;
