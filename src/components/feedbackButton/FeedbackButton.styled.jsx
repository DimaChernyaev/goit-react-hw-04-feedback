import styled from '@emotion/styled'

export const Button = styled.button`
    padding: 14px;
    width: 120px;

    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: black;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;

    border: 3px solid blue;
    border-radius: 40px;

    transition: border-color 250ms linear, color 250ms linear;

    &:hover {
        border-color: ${({name}) => {
            switch(name) {
                case 'good':
                    return "green"
                case 'neutral':
                    return "gold"
                case 'bad':
                    return "red"
                default:
                    return
            }
        }};
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
`;
