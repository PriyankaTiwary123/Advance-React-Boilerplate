import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../appStore";
import GlobalStyles, { H2, H3, H4 } from "../../styles/GlobalStyles";
import * as style from "./Detail.styles";

const Detail: React.FC = () => {
  const { petId } = useParams<{ petId: string }>();
  const { filteredPets } = useSelector(
    (state: RootState) => state.useFuzzySearch
  );

  const index = filteredPets.findIndex((pet) => pet.id == petId);

  return (
    <style.DetailContainer>
      <style.AvatarImage src={filteredPets[index]?.photoUrl} alt="Pet Avatar" />
      <style.PetDetailsContainer>
        <H2>{filteredPets[index]?.name}</H2>
        <style.PetDetailsContent>
        <div style={{width: '50%'}}><label><H4>Type</H4></label>{filteredPets[index].species}</div>
        <div style={{width: '50%'}}><label><H4>Date Added</H4></label>{filteredPets[index].dateAdded}</div>
        <div style={{width: '50%'}}><label><H4>Age</H4></label>{filteredPets[index].species}</div>
        <div style={{width: '50%'}}><label><H4>Available for Adoption</H4></label>{filteredPets[index].available ? 'yes' : 'No'}</div>
        </style.PetDetailsContent>
       
      </style.PetDetailsContainer>
    </style.DetailContainer>
  );
};

export default Detail;
