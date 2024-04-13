import GlobalStyles from "./styles/GlobalStyles";
import { Layout } from "./components/Layout";
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import List from "./pages/List";
import About from "./pages/About";

import { useTheme } from './hooks/theme';


export default function App(){
  const {theme} = useTheme();
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyles />
          <Layout>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/sobre" element={<About />} />
          </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
  )
};