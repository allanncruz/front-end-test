import { Layout } from "./components/Layout";
import { ThemeProvider } from 'styled-components';
import List from "./pages/List";
import GlobalStyles from "./styles/GlobalStyles";
import dark from './styles/themes/dark';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";

export default function App(){
  return (
      <ThemeProvider theme={dark}>
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