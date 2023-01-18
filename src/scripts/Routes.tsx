import {RouterProvider} from "react-router-dom"
import React from "react"
import {useRouter} from "./hooks/useRouter"

/**
 * # Routes
 * @description Routes is a functional component that renders the router provider and the routes.
 * @return {JSX.Element}
 * @constructor
 * @see https://reactrouter.com/web/api/Router
 */
export function Router() {
	const router = useRouter()

	return <RouterProvider router={router} />
}
