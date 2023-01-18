import React from "react"
import {Header} from "./Header"
import {SideBar} from "./SideBar"

/**
 * # PageLayout
 * @description PageLayout provides a layout for all pages.
 * @param {{children: React.ReactNode}} props
 * @return {JSX.Element}
 * @constructor
 */
export function PageLayout(props: {children: React.ReactNode}) {
	return (
		<>
			<Header />
			<main className={"main"}>
				<SideBar />
				{props.children}
			</main>
		</>
	)
}

