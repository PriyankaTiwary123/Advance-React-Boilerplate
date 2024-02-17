import * as style from "./Home.styles";
import theme from "../../styles/theme";
import { HeartIcon } from "../../public/Icons/HeartIcon";
import { PinIcon } from "../../public/Icons/PinIcon";
import { ClockIcon } from "../../public/Icons/ClockIcon";
import { ConfettiIcon } from "../../public/Icons/ConfettieIcon";
import { HomeIcon } from "../../public/Icons/HomeIcon";

interface IconObject {
    id: string;
    component: React.ComponentType<{ width: string; height: string; color: string }>;
    color: string;
}

const Categories = () => {
    const icons: IconObject[] = [
        { id: 'heart', component: HeartIcon, color: theme.colors.secondary },
        { id: 'pin', component: PinIcon, color: theme.colors.secondary },
        { id: 'clock', component: ClockIcon, color: theme.colors.secondary },
        { id: 'confetti', component: ConfettiIcon, color: theme.colors.secondary },
        { id: 'home', component: HomeIcon, color: theme.colors.secondary },
    ];

    return (
        <style.CategoryContainer>
            {icons.map((icon) => (
                <style.Category key={icon.id} totalCategory={icons.length}>
                    <style.CategoryImage>
                        <icon.component width="60px" height="60px" color={icon.color} />
                    </style.CategoryImage>
                </style.Category>
            ))}
        </style.CategoryContainer>
    );
};

export default Categories;
