import React from "react";

import { Aside } from "../Aside";
import { Header } from "../Header";
import { Grid } from "./style";
import Content from "../Content";

export const Layout = ({ children }: {children: React.ReactNode}) =>{
  return (
      <Grid>
        <Header />
        <Aside />
        <Content>
          {children}
        </Content>
      </Grid>
  )
};