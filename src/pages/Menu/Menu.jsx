import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
// import menuImg from '../../assets/menu/menu-bg.png'
// import menuImg from '../../assets/menu/menu-bg.png'
// import menuImg2 from '../../assets/menu/pizza-bg.jpg'
import menuImg2 from '../../assets/menu/menu-bg2.png'
import PopularMenu from '../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* <img src={menuImg2} alt="" /> */}
            <Cover img={menuImg2} title={`Our Menu`} shortDescription="Would you like to try a dish?"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg2} title={`Our Menu`} shortDescription="Would you like to try a dish?"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg2} title={`Our Menu`} shortDescription="Would you like to try a dish?"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;