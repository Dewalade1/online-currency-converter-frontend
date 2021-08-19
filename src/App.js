import './styles/index.css';

import Layout from './layouts/layout';
import Converter from './components/converter';

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
