import Modal from "../UI/Modal";
import UserAuthForm from "./UserAuthForm";
import styles from './LogginMainForm.module.css';
import CardAuth from "../UI/CardAuth";

const LogginForm = (props) => {

    return (<Modal onClose={props.onClickLogForm} style={{width: '26rem', left: 'calc(50% - 13rem)'}}>
        <CardAuth>
        <UserAuthForm/>
        <div className={styles.sign}>
            {/* <p>Don't have account?</p> */}
            <span>Don't have account?</span>
            <button className={styles.btn}>Sign in</button>
        </div>
        </CardAuth>
    </Modal>)
};

export default LogginForm;