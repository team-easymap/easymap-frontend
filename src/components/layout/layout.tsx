import { useLocation } from 'react-router-dom';
import Footer from './footer';
import { Suspense } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const withFooterPathnames = ['/', '/user', '/login', '/pois', '/my'];

  return (
    <div className='flex flex-col items-center justify-center w-screen h-dvh bg-primary/10'>
      <div className='relative h-full w-full max-w-[375px] border border-y-0 border-gray-2 bg-white'>
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
