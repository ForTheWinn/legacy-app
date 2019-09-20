import React from "react";
import Draw from "./components/draw";
import Verify from "./components/verify";
import Withdraw from "./components/withdraw";
import { NLP2API } from "@ftw-js/api";
import { ConnectedWallet } from "@neo-react/invoker/lib/types";
import withStatus from "../../components/with-status";

interface Props {
  nlp2API: NLP2API;
  wallet?: ConnectedWallet;
}

const Maintain = (props: Props) => {
  console.log("Display: Maintain");
  return (
    <div className="box">
      <div className="columns">
        <div className="column">
          <Draw {...props} />
        </div>
        <div className="column">
          <Verify {...props} />
        </div>
        <div className="column">
          <Withdraw {...props} />
        </div>
      </div>
    </div>
  );
};

export default withStatus(Maintain);
