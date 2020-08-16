import React, { Component } from "react";
import Buttons from "./components/Buttons.jsx";
import Statistics from "./components/Statistics.jsx";
import Section from "./components/Section.jsx";
import Notification from "./components/Notification.jsx";

export default class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = (e) => {
    if (e === "good") {
      this.setState({ [e]: this.state.good + 1 });
    }
    if (e === "neutral") {
      this.setState({ [e]: this.state.neutral + 1 });
    }
    if (e === "bad") {
      this.setState({ [e]: this.state.bad + 1 });
    }
  };
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = (good / total) * 100;

    return (
      <div className="feedBackContainer">
        <h2>Please leave feedback</h2>

        <Section>
          <Buttons options={options} onLeaveFeedback={this.onLeaveFeedback} />

          {total === 0 ? (
            <Notification />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
