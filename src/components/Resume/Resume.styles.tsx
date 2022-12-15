import styled from "styled-components";

export const StyledResume = styled.a`
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 999;
    width: 3rem;
    height: 3rem;
    opacity: 0.8;
    transition: all 0.2s linear;
    background-color: ${({ theme }) => theme.colors.btBlue};
    &:hover {
        transform: scale(1.5);
    }
`;
