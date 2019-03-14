import { auth, usersRef } from '../src/firebase.js';
import { loadHeader } from './make-header-template.js';
const options = { skipAuth: true };

loadHeader(options);

const ui = new firebaseui.auth.AuthUI(auth);

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    // Other config options...
    // credentialHealper: firebaseui.auth.credentialHealper.NONE
    signInSuccessUrl: './index.html',
    callbacks: {
        signInSucessWithAuthResult(authResult) {
            const user = authResult.user;
            usersRef.child(user.uid)
                .set({
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                });
            return true;
        }
    }
});