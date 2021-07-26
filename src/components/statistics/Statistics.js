import React from "react";
import Notification from "./Notification";

const Statistics = ({
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  // good,
  // neutral,
  // bad,
  values,
  // options,
  statsOptions,
}) => {
  const total = countTotalFeedback();
  // const posFeedbackPercent = countPositiveFeedbackPercentage();

  // const totalOptions = {
  //   values,
  //   statOptions,
  // }

  const totalOptions = statsOptions.map((option) => {
    let value = 0;
    // if (option.name === "total") {
    //   value = countTotalFeedback();
    // }
    // else if

    switch (option.name) {
      case "total":
        value = countTotalFeedback();
        break;
      case "feedback":
        value = countPositiveFeedbackPercentage();
        break;
      default:
        value = values[option.name];
    }

    return {
      ...option,
      value,
    };
  });

  return (
    <>
      {total ? (
        <ul className="statsList">
          {totalOptions.map(({ title, name, value }) => (
            <li className="statsListItem">
              <b>{title}: </b>
              {value}
            </li>
          ))}

          {/* <li className="statsListItem">
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
          </li> */}
        </ul>
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </>
  );
};

export default Statistics;
