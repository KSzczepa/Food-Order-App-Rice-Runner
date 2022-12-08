import React, {useState, useEffect} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogIn: (email, password) => {},
    onSetLoggingForm: () => {},
    loginFormActive: false,
    onCloseLogForm: () => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginFormActive, setLoginFormActive] = useState(false);

    useEffect(() => {
		const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

		if (storedUserLoggedInInformation === '1') {
			setIsLoggedIn(true);
		}
	}, []);


    const logoutHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(false);
    };
    
    const loginHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(true);
        setLoginFormActive(false);
    };

    const logginFormHandler = () => {
        setLoginFormActive(true);
    };
    
    const logFormHandler = () => {
        setLoginFormActive(false);
    };

    return <AuthContext.Provider 
                    value={{
                        isLoggedIn: isLoggedIn,
                        onLogIn: loginHandler,
                        onLogout: logoutHandler,
                        onSetLoggingForm: logginFormHandler,
                        loginFormActive: loginFormActive,
                        onCloseLogForm: logFormHandler
                    }}
                >
                {props.children}
            </AuthContext.Provider>
};

export default AuthContext;