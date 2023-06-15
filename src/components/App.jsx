import { useState } from "react";
import Statistics from "./statistics/Statistics";
import FeedbackButton from "./feedbackButton/FeedbackButton";
import SectionTitle from "components/sectionTitle/SectionTitle";
import NotificationMessage from "components/notificationMessage/NotificationMessage";
import { FeedbackContainer } from "./App.styled";

const App = () => {
    
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    function leaveFeedback (event) {
        const { name } = event.target;

        switch (name) {
            case 'good':
                setGood(prevState => prevState + 1)
                break;
            case 'neutral':
                setNeutral(prevState => prevState + 1)
                break;
            case 'bad':
                setBad(prevState => prevState + 1)
                break;
            default:
                break;
        }
    }

        const total = good + neutral + bad
        const positivePercentage = total !== 0 ? ((good / total) * 100).toFixed(0) : 0;

        return (
        <FeedbackContainer percentage={positivePercentage}>
                <SectionTitle 
                    title={'Please leave feedback'}>
                    <FeedbackButton 
                        onLeaveFeedback={leaveFeedback}
                    />
                </SectionTitle>

                {!total ? (
                    <NotificationMessage
                        message={'There is no feedback'}/>) 
                        : (
                    <SectionTitle
                    title={'Statistics'}>
                    <Statistics 
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        onTotal={total}
                        onPositivePercentage={positivePercentage}
                        />
                    </SectionTitle>
                    )}
        </FeedbackContainer>
        )
}

export default App


