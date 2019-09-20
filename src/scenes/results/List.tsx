import React from "react";
import moment from "moment";
import Result from "./Detail";

interface ResultsProps {
  items?: Result[];
  isLoading?: boolean;
  onClick: (data: any) => void;
}

interface Result {
  gameNo: number;
  winningNumbers: [number];
  ticketNo: number;
  player: string;
  numbers: [number];
  createdAt: number;
}

const ResultList = ({ items, onClick }: ResultsProps) => {
  return (
    <table className="table is-fullwidth has-mobile-cards is-hoverable">
      <thead>
        <tr>
          <th>Draw #</th>
          <th>Winning numbers</th>
          <th>Played at</th>
        </tr>
      </thead>
      <tbody>
        {items && items.length > 0 ? (
          items.map(game => {
            const { winningNumbers, gameNo, createdAt } = game;

            return (
              <tr onClick={() => onClick(game)} key={gameNo}>
                <td data-label="Game #">{gameNo}</td>
                <td data-label="Winning numbers">{winningNumbers.join(",")}</td>
                <td>
                  {moment.unix(createdAt).format("YYYY-MM-DD hh:mm:ss A")}
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={3}>No draws</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ResultList;
