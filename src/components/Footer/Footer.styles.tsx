import styled from "styled-components";

export const StyledFooter = styled.footer`
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bgBlurred};
    a,p, h5 {
                color: ${({ theme }) => theme.colors.font3};
            }
    
    .footer {
        &__container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__contact-info {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
            a,p {
                color: ${({ theme }) => theme.colors.font3};
            }
        }
        &__socials {
            display: flex;
            gap: 1rem;
        }
        &__contact-gmail {
            a{
                text-decoration: none;
            }
            
        }
    }
`