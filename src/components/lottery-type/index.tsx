import React from "react";
import { Ball } from "@ftw-js/lottery-number-picker";

interface LotteryTypeDisplayProps {
  totalBalls: number;
  maxNumber: number;
}

const LotteryTypeDisplay = ({
  totalBalls,
  maxNumber,
}: LotteryTypeDisplayProps) => {
  return (
    <div
      className="is-flex"
      style={{
        justifyContent: "center",
      }}
    >
      <Ball no={totalBalls} isActive={true} />
      <Ball no={maxNumber} isActive={true} />
    </div>
  );
};

export default LotteryTypeDisplay;
