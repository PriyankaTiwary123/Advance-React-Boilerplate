import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { RootState } from "../../../appStore";
import { Button } from "../../../components/button/Button";
import { Pet } from "../../../components/types/pet";
import { ArrowRighIcon } from "../../../public/ArrowRight";
import breakpoints from "../../../styles/breakpoints";
import theme from "../../../styles/theme";
import * as style from './Results.styles';

const Results: React.FC = () => {
  const navigate = useNavigate();

  const [ismobile, setismobile] = useState<boolean>(false);
  const { filteredPets } = useSelector(
    (state: RootState) => state.useFuzzySearch
  );

  useEffect(() => {
    const handleResize = () => {
      setismobile(window.innerWidth <= parseInt(breakpoints.mobile));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const redirectToPetDetails = (petId: string) => {
    navigate(`/pet-details/${petId}`);
  }

  return (
    <style.ResultsContainer>
      {filteredPets?.map((pet: Pet) => (
        <style.PetContent key={pet.id} ismobile={ismobile}>
          <style.PetAvatar
            src={pet.photoUrl}
            alt={pet.name}
          />
          <div>{pet.name}</div>
          {ismobile ? ( // For mobile
            <style.RedirectContainer  onClick={() => redirectToPetDetails(pet.id)}>
              <ArrowRighIcon width={30} height={30} color={theme.colors.primary}/>
            </style.RedirectContainer>
          ) : ( // For desktop
            <Button
              variant="secondary"
              onClick={() => redirectToPetDetails(pet.id)}
              borderRadius="20px"
              size="small"
            >
              View
            </Button>
          )}
        </style.PetContent>
      ))}
    </style.ResultsContainer>
  );
};

export default Results;

