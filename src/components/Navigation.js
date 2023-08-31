import { Link } from "react-router-dom";

import {ReactComponent as HomeIcon} from '../imgs/icons/house-solid.svg';
import {ReactComponent as LikedIcon} from '../imgs/icons/heart-solid.svg';
import {ReactComponent as MyPageIcon} from '../imgs/icons/user-solid.svg';

import styles from '../styles/nav.css'

const Navigation = () => {
    return <div>
        <nav>
            <ul>
                <li><Link to="/home"><HomeIcon width={30} height={30}/></Link></li>
                <li><Link to="/liked"><LikedIcon width={30} height={30}/></Link></li>
                <li><Link to="/mypage"><MyPageIcon width={30} height={30}/></Link></li>
            </ul>
        </nav>
    </div>;
}

export default Navigation;