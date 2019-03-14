import { auth } from '../src/firebase/firebase.js';
import { loadHeader } from './make-header-template.js';

loadHeader();

const ui = new firebaseui.auth.AuthUI(auth);

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],

    // signInSuccessUrl: './' + window.location.hash,
    credentialHealper: firebaseui.auth.credentialHealper.NONE
});