import styled from "styled-components";

export const StyledNav = styled.nav`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    margin-top: 2rem;

    &.scrolled {
        background-color: ${({ theme }) => theme.colors.bgBlurred};
        opacity: 0.8;
    }

    .nav {
        &__container {
            display: flex;
            align-items: center;
        }
        &__list {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            font-size: 1rem;
            font-weight: bold;
            }
            &__link {
                position: relative;
                a {
                    &::after {
                        position: absolute;
                        left: 0;
                        bottom: -5px;
                        height: 2px;
                        width: 0;
                        background: ${({ theme }) => theme.colors.colorBlue};
                        content: "";
                    }
                    &:hover::after {
                        width: 100%;
                        transition: cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s all;
                    }
                }
        }
    }
`;

export const StyledLogo = styled.a`
    font-size: 2.5rem;
    transform: rotate(23deg);
`;
