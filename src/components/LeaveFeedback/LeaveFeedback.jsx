import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export default class LeaveFeedback extends Component {
 
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
 
    onFeedbackHandler = (type) => {
        this.setState(prevState => ({
            [type]: prevState[type] + 1
        }))
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state
        const sum = good + neutral + bad
        if(sum) return sum
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state
        const total = this.countTotalFeedback()
        return  total ? (good / total * 100).toFixed(2) : 0
    }

    render() {
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback()
        const positiveFeedbackCount = this.countPositiveFeedbackPercentage()

        return (
            <>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onFeedbackHandler} />
                </Section>
                

                <Section title={'Statistics'}>
                    {totalFeedback ?
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            totalFeedback={totalFeedback}
                            positiveFeedbackCount={positiveFeedbackCount}
                        />
                        :
                        <Notification  message="There is no feedback"/>
                    }
                </Section>
            </>
        )
    }
}