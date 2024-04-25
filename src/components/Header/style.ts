import styled from "styled-components";

export const Container = styled.header`
    grid-area: MH;
    border-bottom: solid 1px ${props => props.theme.colors.primaryLight};
    background-color: ${props => props.theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 25px; 
`;