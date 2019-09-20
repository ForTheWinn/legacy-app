import React, { useContext } from "react";
import moment from "moment";
import { NLP2API } from "@ftw-js/api";
import { InvokerContext } from "@neo-react/invoker";

export interface Ticket {
  gameNo: number;
  ticketNo: number;
  ticketCurrency: number;
  player: string;
  numbers: [number];
  isVerified: boolean;
  matched: number;
  isClaimed: boolean;
  prize: number;
  createdAt: number;
  referral: string;
}

interface TicketDetailProps {
  data: Ticket;
  nlp2API: NLP2API;
}

const getTicketCurrency = (type: number) => {
  switch (type) {
    case 1:
      return "FTX";
    case 2:
      return "CNEO";
    case 3:
      return "CGAS";
  }
};

const TicketDetail = (props: TicketDetailProps) => {
  const { data, nlp2API } = props;
  const {
    ticketNo,
    ticketCurrency,
    gameNo,
    numbers,
    player,
    isVerified,
    isClaimed,
    matched,
    prize,
    createdAt,
  } = data;
  const { availableVerifications, indexes } = nlp2API.status;
  const { currentLotteryNo } = indexes;

  const { dispatch } = useContext(InvokerContext);
  const onClaim = (ticketNo: number): void => {
    // @ts-ignore
    const invokeScript = NLP2API.getInvokeScript.claim([ticketNo]);
    dispatch.openInvoker({
      ...invokeScript,
    });
  };

  return (
    <div className="content">
      <h6>Game no</h6>
      <p>{gameNo}</p>
      <h6>Ticket no</h6>
      <p>{ticketNo}</p>
      <h6>Player</h6>
      <p>{player}</p>
      <h6>Numbers</h6>
      <p>{numbers.join(",")}</p>
      <h6>Created at</h6>
      <p> {moment.unix(createdAt).format("YYYY-MM-DD hh:mm:ss A")}</p>
      <h6>Result</h6>
      <p>
        {isVerified
          ? `Matched ${matched} numbers`
          : currentLotteryNo === gameNo
          ? "Playing"
          : "Verifying"}
      </p>
      <h6>Claim</h6>
      <p>
        {matched > 1 ? (
          isClaimed ? (
            <>
              <h6>Prize</h6>
              <p>{`${prize} ${getTicketCurrency(ticketCurrency)}`}</p>
            </>
          ) : (
            <>
              {availableVerifications ? (
                <button
                  onClick={() => onClaim(ticketNo)}
                  type="button"
                  className="button is-success"
                >
                  Claim winning prize
                </button>
              ) : (
                <p>Verifying other tickets (</p>
              )}
            </>
          )
        ) : null}
      </p>
    </div>
  );
};

export default TicketDetail;
