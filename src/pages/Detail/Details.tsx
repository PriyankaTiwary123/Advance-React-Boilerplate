import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../appStore";
import { H2, H4 } from "../../styles/GlobalStyles";
import { calculateAge } from "../../utils/helper";
import * as style from "./Detail.styles";

const Detail: React.FC = () => {
  const { petId } = useParams<{ petId: string }>();
  const { filteredPets } = useSelector(
    (state: RootState) => state.useFuzzySearch
  );

  const index = filteredPets.findIndex((pet) => pet.id == petId);
  const pet = filteredPets[index];


  const petContentDetails = [
    { label: "Type", value: pet?.species },
    { label: "Date Added", value: pet?.dateAdded },
    { label: "Age", value: calculateAge(pet?.dateAdded) },
    { label: "Available for Adoption", value: pet?.available ? "Yes" : "No" },
  ];

  return (
    <style.DetailContainer>
      {pet && (
        <>
          <style.AvatarImage src={pet.photoUrl} alt="Pet Avatar" />
          <style.PetDetailsContainer>
            <H2>{pet.name}</H2>
            <style.PetDetailsContent>
              {petContentDetails.map((detail, index) => (
                <div key={index} style={{ width: "50%" }}>
                  <label>
                    <H4>{detail.label}</H4>
                  </label>
                  {detail.value}
                </div>
              ))}
            </style.PetDetailsContent>
          </style.PetDetailsContainer>
        </>
      )}
    </style.DetailContainer>
  );
};

export default Detail;
