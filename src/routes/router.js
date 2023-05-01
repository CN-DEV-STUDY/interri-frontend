import {
	ROUTES_ROOT_MAIN,
	ROUTES_DESIGN_REQUEST_REGISTRATION,
} from '@/routes/routes';
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import DesignRequestRegistration from '@/components/DesignRequestRegistration';

const router = createBrowserRouter([
	{
		path: ROUTES_ROOT_MAIN,
		element: <App />,
		// errorElement: <ErrorBoundary />,
		children: [],
	},
	{
		path: ROUTES_DESIGN_REQUEST_REGISTRATION,
		element: <DesignRequestRegistration />,
	},
]);

export default router;
