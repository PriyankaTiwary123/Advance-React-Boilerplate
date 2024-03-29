import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Content, Main } from "./Layout.styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Main>
      <Header icon="/icons/pet-icon-small.svg" />
      <Content>{children}</Content>
      <Footer />
    </Main>
  );
};

export default Layout;
