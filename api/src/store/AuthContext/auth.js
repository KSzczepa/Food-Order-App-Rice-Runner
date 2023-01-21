import {createSlice} from '@reduxjs/toolkit';


const initialAuthState = {
    isAuthenticated: false,
    isLoginFormActive: false
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
            localStorage.setItem('isLoggedIn', '1');
        },
        logout(state) {
            state.isAuthenticated = false;
            localStorage.removeItem('isLoggedIn');
        },
        showLoginForm(state) {
            state.isLoginFormActive = true;
        },
        hideLoginForm(state) {
            state.isLoginFormActive = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;