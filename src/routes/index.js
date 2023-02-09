import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Custom from '../pages/Custom';
import About from '../pages/About';
import Cart from '../pages/Cart/Cart.js';
import ContentOnlyLayout from '../components/Layout/ContentOnlyLayout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: ContentOnlyLayout },
    { path: '/register', component: Register, layout: ContentOnlyLayout },
    { path: '/customize', component: Custom },
    { path: '/about-us', component: About },
    { path: '/cart', component: Cart },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
