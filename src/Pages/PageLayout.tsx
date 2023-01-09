import React, {createContext} from "react"
import {Header} from "../Components/Header"
import {SideBar} from "../Components/SideBar"
import {Outlet, useLoaderData} from "react-router-dom"
import {mockUser} from "../Mock/mockUser"
import {Loader} from "../Components/Loader"
import {IUser} from "../Interface/IUser"

export const UserContext = createContext(mockUser)

// todo add documentation
export function PageLayout() {
	const user = useLoaderData()! as IUser

	return (
		<>
			<Header />
			<main className={"main"}>
				<SideBar />
				{!user ? (
					<Loader />
				) : (
					<UserContext.Provider value={user}>
						<Outlet />
					</UserContext.Provider>
				)}
			</main>
		</>
	)
}
