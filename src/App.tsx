import { Layout } from "./components/Layout";
import List from "./pages/List";
import GlobalStyles from "./styles/GlobalStyles";

export default function App(){
  return (
      <>
        <GlobalStyles />
        <Layout>
          <List />
        </Layout>
      </>
  )
};