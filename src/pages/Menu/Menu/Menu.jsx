import { Helmet } from 'react-helmet-async';
import menuImg2 from '../../../assets/menu/menu-bg2.png'
import Cover from '../../Shared/Cover/Cover';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg2} title={`Our Menu`} shortDescription="Would you like to try a dish?"></Cover>

        </div>
    );
};

export default Menu;