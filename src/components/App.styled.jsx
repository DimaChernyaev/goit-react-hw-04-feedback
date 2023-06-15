import styled from '@emotion/styled'
import changeBackgroundImage from 'helpers/changeBackgroundImage';

export const FeedbackContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;

    background-image: linear-gradient(to right, rgba(47, 48, 58, 0.7), rgba(47, 48, 58, 0.9)), 
    url(${(props) => changeBackgroundImage(props.percentage)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: darkgrey;
`;
