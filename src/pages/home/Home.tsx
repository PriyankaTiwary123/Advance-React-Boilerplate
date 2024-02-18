import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import Dropdown from "../../components/dropdown/Dropown";
import Search from "../../components/search/Search";
import { dropdowns } from "../../constant";
import * as globalStyle from "../../styles/GlobalStyles";
import Categories from "./Categories";
import * as style from "./Home.styles";
import PetDirectory from "./PetDirectory";
import Results from "./Results";

const Home: React.FC = () => {
  const navigate = useNavigate();

  // const redirectToAbout = () => {
  //   navigate('/about');
  // };

  return (
    <style.HomeContainer>
      <globalStyle.H1>Pets</globalStyle.H1>
      <Search />
      <style.DropDownContainer spacing="20px">
        {dropdowns.map((dropdown) => (
          <Dropdown
            key={dropdown.id}
            label={dropdown.label}
            isChevron={dropdown.isChevron}
            isMargin={dropdown.isMargin}
          />
        ))}
      </style.DropDownContainer>
      <globalStyle.H3>Results</globalStyle.H3>
      <Results />
      <PetDirectory />
      <globalStyle.H3>Categories</globalStyle.H3>
      <Categories />
    </style.HomeContainer>
  );
};

export default Home;
