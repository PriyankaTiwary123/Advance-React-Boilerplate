import Dropdown from "../../components/dropdown/Dropown";
import Search from "../../components/search/Search";
import { dropdowns } from "../../constant";
import * as globalStyle from "../../styles/common.style";
import { Categories, PetDirectory, Results } from ".";
import * as style from "./Home.styles";
import { usePetData } from "../../hooks/usePetData";

const Home: React.FC = () => {
  usePetData();
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
