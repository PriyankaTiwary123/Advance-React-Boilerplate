import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../appStore";
import GlobalStyles, { H2, H3, H4 } from "../../styles/GlobalStyles";
import * as style from "./Detail.styles";

const Detail: React.FC = () => {
  const { petId } = useParams<{ petId: string }>();

  console.log(petId, "petId");
  const { filteredPets } = useSelector(
    (state: RootState) => state.useFuzzySearch
  );

  const index = filteredPets.findIndex((pet) => pet.id == petId);

  return (
    <style.DetailContainer>
      <style.AvatarImage src={filteredPets[index]?.photoUrl} alt="Pet Avatar" />
      <style.PetDetails>
        <H2>{filteredPets[index]?.name}</H2>
        {/* <table>
          <tr><H4>type</H4>
          <td>{filteredPets[index].species}</td></tr>
          <tr><H4>Date Added</H4></tr>
          <tr><H4>Age</H4></tr>
          <tr><H4>Availble for Adoption</H4></tr>
        </table> */}
      </style.PetDetails>
      {/* Replace `https://api.example.com/pets/${petId}/photo` with your actual API endpoint to fetch the pet's photo */}
    </style.DetailContainer>
  );
};

export default Detail;
