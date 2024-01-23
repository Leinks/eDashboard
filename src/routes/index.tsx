import { Route, Outlet } from "react-router-dom"
import * as Routing from "./paths.tsx"
import { lazy, Fragment, LazyExoticComponent, Suspense } from "react"



interface RouteProps {
	path?: string
	element?: LazyExoticComponent<() => JSX.Element> | null
	layout?: LazyExoticComponent<(props: {children: React.ReactNode}) => JSX.Element> | null
	children?: RouteProps[]
	guard?: LazyExoticComponent<(props: {children: React.ReactNode}) => JSX.Element> | null
}

export function renderRoutes (routes: RouteProps[]) {
    return routes.map((route, index) => {
			const Component = route.element || Fragment
			const Layout = route.layout || Fragment
			const Guard = route.guard || Fragment
			return (
			<Route 
					key={index}
					path = {route.path}
					element = {
						<Suspense fallback={<h1>Loading ...</h1>}>
							<Guard>
								<Layout>{route.children ? <Outlet /> : <Component />}</Layout>
							</Guard>
						</Suspense>}
			>
				{route.children && renderRoutes(route.children)}
			</Route>

			)
		})
}

export const routes: RouteProps[] = [
	{
		path: Routing.PATH_LOGIN,
		element: lazy(async ()=> await import('../pages/auth/Login').then(({ Login }) => ({default: Login}))),

	},
	{
		path: Routing.PATH_REGISTER,
		element: lazy(async ()=> await import('../pages/auth/Register').then(({ Register }) => ({default: Register}))),

	},
	{
		path: Routing.PATH_FORGOT_PASSWORD,
		element: lazy(async ()=> await import('../pages/auth/ForgetPassword').then(({ ForgetPassword }) => ({default: ForgetPassword}))),

	},
	{
		path: '*',
		element: lazy(async ()=> await import('../pages/NotFound.tsx')),

	},
	{
		layout: lazy(async ()=> await import('../layouts/LayoutAdmin')),
		guard: lazy(async ()=> await import('../guards/AuthGuard')),
		children: [

			{
				path: Routing.PATH_DASHBOARD,
				element: lazy(async ()=> await import('../pages/admin/Home').then(({ Home }) => ({default: Home}))),
			},
			{
				path: Routing.PATH_PROFILE,
				element: lazy(async ()=> await import('../pages/admin/Profile').then(({ Profile }) => ({default: Profile}))),

			},
			{
				path: Routing.PATH_CHAT,
				element: lazy(async ()=> await import('../pages/admin/Chat').then(({ Chat }) => ({default: Chat}))),

			},
			{
				path: Routing.PATH_TICKETS,
				element: lazy(async ()=> await import('../pages/admin/Tickets').then(({ Tickets }) => ({default: Tickets}))),
			},
			{
				path: Routing.PATH_CATEGORY,
				element: lazy(async ()=> await import('../pages/admin/Category').then(({ Category }) => ({default: Category}))),
			},
			{
				path: Routing.PATH_COMPANY,
				element: lazy(async ()=> await import('../pages/admin/Company').then(({ Company }) => ({default: Company}))),
			},
			{
				path: Routing.PATH_PRODUCT,
				element: lazy(async ()=> await import('../pages/admin/Product').then(({ Product }) => ({default: Product}))),
			},
			{
				path: Routing.PATH_LOCAL,
				element: lazy(async ()=> await import('../pages/admin/Local').then(({ Local }) => ({default: Local}))),
			},
		]
	}	
]

