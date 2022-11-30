import styled from "styled-components";

export const StyledBurger = styled.div<{ open: boolean }>`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 20;
    display: none;
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        div {
            cursor: pointer;
            background-color: ${({ theme }) => theme.colors.bgLight};
            width: 2rem;
            height: 0.25rem;
            border-radius: 10px;
            transform-origin: 1px;

            &:nth-child(1) {
                transform: ${({ open }) =>
                    open ? "rotate(45deg)" : "rotate(0)"};
            }

            &:nth-child(2) {
                transform: ${({ open }) =>
                    open ? "translateX(100%)" : "translateX(0)"};
                opacity: ${({ open }) => (open ? 0 : 1)};
            }
            &:nth-child(3) {
                transform: ${({ open }) =>
                    open ? "rotate(-45deg)" : "rotate(0)"};
            }
        }
    }
`;

export const StyledRightNav = styled.div<{ open: boolean }>`
    .nav {
        &__list {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            font-size: 1rem;
            font-weight: bold;
            flex-flow: row nowrap;
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
                    background: ${({ theme }) => theme.colors.btBlue};
                    content: "";
                }
                &:hover::after {
                    width: 100%;
                    transition: cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s all;
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        .nav {
            &__list {
                flex-flow: column nowrap;
                justify-content: start;
                align-items: start;
                background-color:${({ theme }) => theme.colors.bgBlurred};
                position: fixed;
                transform: ${({ open }) =>
                    open ? "translateX(0)" : "translateX(100%)"};
                top: 0;
                right: 0;
                height: 100%;
                width: 15rem;
                padding-top: 2rem;
                padding-left: 2rem;
                &__link {
                    color: white;
                }
            }
        }
    }
`;
