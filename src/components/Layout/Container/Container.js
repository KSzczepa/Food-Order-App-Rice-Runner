import styles from './Container.module.css';
import AvailableMeals from '../../Meals/AvailableMeals';

const Container = () => {
    return (
        <div className={`${styles.container}`}>
            <AvailableMeals></AvailableMeals>
        </div>
    );
};

export default Container;