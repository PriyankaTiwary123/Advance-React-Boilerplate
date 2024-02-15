import * as Style from "./Header.Styles";

const Header: React.FC = () => {
  return (
    <Style.HeaderContainer>
      <Style.ImageContainer src='/icons/pet-icon-small.svg'></Style.ImageContainer>
    </Style.HeaderContainer>
  );
};

export default Header;
