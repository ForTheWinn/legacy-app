import React, { useContext } from "react";
import { InvokerContext } from "@neo-react/invoker";
import { NLP2API } from "@ftw-js/api";
import { u } from "@cityofzion/neon-js";

interface Props {
  nlp2API: NLP2API;
}

const Withdraw = (props: Props) => {
  const { nlp2API } = props;
  const { state, dispatch } = useContext(InvokerContext);
  const onWithdraw = (type: number, amount: number) => {
    if (state.wallet) {
      const invokeScript = NLP2API.getInvokeScript.withdraw([
        state.wallet.address,
        type,
        u.num2fixed8(amount),
      ]);
      dispatch.openInvoker({
        ...invokeScript,
      });
    } else {
      dispatch.openInvoker();
    }
  };
  return (
    <div className="card" style={{ height: "100%" }}>
      <div
        className="card-image is-centered is-flex"
        style={{ justifyContent: "center", padding: 10 }}
      >
        <figure className="image is-128x128">
          <img
            alt="withdraw"
            src={process.env.PUBLIC_URL + "/assets/withdraw.svg"}
          />
        </figure>
      </div>
      {/**/}
      <div className="card-content">
        <p className="title is-5">Withdraw</p>
        <p className="subtitle is-7">Balances in smart contract</p>
        <nav className="panel">
          <a
            className="panel-block"
            onClick={() => onWithdraw(1, nlp2API.status.contractBalance.FTX)}
          >
            {nlp2API.status.contractBalance.FTX.toLocaleString()} FTX
          </a>
          <a
            className="panel-block"
            onClick={() => onWithdraw(2, nlp2API.status.contractBalance.CNEO)}
          >
            {nlp2API.status.contractBalance.CNEO.toLocaleString()} CNEO
          </a>
          <a
            className="panel-block"
            onClick={() => onWithdraw(3, nlp2API.status.contractBalance.CGAS)}
          >
            {nlp2API.status.contractBalance.CGAS.toLocaleString()} CGAS
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Withdraw;
