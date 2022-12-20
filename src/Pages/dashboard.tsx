import {Header} from "../Components/Header"
import {SideBar} from "../Components/SideBar"
import {MainContainer} from "../Components/MainContainer"
import React from "react"

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