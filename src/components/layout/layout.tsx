const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-dvh w-screen flex-col items-center justify-center'>
      <div className='relative flex h-full w-full max-w-[375px] border border-x-2'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
