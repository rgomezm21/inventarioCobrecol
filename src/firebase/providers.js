import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from './config';

export const loginEmail = async({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid } = resp.user;

        return {
            ok: true,
            uid
        }

    } catch (error) {
        return { 
            ok: false, 
            errorMessage: error.message 
        }
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}

