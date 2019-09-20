import React from "react";
import CountdownNow from "react-countdown-now";

const Renderer = ({ hours, minutes, seconds, completed }: any) => {
  // Render a completed state
  if (completed) {
    return (
      <button type="button" className="button is-small is-primary">
        Draw
      </button>
    );
  } else {
    // Render a countdown
    return (
      <button
        type="button"
        disabled={true}
        className="button is-small is-white"
      >
        {hours}:{minutes}:{seconds} time left
      </button>
    );
  }
};

interface CountdownNextDrawProps {
  nextDrawingAt: number;
}

const CountdownNextDraw = ({ nextDrawingAt }: CountdownNextDrawProps) => {
  return (
    <CountdownNow
      date={nextDrawingAt}
      renderer={props =>
        Renderer({
          ...props,
        })
      }
    />
  );
};

export default CountdownNextDraw;
