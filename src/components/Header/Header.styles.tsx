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
                max-width: 30rem;
                p {
                    color: ${({ theme }) => theme.colors.font2};
                    font-size: 1rem;
                }
                span {
                    color: ${({ theme }) => theme.colors.font1};
                    //Note that using clamp() for font sizes, as in these examples, allows you to set a font-size that grows with the size of the viewport, but doesn't go below a minimum font-size or above a maximum font-size. It has the same effect as the code in Fluid Typography but in one line, and without the use of media queries.
                    font-size: clamp(3rem, 10vw, 6rem);
                }
            }
        }
        &__links {
            padding-top: 2rem;
            width: 100%;
            display: flex;
            justify-content: start;
            gap: 2rem;
            flex-wrap: wrap;
            .header__link-mywork {
                background-color: ${({ theme }) => theme.colors.btBlue};
            }
            .header__link-resume {
                border: 1px solid ${({ theme }) => theme.colors.btBlue};
            }
        }

        &__picture {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                max-width: 25rem;
                width: 80%;
            }
        }
    }
    @media (max-width: 768px) {
        .header {
            &__info {

            }
            &__picture{
                display: none;
            }
        }
    }

`;
