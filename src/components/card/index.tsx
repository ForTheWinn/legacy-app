import React from "react";
import CountdownNow from "react-countdown-now";
import { Link } from "react-router-dom";
import LotteryTypeDisplay from "../lottery-type";
import withStatus from "../with-status";
import { NLP2API } from "@ftw-js/api";

interface LotteryCardProps {
  nlp2API: NLP2API;
}

const LotteryCard = ({ nlp2API }: LotteryCardProps) => {
  console.log("Render: LotteryCard");
  const { settings, currentJackpot, nextDrawingAt } = nlp2API.status;
  const { totalBalls, maxNumber } = settings;

  return (
    <>
      <div style={{ padding: "10px 0 10px 0" }}>
        <LotteryTypeDisplay totalBalls={totalBalls} maxNumber={maxNumber} />
      </div>
      <div className="has-text-centered">
        <div className="has-text-weight-bold is-size-7">Jackpot</div>
        {currentJackpot.FTX.toLocaleString()} FTX
        <div className="has-text-weight-light is-size-7">Next drawing</div>
        <CountdownNow
          date={nextDrawingAt}
          renderer={({ hours, minutes, seconds, completed }) => {
            if (completed) {
              return (
                <Link className="button is-small is-white" to={"/maintain"}>
                  Draw
                </Link>
              );
            } else {
              return (
                <button disabled={true} className="button is-small is-white">
                  {hours}:{minutes}:{seconds} time left
                </button>
              );
            }
          }}
        />
      </div>
    </>
  );
};

export default withStatus(LotteryCard);

// export default (props: LotteryCardProps) => {
//   return useMemo(() => <LotteryCard {...props} />, [props]);
// };
