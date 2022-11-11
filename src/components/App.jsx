import {useState} from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const optionLabels = Object.keys({ good, neutral, bad });


const leaveFeedback = option => {
  if(option === 'good'){
    setGood(prevState => prevState + 1)
  }

  if(option === 'neutral'){
    setNeutral(prevState => prevState + 1)
  }

  if(option === 'bad'){
    setBad(prevState => prevState + 1)
  }
}

    let countTotalFeedback = good + neutral + bad
    let countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100
      )

    return(
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={optionLabels}
          onLeaveFeedback={leaveFeedback}
        />
        <h2>Statistics</h2>
          {countTotalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
        <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
        )
      }
      </Section>
    )
}