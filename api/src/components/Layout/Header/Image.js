import foodImg from '../images/food15.jpg';
import './Image.css';

const Image = () => {

    return (
        <div className='img-trunk'>
            {/* <img className='main-img' src={foodImg} alt='A table full of delicious food.'></img> */}
            <img className='main-img' src={process.env.PUBLIC_URL + '/img/food15.jpg'} alt='A table full of delicious food.'></img>
        </div>
    );
};

export default Image;