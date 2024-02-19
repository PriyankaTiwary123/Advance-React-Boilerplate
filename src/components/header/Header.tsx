import * as Style from "./Header.Styles";

interface HeaderProps {
  icon?: string;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ icon, title }) => {
  return (
    <Style.HeaderContainer>
      {icon && <Style.ImageContainer src={icon} alt="Pet Icon" />}
      {title && <h1>{title}</h1>}
    </Style.HeaderContainer>
  );
};

export default Header;