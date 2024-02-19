import * as Styles from "./Footer.Styles";

interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return <Styles.FooterContainer data-testid="footer-container">{children}</Styles.FooterContainer>;
};

export default Footer;
