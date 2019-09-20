import React from "react";

interface EntriesProps {
  items?: EntryItem[];
  onClick: (item: EntryItem) => void;
  isLoading?: boolean;
}

export interface EntryItem {
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

const WinnerList = ({ items, onClick }: EntriesProps) => {
  return (
    <table className="table is-fullwidth has-mobile-cards is-hoverable">
      <thead>
        <tr>
          <th>Draw</th>
          <th>Ticket</th>
          <th>Numbers</th>
          <th>Player</th>
          <th>Matched</th>
        </tr>
      </thead>
      <tbody>
        {items && items.length > 0 ? (
          items.map(item => (
            <tr onClick={() => onClick(item)} key={item.ticketNo}>
              <td data-label="Draw">#{item.gameNo}</td>
              <td data-label="Ticket">#{item.ticketNo}</td>
              <td>{item.numbers.join(",")}</td>
              <td>{item.player}</td>
              <td>{item.matched} numbers</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4}>No winners</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default WinnerList;
