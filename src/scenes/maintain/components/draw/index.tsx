import React, { useContext } from "react";
import CountdownNow from "react-countdown-now";
import { InvokerContext } from "@neo-react/invoker";
import {NLP2API} from "@ftw-js/api";
import moment from "moment";

interface Props {
  nlp2API: NLP2API;
}

const Draw = (props: Props) => {
  const { nlp2API } = props;
  const { status } = nlp2API;
  const { state, dispatch } = useContext(InvokerContext);
  const onDraw = (): void => {
    if (state.wallet) {
      const invokeScript = NLP2API.getInvokeScript.draw([state.wallet.address]);
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
          <img alt={"draw"} src={process.env.PUBLIC_URL + "/assets/draw.svg"} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-5">Draw lottery</p>
        <p className="subtitle is-7">
          Next drawing will be available at{" "}
          {moment(status.nextDrawingAt).format("MM-DD hh:mm:ss")}
        </p>
        <div className="content is-small">
          <ul>
            <li>Earn 5% of total ticket sales of the current game</li>
            <li>You need to participate the current game to be qualified</li>
            <li>First come first serve basis</li>
          </ul>
        </div>
        <CountdownNow
          date={status.nextDrawingAt}
          renderer={({ hours, minutes, seconds, completed }) => {
            if (completed) {
              return (
                <button onClick={onDraw} className="button is-primary">
                  Draw
                </button>
              );
            } else {
              return (
                <button disabled={true} className="button is-primary">
                  {hours}:{minutes}:{seconds} time left
                </button>
              );
            }
          }}
        />
      </div>
    </div>
  );
};

export default Draw;
