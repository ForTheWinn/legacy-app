import React, { useContext } from "react";
import LotteryNumberPicker from "@ftw-js/lottery-number-picker";
import { NLP2API } from "@ftw-js/api";
import { InvokerContext } from "@neo-react/invoker";

const Play = () => {
  const { state, dispatch } = useContext(InvokerContext);
  const handleSubmit = (numbers: number[]): void => {
    if (state.wallet) {
      // @ts-ignore
      let args = [state.wallet.address, 1, 1, ...numbers];
      if (process.env.REACT_APP_REFERRAL_ADDRESS) {
        args.push(process.env.REACT_APP_REFERRAL_ADDRESS);
      }
      const invokeScript = NLP2API.getInvokeScript.buy([...args]);
      dispatch.openInvoker({
        ...invokeScript,
      });
    } else {
      dispatch.openInvoker();
    }
  };

  return (
    <LotteryNumberPicker
      onBuy={selectedNumbers => handleSubmit(selectedNumbers)}
      maxNumber={49}
      totalBalls={5}
    />
  );
};

export default Play;
