import * as style from "./Home.styles";
import theme from "../../styles/theme";
import { HeartIcon } from "../../public/Icons/HeartIcon";
import { PinIcon } from "../../public/Icons/PinIcon";
import { ClockIcon } from "../../public/Icons/ClockIcon";
import { ConfettiIcon } from "../../public/Icons/ConfettieIcon";
import { HomeIcon } from "../../public/Icons/HomeIcon";

interface IconObject {
    component: React.ComponentType<{ width: string; height: string; color: string }>;
    color: string;
  }
  
  const Categories = () => {
    const icons: IconObject[] = [
      { component: HeartIcon, color: theme.colors.secondary },
      { component: PinIcon, color: theme.colors.secondary },
      { component: ClockIcon, color: theme.colors.secondary },
      { component: ConfettiIcon, color: theme.colors.secondary },
      { component: HomeIcon, color: theme.colors.secondary },
    ];

  return (
    <style.CategoryContainer>
      {icons.map((icon, index) => (
        <style.Category key={index}>
          <style.CategoryImage>
            <icon.component width="60px" height="60px" color={icon.color} />
          </style.CategoryImage>
        </style.Category>
      ))}
    </style.CategoryContainer>
  );
};

export default Categories;
