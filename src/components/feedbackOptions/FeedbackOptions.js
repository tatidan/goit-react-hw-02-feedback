import React from "react";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className="feedbackOptions">
      <div className="counterControls">
        <button type="button" name="good" onClick={onLeaveFeedback}>
          good
        </button>
        <button type="button" name="neutral" onClick={onLeaveFeedback}>
          neutral
        </button>
        <button type="button" name="bad" onClick={onLeaveFeedback}>
          bad
        </button>
      </div>
    </div>
  );
};

export default FeedbackOptions;
