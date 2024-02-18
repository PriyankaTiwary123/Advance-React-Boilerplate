import Dropdown from "../../components/dropdown/Dropown";
import Search from "../../components/search/Search";
import { dropdowns } from "../../constant";
import * as globalStyle from "../../styles/GlobalStyles";
import { Categories, PetDirectory, Results } from ".";
import * as style from "./Home.styles";

const Home: React.FC = () => {
  return (
    <style.ContentContainer>
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
    </style.ContentContainer>
  );
};

export default Home;
