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