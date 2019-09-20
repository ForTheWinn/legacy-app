import React from "react";
import moment from "moment/moment";

export interface ResultProps {
  data: ResultItem;
}

export interface ResultItem {
  gameNo: number;
  winningNumbers: [number];
  lastTicketNo: number;
  caster: string;
  ftxWinners: number[];
  cneoWinners: number[];
  cgasWinners: number[];
  totalTickets: number;
  totalVerifiedTickets: number;
  createdAt: number;
}

const ResultDetail = ({ data }: ResultProps) => {
  const {
    gameNo,
    winningNumbers,
    caster,
    totalTickets,
    totalVerifiedTickets,
    ftxWinners,
    cneoWinners,
    cgasWinners,
    createdAt,
  } = data;

  return (
    <div className="content">
      <h6>Game no</h6>
      <p>{gameNo}</p>
      <h6>Winning numbers</h6>
      <p>{winningNumbers.join(",")}</p>
      <h6>Drawing caster</h6>
      <p>{caster}</p>
      <h6>Verification status</h6>
      <p>{`${Math.round(
        (totalVerifiedTickets / totalTickets) * 100
      )}% (${totalVerifiedTickets}/${totalTickets})`}</p>
      <h6>Drawing at</h6>
      <p>{moment.unix(createdAt).format("YYYY-MM-DD hh:mm:ss A")}</p>
      {totalVerifiedTickets === totalTickets ? (
        <div>
          <h6>Winners</h6>
          <table className="table is-bordered is-striped has-mobile-cards">
            <thead>
              <tr>
                <th>Matched</th>
                <th>FTX tickets</th>
                <th>CNEO tickets</th>
                <th>CGAS tickets</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Matched">5 numbers</td>
                <td data-label="FTX">{ftxWinners[3]}</td>
                <td data-label="CNEO">{cneoWinners[3]}</td>
                <td data-label="CGAS">{cgasWinners[3]}</td>
              </tr>
              <tr>
                <td data-label="Matched">4 numbers</td>
                <td data-label="FTX">{ftxWinners[2]}</td>
                <td data-label="CNEO">{cneoWinners[2]}</td>
                <td data-label="CGAS">{cgasWinners[2]}</td>
              </tr>
              <tr>
                <td data-label="Matched">3 numbers</td>
                <td data-label="FTX">{ftxWinners[1]}</td>
                <td data-label="CNEO">{cneoWinners[1]}</td>
                <td data-label="CGAS">{cgasWinners[1]}</td>
              </tr>
              <tr>
                <td data-label="Matched">2 numbers</td>
                <td data-label="FTX">{ftxWinners[0]}</td>
                <td data-label="CNEO">{cneoWinners[0]}</td>
                <td data-label="CGAS">{cgasWinners[0]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default ResultDetail;
