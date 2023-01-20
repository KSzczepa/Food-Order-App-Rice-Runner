import Modal from "../UI/Modal";
import UserAuthForm from "./UserAuthForm";
import styles from './LogginMainForm.module.css';
import Card from "../UI/Card";

const LogginForm = (props) => {

    return (<Modal onClose={props.onClickLogForm}>
        <Card>
        <UserAuthForm/>
        <div className={styles.sign}>
            {/* <p>Don't have account?</p> */}
            <span>Don't have account?</span>
            <button className={styles.btn}>Sign in</button>
        </div>
        </Card>
    </Modal>)
};

export default LogginForm;