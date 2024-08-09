import { useLocation } from 'react-router-dom';
import { MapContainer } from 'react-leaflet';
import Footer from './footer';
import { useLocationStore } from '@/store/location';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const withFooterPathnames = ['/', '/user', '/login', '/poi/list'];

  return (
    <div className='flex h-dvh w-screen flex-col items-center justify-center'>
      <div className='relative h-full w-full max-w-[375px] border border-x-2'>
        {pathname === '/' ? (
          <>
            {children}
            <Footer />
          </>
        ) : (
          <>
            {children}
            {withFooterPathnames.includes(pathname) && <Footer />}
          </>
        )}
      </div>
    </div>
  );
};

export default Layout;
