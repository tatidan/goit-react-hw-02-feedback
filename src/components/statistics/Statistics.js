import React from "react";
import Notification from "./Notification";

const Statistics = ({
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  values,
  statsOptions,
}) => {
  const total = countTotalFeedback();

  const totalOptions = statsOptions.map((option) => {
    let value = 0;

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
        </ul>
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </>
  );
};

export default Statistics;
