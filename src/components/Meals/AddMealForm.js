import styles from './AddMealForm.module.css';
import Button from "../UI/Button";
import Input from '../UI/Input';

const AmountOfMeals = (props) => {
    return (
        <form className={`${styles['form']}`}>    
             
            <Input label='Amount' input={
                {
                    id: 'amount' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }
            }/>                    
            <Button></Button>
        </form> 
    );
};

export default AmountOfMeals;