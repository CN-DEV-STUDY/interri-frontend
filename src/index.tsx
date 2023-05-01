import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '@/routes/router';
import GlobalStyles from '@/GlobalStyes';
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<RecoilRoot>
			<GlobalStyles />
			<RouterProvider router={router} />
		</RecoilRoot>
	</React.StrictMode>
);
