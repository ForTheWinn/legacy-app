import React, { useContext } from "react";
import { InvokerContext } from "@neo-react/invoker";

const Transactions = () => {
  const { state } = useContext(InvokerContext);
  const { pendingTxidList } = state;
  console.log(state);
  return (
    <div className="box">
      <h1 className="title is-5">Transactions</h1>
      {pendingTxidList.length ? (
        <table className="table is-hoverable is-fullwidth has-mobile-cards">
          <thead>
            <tr>
              <th>Txid</th>
              <th>Node</th>
            </tr>
          </thead>
          <tbody>
            {pendingTxidList.map(tx => {
              return (
                <tr key={tx.txid}>
                  <td>{tx.txid}</td>
                  <td>{tx.node}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No pending transactions</p>
      )}
    </div>
  );
};

export default Transactions;
