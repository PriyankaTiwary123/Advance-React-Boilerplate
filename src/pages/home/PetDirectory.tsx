import { Button } from "../../components/button/Button";
import { ArrowRighIcon } from "../../public/ArrowRight";
import theme from "../../styles/theme";
import * as styles from "./Home.styles";

const DirectoryDetailMobile = () => (
  <styles.DirectoryDetailMobile>
    <h2>Pets Directory</h2>
    <ArrowRighIcon width={24} height={24} color={theme.colors.primary} />
  </styles.DirectoryDetailMobile>
);

const DirectoryDetailDesktop = () => {
  return (
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
  );
};

const PetDirectory = () => {
  return (
    <styles.PetDirectoryContainer>
      <DirectoryDetailMobile />
      <styles.TreatsImage src="/images/treats.jpeg/" />
      <DirectoryDetailDesktop />
    </styles.PetDirectoryContainer>
  );
};

export default PetDirectory;
