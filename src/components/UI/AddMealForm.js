import styles from './AddMealForm.module.css';
import Button from "./Button";

const AmountOfMeals = () => {
    return (
        <form className={`${styles['form']}`}>    
             
            <div className={`${styles['items-num']}`}>  
            <label>Amount</label>                 
            <input></input>
            </div>                     
            <Button></Button>
        </form> 
    );
};

export default AmountOfMeals;