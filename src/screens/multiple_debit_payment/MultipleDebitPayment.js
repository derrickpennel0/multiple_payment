import React from "react";
// import HeaderComponent from "../../components/header/HeaderComponent";
// import { MdPayment } from "react-icons/md/index.esm";
// import InputField from "../../components/fields/InputField";
// import Label from "../../components/label/Label";
import MutilplePaymentDebitBody from "./multiple_debit_payment_body/MutiplePaymentDebitBody";
import "./multiple_debit_payment_body/MutiplePaymentDebitBody.css";

function MultipleDebitPayment() {
  return (
    <div>
      <div className="multiple_debit_payment">
        {/* <HeaderComponent title="Multiple Debit Payment" icon={<MdPayment size={30}/>} /> */}

        <MutilplePaymentDebitBody />
      </div>
    </div>
  );
}

export default MultipleDebitPayment;
