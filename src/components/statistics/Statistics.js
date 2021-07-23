import React from "react";
import Notification from "./Notification";

const Statistics = ({
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  good,
  neutral,
  bad,
}) => {
  const total = countTotalFeedback();
  const posFeedbackPercent = countPositiveFeedbackPercentage();

  return (
    <>
      {total ? (
        <ul className="statsList">
          <li className="statsListItem">
            <b>Good: </b>
            {good}
          </li>
          <li className="statsListItem">
            <b>Neutral: </b>
            {neutral}
          </li>
          <li className="statsListItem">
            <b>Bad: </b>
            {bad}
          </li>
          <li className="statsListItem statsSum">
            <b>Total: </b>
            {total}
          </li>
          <li className="statsListItem">
            <b>Positive feedback: </b>
            {posFeedbackPercent}%
          </li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};

export default Statistics;
