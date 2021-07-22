import React from "react";

const FeedbackOptions = () => {
  return (
    <div className="feedbackOptions">
      <div className="counterControls">
        <button type="button" onClick={this.handleGoodFeedback}>
          good
        </button>
        <button type="button" onClick={this.handleNeutralFeedback}>
          neutral
        </button>
        <button type="button" onClick={this.handleBadFeedback}>
          bad
        </button>
      </div>
    </div>
  );
};

export default FeedbackOptions;
