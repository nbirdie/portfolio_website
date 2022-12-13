import styled from "styled-components";

export const StyledSection = styled.section`
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .projects {
        &__list {
            padding-top: 2rem;
            padding-bottom: 1.5rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
            gap: 2rem 2rem;
        }
        
    }
`