import { RecoilRoot } from 'recoil'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '@/routes/router'
import GlobalStyles from '@/GlobalStyes'
import { CookiesProvider } from 'react-cookie'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient()

root.render(
	// <React.StrictMode>
	<CookiesProvider>
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>
				<GlobalStyles />
				{/* devtools */}
				<ReactQueryDevtools initialIsOpen={true} />
				<RouterProvider router={router} />
			</QueryClientProvider>
		</RecoilRoot>
	</CookiesProvider>
	// </React.StrictMode>
)
