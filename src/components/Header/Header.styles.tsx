import styled from "styled-components";

export const StyledSection = styled.section`
    padding-top: 6rem;
    padding-bottom: 3rem;
    display: flex;
    align-items: center;
    .header {
        &__info {
            flex: 1;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            h1 {
                max-width: 50rem;
                p {
                    max-width: 50rem;
                    color: ${({ theme }) => theme.colors.fontP};
                    font-size: 1rem;
                }
                span {
                    color: ${({ theme }) => theme.colors.fontSpan};
                    font-size: 6rem;
                }
            }
        }
        &__links {
            padding-top: 2rem;
            width: 100%;
            display: flex;
            justify-content: start;
            gap: 2rem;
            .header__link-mywork {
                background-color: ${({ theme }) => theme.colors.colorBlue};
            }
            .header__link-resume {
                border: 1px solid ${({ theme }) => theme.colors.colorBlue};
            }
        }

        &__animation {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 20rem;
            }
        }
    }
`;
