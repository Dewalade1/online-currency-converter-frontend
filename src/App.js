import Axios from "axios";
import "./styles/css/index.css";

import Layout from "./layouts/layout";
import Converter from "./components/converter";

Axios.defaults.baseURL = process.env.FREE_BACKENDURL || process.env.PREPAID_BACKENDURL || process.env.PREMIUM_BACKENDURL;

function App() {
  return (
    <Layout>
      <div>
        <Converter />
      </div>
    </Layout>
  );
}

export default App;
