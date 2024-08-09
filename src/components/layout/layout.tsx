import { useLocation } from 'react-router-dom';
import Footer from './footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const withFooterPathnames = ['/', '/user', '/login', '/poi/list'];

  return (
    <div className='flex h-dvh w-screen flex-col items-center justify-center bg-primary/10'>
      <div className='relative h-full w-full max-w-[375px] border border-y-0 border-gray-2 bg-white'>
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
