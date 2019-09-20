import React from "react";

interface DisplayAppError {
  message: string;
}

const DisplayAppError = ({ message }: DisplayAppError) => {
  return (
    <div className="section">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <div className="notification is-danger">{message}</div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAppError;
