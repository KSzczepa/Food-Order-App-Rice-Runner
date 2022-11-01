import foodImg from '../images/food15.jpg';
import './Image.css';

const Image = () => {

    return (
        <div>
            <img className='main-img' src={foodImg}></img>
        </div>
    );
};

export default Image;