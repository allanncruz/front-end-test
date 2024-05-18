import styled from "styled-components";

export const Grid = styled.section`
    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: 0 auto;
    grid-template-areas: 
      'AS MH'
      'AS CT';
    height: 90vh;

    @media(max-width: 720px){
      grid-template-columns: 70px auto;
    }
`;