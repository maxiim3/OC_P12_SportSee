import {useEffect, useState} from "react"
import {useLoaderData} from "react-router-dom"
import {IUser} from "../models/interfaces/IUser"

/**
 * # UseLoader
 * @description UseLoader is a custom hook that returns the data from the loader
 * @requires useLoaderData
 * @see https://reactrouter.com/web/api/Hooks/useloaderdata
 * @return {IUser | undefined}
 */
export function useLoader() {
	const [isLoading, setIsLoading] = useState(true)
	const user = useLoaderData()! as IUser // Load the data from the Route's loader

	useEffect(() => {
		setIsLoading(!user) // false while data are not loaded
	}, [user])

	useEffect(() => {
		const loader = document.getElementById("loader-container") as HTMLElement
		if (user && !isLoading) {
			loader.dataset.isVisible = "false" // hide the loader when data are loaded
		}
	}, [isLoading])

	return user
}
