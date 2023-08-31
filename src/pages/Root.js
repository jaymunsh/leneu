import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

import styles from '../styles/nav.css'

const RootLayout = () => {
    return (
        <div>
            <div className="area-top">
                <div className="nav-root">
                    <div></div>
                    {/* <img src={require('../imgs/pngs/logo.png')} height={80} /> */}
                    <Navigation />
                </div>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default RootLayout;