import React, { useContext } from "react";
import { InvokerContext } from "@neo-react/invoker";
import {NLP2API} from "@ftw-js/api";

interface Props {
  nlp2API: NLP2API
}

const Verify = (props: Props) => {
  const { nlp2API } = props;
  const { status } = nlp2API;
  const { state, dispatch } = useContext(InvokerContext);
  const onVerify = (): void => {
    if (state.wallet) {
      const invokeScript = NLP2API.getInvokeScript.verify([
        state.wallet.address,
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
          <img alt="verify" src={process.env.PUBLIC_URL + "/assets/verify.svg"} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-5">Verify tickets</p>
        <p className="subtitle is-7">
          Total {status.availableVerifications} tickets
        </p>
        <div className="content is-small">
          <ul>
            <li>Earn 5% of each ticket price that you verify</li>
            <li>New verification will be available right after new draws</li>
            <li>First come first serve basis</li>
          </ul>
        </div>
        <button
          disabled={status.availableVerifications === 0}
          onClick={onVerify}
          className="button is-primary"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default Verify;
