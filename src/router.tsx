import {createBrowserRouter} from 'react-router'
import App from './App';
import NotFound from './NotFound';
import ComingSoon from './ComingSoon';

const router = createBrowserRouter([
    {
        path: '/',
        element: (<App />),
        errorElement:(<NotFound />),
        children: [
            {
                path: '/',
                element: (<ComingSoon name='Dashboard'/>),
            },
            {
                path: '/leads',
                element: (<ComingSoon name='Leads' />),
            },
            {
                path: '/customers',
                element: (<ComingSoon name='Customers' />),
            },
            {
                path: '/work-orders',
                element: (<ComingSoon name='Work Orders' />),
            },
            {
                path: '/schedule',
                element: (<ComingSoon name='Schedule' />),
            },
            {
                path: '/reports',
                element: (<ComingSoon name='Reports' />),
            },
            {
                path: '/support',
                element: (<ComingSoon name='Support' />),
            },
            {
                path: '/settings',
                element: (<ComingSoon name='Settings' />),
            },
        ],
    }
]);

export default router;