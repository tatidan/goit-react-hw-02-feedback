import React from "react";
import Notification from "./Notification";

const Statistics = () => {
  const total = this.countTotalFeedback();
  const posFeedbackPercent = this.countPositiveFeedbackPercentage();

  return (
    <>
      {total ? (
        <ul className="statsList">
          <li className="statsListItem">
            <b>Good: </b>
            {this.state.good}
          </li>
          <li className="statsListItem">
            <b>Neutral: </b>
            {this.state.neutral}
          </li>
          <li className="statsListItem">
            <b>Bad: </b>
            {this.state.bad}
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
