import { Layout } from "./components/Layout";
import { ThemeProvider } from 'styled-components';
import List from "./pages/List";
import GlobalStyles from "./styles/GlobalStyles";
import dark from './styles/themes/dark';

export default function App(){
  return (
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Layout>
          <List />
        </Layout>
      </ThemeProvider>
  )
};