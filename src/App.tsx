import GlobalStyles from "./styles/GlobalStyles";
import { Layout } from "./components/Layout";
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import List from "./pages/List";
import About from "./pages/About";
import Detail from "./pages/Detail";

import { useItems } from './hooks/context';
import Cart from "./pages/Cart";


export default function App(){
  const {theme} = useItems();
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyles />
          <Layout>
            <Routes>
              <Route path="/" element={<List />} />
              <Route path="/item/:id" element={<Detail />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/reservados" element={<Cart />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
  )
};