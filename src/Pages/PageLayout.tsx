import React, {createContext, useEffect, useState} from "react"
import {Header} from "../Components/Header"
import {SideBar} from "../Components/SideBar"
import {Outlet, useLoaderData} from "react-router-dom"
import {mockUser} from "../Mock/mockUser"
import {IUser} from "../Interface/IUser"
import {Loader} from "../Components/Loader"

export const UserContext = createContext(mockUser)

// todo add documentation
export function PageLayout() {
	const [isLoading, setIsLoading] = useState(true)
	const user = useLoaderData()! as IUser

	useEffect(() => {
		setIsLoading(!user)
	}, [user])

	useEffect(() => {
		const loader = document.getElementById("loader-container") as HTMLElement
		if (user && !isLoading) {
			loader.dataset.isVisible = "false"
		}
	}, [isLoading])

	if (isLoading) return <Loader />

	return (
		<>
			<Header />
			<main className={"main"}>
				<SideBar />
				<UserContext.Provider value={user}>
					<Outlet />
				</UserContext.Provider>
			</main>
		</>
	)
}
