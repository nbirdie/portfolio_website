import styled from "styled-components";

export const StyledSection = styled.section`
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .aboutme__subtitle {
        color: ${({ theme }) => theme.colors.font3};
    }
`

export const StyledSubSection = styled.div`
    padding-top: 2rem;
    padding-bottom: 1.5rem;
    display: flex;
    gap: 3rem;
    .aboutme {
        &__info {
            flex: 1;
            a {
                background-color: ${({ theme }) => theme.colors.btBlue}
            }
            p {
                padding-bottom: 2rem;
            }
        }
        &__technologies {
            flex: 1;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`