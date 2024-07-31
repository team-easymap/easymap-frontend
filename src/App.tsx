import { Outlet } from 'react-router-dom';
import Footer from './components/layout/footer';
import Layout from './components/layout/layout';
import { MapContainer } from 'react-leaflet';

function App() {
  return (
    <Layout>
      <MapContainer
        center={[37.5665, 126.978]}
        zoom={16}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{
          width: '100%',
          height: '90%'
        }}
        tap={false}>
        <Outlet />
      </MapContainer>
      <Footer />
    </Layout>
  );
}

export default App;
