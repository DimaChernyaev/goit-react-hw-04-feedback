import { Button, ButtonContainer } from './FeedbackButton.styled';
import PropTypes from 'prop-types';

const FeedbackButton = ({onLeaveFeedback }) => {
    return ( 
    <ButtonContainer>
        <Button type="button" name="good" onClick={onLeaveFeedback}>Good</Button>
        <Button type="button" name="neutral" onClick={onLeaveFeedback}>Neutral</Button>
        <Button type="button" name="bad" onClick={onLeaveFeedback}>Bad</Button>
    </ButtonContainer>)
}

FeedbackButton.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackButton