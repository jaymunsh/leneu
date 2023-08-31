import styles from '../styles/home.css'

import {ReactComponent as LikedIcon} from '../imgs/icons/heart-solid.svg';
const Home = () => {
    return (
        <>
            <div className='card'>
                <div className='card-img'></div>
                <div className='card-info'>
                    <div className='title'>이모네 닭볶음탕</div>
                    <div className='address'>서울시 관악구 남부순환로 14</div>
                    <div className='menu'>닭볶음탕(9,000원), 계란말이(6,000원), 돈까스(7,000원)</div>
                    <div className='detail'><LikedIcon width={12} fill='#ED2939'/>&nbsp;20</div>
                </div>
            </div>
        </>
    );
};

const styles2 = {
    card: {
        
    },
};

export default Home;