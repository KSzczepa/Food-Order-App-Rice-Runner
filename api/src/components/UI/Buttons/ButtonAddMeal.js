import './ButtonAddMeal.css';

const ButtonAddMeal = (props) => {
    return(
        <button className='add-meal' onClick={props.onClick}>+ Add</button>
    );
};

export default ButtonAddMeal;