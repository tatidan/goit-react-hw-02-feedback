import React, { Component } from "react";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions";
import Statistics from "../statistics/Statistics";
import Section from "../section/Section";
import "./Main.css";

class Main extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = (e) => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
    this.countTotalFeedback();
  };
  handleNeutralFeedback = (e) => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
    this.countTotalFeedback();
  };

  handleBadFeedback = (e) => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
    this.countTotalFeedback();
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.ceil((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    return (
      <>
        <Section className="sectionTitle" title="Leave your feedback please">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleGoodFeedback}
          />
        </Section>
        <Section className="sectionTitle" title="Statistics:">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}

export default Main;
