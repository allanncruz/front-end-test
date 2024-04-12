import React from "react";
import { Container, InputSearch, Title } from "./style";

interface HeaderContentProps {
  title: string
}

export const HeaderContent = ({title}: HeaderContentProps) =>{
  return (
      <Container>
        <Title>{title}</Title>
        <InputSearch type="text" placeholder="Filtrar números" />
      </Container>
  )
};