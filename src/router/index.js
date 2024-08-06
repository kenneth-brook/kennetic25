import { Home } from '../components/Home.js';
import { About } from '../components/About.js';
import { Contact } from '../components/Contact.js';

const routes = {
    '/': Home,
    '/#home': Home,
    '/#about': About,
    '/#contact': Contact,
};

export const Router = () => {
    const path = window.location.hash || '#home';
    return routes[path] ? routes[path]() : '<h2>404</h2><p>Page not found</p>';
};