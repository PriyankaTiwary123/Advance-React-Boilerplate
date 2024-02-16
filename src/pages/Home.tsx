import { useNavigate } from "react-router-dom";
import Search from "../components/search/Search";

const Home: React.FC = () => {
  const navigate = useNavigate();

  // const redirectToAbout = () => {
  //   navigate('/about');
  // };

  return (
    <>
      <h1>Pets</h1>
      <Search />
    </>
  );
};

export default Home;
