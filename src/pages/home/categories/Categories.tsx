import theme from "../../../styles/theme";
import { HeartIcon } from "../../../public/Icons/HeartIcon";
import { PinIcon } from "../../../public/Icons/PinIcon";
import { ClockIcon } from "../../../public/Icons/ClockIcon";
import { ConfettiIcon } from "../../../public/Icons/ConfettieIcon";
import { HomeIcon } from "../../../public/Icons/HomeIcon";
import * as style from "./Categories.styles";

interface IconObject {
  id: string;
  component: React.ComponentType<{
    width: string;
    height: string;
    color: string;
  }>;
  color: string;
  name: string;
}

const Categories = () => {
  const categories: IconObject[] = [
    {
      id: "heart",
      component: HeartIcon,
      color: theme.colors.secondary,
      name: "All pets",
    },
    {
      id: "pin",
      component: PinIcon,
      color: theme.colors.secondary,
      name: "Location specific",
    },
    {
      id: "clock",
      component: ClockIcon,
      color: theme.colors.secondary,
      name: "Age specific",
    },
    {
      id: "confetti",
      component: ConfettiIcon,
      color: theme.colors.secondary,
      name: "Available now",
    },
    {
      id: "home",
      component: HomeIcon,
      color: theme.colors.secondary,
      name: "For small or big homes",
    },
  ];

  return (
    <style.CategoryContainer>
      {categories.map((category) => {
        return <style.categoryContent totalCategory={categories?.length}>
          <style.Category>
            <style.CategoryImage key={category.id}>
              <category.component
                width="60px"
                height="60px"
                color={category.color}
              />
            </style.CategoryImage>
          </style.Category>
          <style.categoryName>{category.name}</style.categoryName>
        </style.categoryContent>
      })}
      
    </style.CategoryContainer>
  );
};

export default Categories;
