import './Button.css';

const Button = (props) => {
    return(
        <button className='add-meal' onClick={props.onClick}>+ Add</button>
    );
};

export default Button;