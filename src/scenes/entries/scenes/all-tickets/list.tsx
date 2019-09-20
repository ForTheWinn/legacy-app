import moment from "moment";
import React from "react";
import { Ticket } from "../../components/ticket-detail";

interface EntriesProps {
  items?: Ticket[];
  onClick: (item: Ticket) => void;
  isLoading?: boolean;
}
const List = ({ items, onClick }: EntriesProps) => {
  return (
    <table className="table is-hoverable is-fullwidth has-mobile-cards">
      <thead>
        <tr>
          <th>Ticket</th>
          <th>Numbers</th>
          <th>Player</th>
          <th>Played at</th>
        </tr>
      </thead>
      <tbody>
        {items && items.length > 0 ? (
          items.map(item => (
            <tr onClick={() => onClick(item)} key={item.ticketNo}>
              <td data-label="Ticket">#{item.ticketNo}</td>
              <td>{item.numbers.join(",")}</td>
              <td>{item.player}</td>
              <td>
                {moment.unix(item.createdAt).format("YYYY-MM-DD hh:mm:ss A")}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>No Entries</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default List;
