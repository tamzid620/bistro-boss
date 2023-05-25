import Hooks from "../../../Hooks/Hooks";
import Cover from "../../shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
    Hooks('Bistro | Menu')
    return (
        <div>
            <Cover img ={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img ={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img ={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;