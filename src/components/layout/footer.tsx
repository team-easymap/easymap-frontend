import { useLocation, useNavigate, useNavigationType } from 'react-router-dom';
import FooterButtonComponent from '../common/footerButton';
import IconComponent from '../ui/icon';

const Footer = () => {
  const navigate = useNavigate();
  const type = useNavigationType();
  const { pathname, search } = useLocation();
  const selected = (path: string) => path === pathname;
  const selectedColor = (selected: boolean) => (selected ? 'purple' : 'black');

  return (
    <footer className='absolute bottom-0 z-[6000] flex h-[10dvh] w-full justify-between gap-6 bg-white'>
      <FooterButtonComponent
        title='주변'
        color={selectedColor(!!search && type !== 'POP')}
        onClick={() => navigate(search && type !== 'POP' ? '/' : '/?pois=true')}
        aria-selected={selected('/pois')}>
        <IconComponent name='mapPin' />
      </FooterButtonComponent>

      {/*      <FooterButtonComponent title='즐겨찾기' color={selectedColor('/')}>
        <IconComponent name='mapPin' color={selectedColor('/pois')} />
      </FooterButtonComponent>
  */}
      <FooterButtonComponent
        title='마이'
        color={selectedColor(selected('/my'))}
        onClick={() => navigate(selected('/my') ? '/' : '/my')}
        aria-selected={selected('/my')}>
        <IconComponent name='smile' />
      </FooterButtonComponent>
    </footer>
  );
};

export default Footer;
