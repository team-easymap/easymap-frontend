import FooterButtonComponent from '../common/footerButton';

const Footer = () => {
  return (
    <footer className='absolute bottom-0 flex h-[10dvh] w-full justify-between gap-6'>
      <FooterButtonComponent icon='mapPin' title='주변' color='black' />
      <FooterButtonComponent icon='star' title='즐겨찾기' color='black' />
      <FooterButtonComponent icon='smile' title='마이' color='purple' />
    </footer>
  );
};

export default Footer;
