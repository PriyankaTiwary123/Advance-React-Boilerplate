import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../appStore";
import { Button } from "../../components/button/Button";
import { Pet } from "../../components/types/pet";
import { ArrowRighIcon } from "../../public/ArrowRight";
import breakpoints from "../../styles/breakpoints";
import theme from "../../styles/theme";
import * as style from './Home.styles';

const Results: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { filteredPets } = useSelector(
    (state: RootState) => state.useFuzzySearch
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= parseInt(breakpoints.mobile));
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const redirectToPetDetails = () => {
    // Logic to redirect to pet details page
  }

  return (
    <style.ResultsContainer>
      {filteredPets?.map((pet: Pet, index: number) => (
        <style.PetContent key={pet.id} isMobile={isMobile}>
          <style.PetAvatar
            src={pet.photoUrl}
            alt={pet.name}
          />
          <div>{pet.name}</div>
          {isMobile ? ( // For mobile
            <style.RedirectContainer>
              <ArrowRighIcon width={30} height={30} color={theme.colors.primary}/>
            </style.RedirectContainer>
          ) : ( // For desktop
            <Button
              variant="secondary"
              onClick={redirectToPetDetails}
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

