import { useLocation } from 'react-router-dom';
import Footer from './footer';
import { Suspense } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const withFooterPathnames = ['/', '/user', '/login', '/pois', '/my'];

  return (
    <div className='flex h-dvh w-screen flex-col items-center justify-center bg-primary/10'>
      <div className='relative h-full w-full max-w-[375px] bg-white shadow-xl'>
        <Suspense fallback={<></>}>
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
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
