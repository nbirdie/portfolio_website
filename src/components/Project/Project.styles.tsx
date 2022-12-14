import styled, { ThemeConsumer } from "styled-components";

export const StyledProject = styled.li`
    background-color: ${({ theme }) => theme.colors.bgBlurred};
    width: 100%;
    max-width: 25rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: 0 auto;
    p {
        padding-bottom: 1rem;
    }
    img {
        width:100%;
        height: 13rem;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .project {
        &__container {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 2rem;
        }
        &__live, &__source {
            border: 0.1rem solid ${({ theme }) => theme.colors.btBlue};
            
        }
        &__links {
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
            gap: 1rem 1rem;
            padding-top: 2rem;
        }
    }
`;
