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
      <style.PageSection>
        <globalStyle.H1>Pets</globalStyle.H1>
        <Search />
        <style.DropDownContainer>
        {dropdowns.map((dropdown) => (
          <Dropdown
            key={dropdown.id}
            label={dropdown.label}
            isChevron={dropdown.isChevron}
            isMargin={dropdown.isMargin}
          />
        ))}
      </style.DropDownContainer>
      </style.PageSection>
    
      <style.PageSection>
        <globalStyle.H3>Results</globalStyle.H3>
        <Results />
      </style.PageSection>
      <style.PageSection>
        {" "}
        <PetDirectory />
      </style.PageSection>

      <style.PageSection>
        <globalStyle.H3>Categories</globalStyle.H3>
        <Categories />
      </style.PageSection>
    </style.ContentContainer>
  );
};

export default Home;
