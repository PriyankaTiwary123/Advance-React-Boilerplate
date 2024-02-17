import { Button } from "../../components/button/Button";
import * as styles from "./Home.styles";

const PetDirectory = () => {
  return (
    <styles.PetDirectoryContainer>
      <styles.TreatsImage src="/images/treats.jpeg/" />
   
      <styles.DirectoryDetail>
        <h2>Pets Directory</h2>
        <styles.Details>
          See all pets available for adoption, promote them and get them a home
        </styles.Details>
        <Button
          variant="primary"
          onClick={() => {}}
          children="See All"
          borderRadius="20px"
        ></Button>
      </styles.DirectoryDetail>
    </styles.PetDirectoryContainer>
  );
};

export default PetDirectory;
