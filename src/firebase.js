const config = {
    apiKey: 'AIzaSyAWqTvqSKWXrEsLS0uCc1P1iVxVAsoRxOA',
    authDomain: 'api-with-user-data.firebaseapp.com',
    databaseURL: 'https://api-with-user-data.firebaseio.com',
    projectId: 'api-with-user-data',
};

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();
const db = firebase.database();
export const usersRef = db.ref('users');
export const favoritesByUserRef = db.ref('favorites-by-user');