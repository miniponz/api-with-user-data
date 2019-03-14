import { auth } from "./firebase/firebase";

export default function makeHeaderTemplate() {
    const html = `
    <header>
        <img class="header-image" src="./assets/snowflake.jpg" alt="microscopic snowflake against blue background">
        <h1>What's It Doing Outside?</h1>
        <img class="header-image" src="./assets/sun.jpeg" alt="photograph of sun against blue sky">
    </header>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

function makeProfileTemplate(user) {
    const html = /*html*/ `
    <div id="profile">
        <span id="user-name">${user.displayName}</span>
        <img id="profile-image" src="${user.photoURL}" alt="user profile image">
        <button>Sign Out</button> 
    </div>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const headerDisplay = document.getElementById('header-display');

export function loadHeader(options) {
    const dom = makeHeaderTemplate();
    const header = dom.querySelector('header');
    headerDisplay.appendChild(dom);

    if(options && options.skipAuth) {
        return;
    }

    auth.onAuthStateChanged(user => {
        if(user) {
            const userDom = makeProfileTemplate(user);
            const signOutButton = userDom.querySelector('button');
            signOutButton.addEventListener('click', () => {
                auth.signOut();
            });
            header.appendChild(userDom);
        }
        else {
            window.location = './auth.html';
        }
    });
}


