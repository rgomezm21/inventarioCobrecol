import { loginEmail, logoutFirebase } from "../../firebase/providers"
import { checkingCredentials, logout, login } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startLogin = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await loginEmail({ email, password });
        if (!result.ok) return dispatch(logout(result));
        dispatch(login(result))
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(logout());
    }

}