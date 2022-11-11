import React from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


leaveFeedback = option => {
  this.setState(prevState => {
    return {
      [option]: prevState[option] + 1
    }
  })
}


  render() {
    let countTotalFeedback = this.state.good + this.state.neutral + this.state.bad
    let countPositiveFeedbackPercentage = Math.round(
      (this.state.good / countTotalFeedback) * 100
      )

    return(
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={Object.keys(this.state)}
          onLeaveFeedback={this.leaveFeedback}
        />
        <h2>Statistics</h2>
          {countTotalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
        <Statistics 
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={countTotalFeedback}
          positiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
        )
      }
      </Section>
    )
  }
}

export default App;