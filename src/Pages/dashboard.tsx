import {Header} from "../Components/Header"
import {SideBar} from "../Components/SideBar"
import {MainContainer} from "../Components/MainContainer"
import React from "react"

/**
 * # Dashboard
 * Dashboard is a functional component that renders the header, side bar, and main container of a dashboard layout.
 *
 * @return {JSX.Element} Returns a JSX element representing the dashboard layout.
 * @example
 * <Dashboard />
 */

export function Dashboard() {

	return (
		<>
			<Header />
			<main className={"main"}>
				<SideBar />
				<MainContainer />
			</main>
		</>
	)
}