import {useLoader} from "../hooks/useLoader"
import {Loader} from "../components/Loader"
import {Outlet} from "react-router-dom"
import React from "react"
import {PageLayout} from "../layouts/PageLayout"
import UserContext from "./userContext"

/**
 * # ContextProvider
 * @description ContextProvider is a functional component that provides the context to the children.
 * @requires useLoader
 * @requires Outlet
 * @see https://reactrouter.com/web/api/Outlet
 * @return {JSX.Element}
 * @constructor
 */
export function ContextAndLayoutProvider() {
	const user = useLoader() // get the user data from the loader

	if (!user)
		return (
			<PageLayout>
				<Loader />
			</PageLayout>
		)

	return (
		<PageLayout>
			<UserContext.Provider value={user}>
				<Outlet />
			</UserContext.Provider>
		</PageLayout>
	)
}
