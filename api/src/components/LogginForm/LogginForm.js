import Modal from "../UI/Modal";
import Login from "../Login/Login";
import styles from './LogginForm.module.css';
import Card from "../UI/Card";

const LogginForm = (props) => {

    return (<Modal onClose={props.onClickLogForm}>
        <Card>
        <Login/>
        <div className={styles.sign}>
            {/* <p>Don't have account?</p> */}
            <span>Don't have account?</span>
            <button className={styles.btn}>Sign in</button>
        </div>
        </Card>
    </Modal>)
};

export default LogginForm;