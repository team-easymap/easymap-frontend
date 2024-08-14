import { useLocation, useNavigate } from 'react-router-dom';
import FooterButtonComponent from '../common/footerButton';
import IconComponent from '../ui/icon';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selected = (path: string) => path === location.pathname;
  const selectedColor = (path: string) => (selected(path) ? 'purple' : 'black');
  return (
    <footer className='absolute bottom-0 flex h-[10dvh] w-full justify-between gap-6'>
      <FooterButtonComponent
        title='주변'
        color={selectedColor('/pois')}
        onClick={() => navigate('/pois')}
        aria-selected={selected('/pois')}>
        <IconComponent name='mapPin' color={selectedColor('/pois')} />
      </FooterButtonComponent>
      {/*<FooterButtonComponent
        title='즐겨찾기'
        color={selectedColor('/')}>
        <IconComponent name='mapPin' color={selectedColor('/pois')} />
  </FooterButtonComponent> */}
      <FooterButtonComponent
        title='마이'
        color={selectedColor('/my')}
        onClick={() => navigate('/my')}
        aria-selected={selected('/my')}>
        <IconComponent name='smile' color={selectedColor('/my')} />
      </FooterButtonComponent>
    </footer>
  );
};

export default Footer;
