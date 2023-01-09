import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Route,
	RouterProvider,
} from "react-router-dom"
import React from "react"
import {Dashboard} from "./Components/dashboard"
import PageNotFound from "./Pages/PageNotFound"
import {PageLayout} from "./Pages/PageLayout"
import {useStore} from "./Hooks/UseStore"
import {OtherPageLayout} from "./Pages/OtherPageLayout"

// todo update documentation
/**
 * # Router
 * Router is a functional component that manages the client-side routing for the application. It utilizes `react-router-dom` to provide a variety of routing options, including rendering different components based on the current URL, and handling 404 errors.
 *
 * @return {JSX.Element} Returns a JSX element representing the client-side routing for the application.
 * @example
 * <Router />
 */
export function Router() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path={"/"}
				element={<PageLayout />}
				loader={useStore}
				errorElement={<Navigate to={"/page-not-found"} />}>
				<Route
					path={"/"}
					element={<Dashboard />}
				/>
				<Route
					path={`/profil`}
					element={
						<OtherPageLayout
							title={"Profil"}
							label={"Paramètres de votre profil"}
						/>
					}
				/>
				<Route
					path={`/settings`}
					element={
						<OtherPageLayout
							title={"Paramètres"}
							label={"Réglage de l'Application"}
						/>
					}
				/>
				<Route
					path={`/community`}
					element={
						<OtherPageLayout
							title={"Communauté"}
							label={"Échangez avec la communauté SportSee"}
						/>
					}
				/>
				<Route
					path={`/page-not-found`}
					element={<PageNotFound />}
				/>
			</Route>
		)
	)

	return <RouterProvider router={router} />
}
