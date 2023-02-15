import React from "react";
import HeaderComponent from "../components/header/HeaderComponent";
import { GiReceiveMoney } from '../../node_modules/react-icons/gi/index.esm';

function CashDeposit() {
  return (
    <div>
      <div className="cash__deposit">
        <HeaderComponent title="Cash Deposit" icon={<GiReceiveMoney />}/>
      </div>
    </div>
  );
}

export default CashDeposit;
