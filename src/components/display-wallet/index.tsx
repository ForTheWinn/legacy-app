import React, { useContext } from "react";
import { InvokerContext } from "@neo-react/invoker";

const DisplayWallet = () => {
  const { state, dispatch } = useContext(InvokerContext);
  if (state.wallet) {
    // @ts-ignore
    const { address, provider } = state.wallet;
    return (
      <>
        <div className="content is-small">
          <p style={{ wordBreak: "break-all" }}>
            Wallet
            <br />
            {provider}
            <br />
            Address
            <br />
            {address}
          </p>
        </div>
        <hr />
        <button
          type="button"
          onClick={() => dispatch.disconnectWallet()}
          className="button is-light is-fullwidth"
        >
          Disconnect wallet
        </button>
      </>
    );
  } else {
    return (
      <button
        onClick={() => dispatch.openInvoker()}
        className="button is-light is-fullwidth"
      >
        Connect wallet
      </button>
    );
  }
};

export default DisplayWallet;
