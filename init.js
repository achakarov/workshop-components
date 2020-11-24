import { Router } from 'https://unpkg.com/@vaadin/router';

import { logout } from './services/authService.js';

import Home from './components/home.js';
import Register from './components/register.js';
import Login from './components/login.js';

customElements.define('home-component', Home);
customElements.define('register-component', Register);
customElements.define('login-component', Login);


const root = document.getElementById('root');
const router = new Router(root);

router.setRoutes([
    {
        path: '/',
        component: 'home-component'
    },
    {
        path: '/register',
        component: 'register-component'
    },
    {
        path: '/login',
        component: 'login-component'
    },
    {
        path: '/logout',
        action: (context, commands) => {
            logout();
            return commands.redirect('/');
            //TODO when log out - redirect to blank home page
        }
    },
]);

