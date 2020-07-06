import './app';
import { Router } from '@vaadin/router';

const rootEl = document.getElementById('root');

const router = new Router(rootEl);
router.setRoutes([{ path: '/', component: 'app-root' }]);
