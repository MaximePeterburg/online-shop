import { Link } from 'react-router-dom';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ContactLinks, Copyright, FooterContainer, FooterLogo } from './footer.styles';
const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        <FooterLogo to='/' />
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 1rem' }}>
          © Top Shop, 2023.
        </div>
      </Copyright>
      <div>
        <Link to='https://www.github.com/maximepeterburg'>
          <GithubIcon />
        </Link>
      </div>
    </FooterContainer>
  );
};

export default Footer;
