import React, { Component } from "react";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions";
import Statistics from "../statistics/Statistics";
import Section from "../section/Section";
import "./Main.css";
import data from "../../data";

const { options, statsOptions, titleOptions } = data;

class Main extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    language: "en",
  };

  handleLangChange = (e) => {
    const { value } = e.target;
    this.setState({ language: value });
  };

  handleGoodFeedback = (e) => {
    this.setState((prevState) => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () =>
    Math.ceil((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    return (
      <>
        <Section
          className="sectionTitle"
          title={titleOptions[this.state.language].feedback}
        >
          <select name="language" onChange={this.handleLangChange}>
            <option value="en">English</option>
            <option value="ru">Русский</option>
          </select>

          <FeedbackOptions
            options={options[this.state.language]}
            onLeaveFeedback={this.handleGoodFeedback}
          />
        </Section>
        <Section
          className="sectionTitle"
          title={titleOptions[this.state.language].stats}
        >
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            values={this.state}
            statsOptions={statsOptions[this.state.language]}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        </Section>
      </>
    );
  }
}

export default Main;
