import { useLocation, useNavigate } from 'react-router-dom';
import FooterButtonComponent from '../common/footerButton';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selected = (path: string) => path === location.pathname;
  const selectedColor = (path: string) => (selected(path) ? 'purple' : 'black');
  return (
    <footer className='absolute bottom-0 flex h-[10dvh] w-full justify-between gap-6'>
      <FooterButtonComponent
        icon='mapPin'
        title='주변'
        color={selectedColor('/pois')}
        onClick={() => navigate('/pois')}
        aria-selected={selected('/pois')}
      />
      {/* <FooterButtonComponent icon='star' title='즐겨찾기' color='black' /> */}
      <FooterButtonComponent
        icon='smile'
        title='마이'
        color={selectedColor('/my')}
        onClick={() => navigate('/my')}
        aria-selected={selected('/my')}
      />
    </footer>
  );
};

export default Footer;
