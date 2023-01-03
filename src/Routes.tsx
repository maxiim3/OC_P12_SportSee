import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import {Dashboard} from "./Pages/dashboard"
import React from "react"
import {IUser} from "./Interface/IUser"
import PageNotFound from "./Pages/PageNotFound"
import {useStore} from "./Hooks/UseStore"

/**
 * # StoreContext
 * StoreContext is a React context object used to store and access user data throughout the application.
 *
 * @type {React.Context} A context object containing user data.
 */
export const StoreContext = React.createContext({} as IUser)

/**
 * # Router
 * Router is a functional component that manages the client-side routing for the application. It utilizes `react-router-dom` to provide a variety of routing options, including rendering different components based on the current URL, and handling 404 errors.
 *
 * @return {JSX.Element} Returns a JSX element representing the client-side routing for the application.
 * @example
 * <Router />
 */
export function Router() {
	const {user} = useStore(12) // 12 || 18

	return (
		<BrowserRouter>
			<StoreContext.Provider value={user}>
				<Routes>
					<Route
						path={"/"}
						element={<Dashboard />}
					/>
					<Route
						path={`/page-not-found`}
						element={<PageNotFound />}
					/>
					<Route
						path={`*`}
						element={<Navigate to={"/page-not-found"} />}
					/>
				</Routes>
			</StoreContext.Provider>
		</BrowserRouter>
	)
}
