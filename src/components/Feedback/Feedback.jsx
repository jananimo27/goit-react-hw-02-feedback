import { Component } from 'react';
import { Statistics } from '../statistics/Statistics';

export class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    ...this.props,
  };

  handleGood = e => {
    e.preventDefault();
    this.setState({
      good: this.state.good + 1,
    });
  };

  handleNeutral = e => {
    e.preventDefault();
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };

  handleBad = e => {
    e.preventDefault();
    this.setState({
      bad: this.state.bad + 1,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return ((good / total) * 100).toFixed();
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
