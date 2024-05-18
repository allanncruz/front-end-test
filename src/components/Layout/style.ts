import styled from "styled-components";

export const Grid = styled.section`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;
    grid-template-areas: 
      'AS MH'
      'AS CT';
    height: 100vh;

    @media(max-width: 720px){
      grid-template-columns: 70px auto;
    }
`;