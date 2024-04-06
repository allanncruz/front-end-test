import React from "react";

import { Aside } from "../Aside";
import { Header } from "../Header";
import { Content } from "../Content";
import { Grid } from "./style";

export const Layout: React.FC = () =>{
  return (
      <Grid>
        <Header />
        <Aside />
        <Content />
      </Grid>
  )
};