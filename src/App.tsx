import { Outlet } from 'react-router-dom';
import Footer from './components/layout/footer';
import Layout from './components/layout/layout';

function App() {
  return (
    <Layout>
      <Outlet />
      <Footer />
    </Layout>
  );
}

export default App;
