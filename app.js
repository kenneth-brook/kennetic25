import { Header } from './src/components/Header.js';
import { Router } from './src/router/index.js';
import { getState } from './src/store/index.js';

const root = document.getElementById('root');

const render = () => {
    root.innerHTML = `
        ${Header()}
        <main id="app">${Router()}</main>
    `;
};

window.addEventListener('hashchange', render);

// Initial render
render();
