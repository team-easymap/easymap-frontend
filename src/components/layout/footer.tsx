import { Button } from '../ui/button';

const Footer = () => {
  return (
    <footer className='absolute bottom-0 flex w-full justify-between border border-t-2 p-4'>
      <Button variant='ghost'>📍</Button>
      <Button variant='ghost'>⭐️</Button>
      <Button variant='ghost'>👩🏻‍💻</Button>
    </footer>
  );
};

export default Footer;
