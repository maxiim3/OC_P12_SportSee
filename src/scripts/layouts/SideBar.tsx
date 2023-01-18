import {MeditationIcon} from "../icons/MeditationIcon"
import {SwimmingIcon} from "../icons/SwimmingIcon"
import {BikingIcon} from "../icons/BikingIcon"
import {WeightIcon} from "../icons/WeightIcon"
import React from "react"

/**
 * # SideBar
 *
 * @description A functional component that renders a sidebar for the webpage that contains a navigation menu and a copyright text.
 *
 * @returns {JSX.Element} - A aside element with className 'sidebar'.
 *
 * @example <SideBar />
 */
export function SideBar() {
	return (
		<aside className={"sidebar"}>
			<nav className={"sidebar__nav"}>
				<ul>
					<li>
						<a href={"#"}>
							<MeditationIcon />
						</a>
					</li>
					<li>
						<a href={"#"}>
							<SwimmingIcon />
						</a>
					</li>
					<li>
						<a href={"#"}>
							<BikingIcon />
						</a>
					</li>
					<li>
						<a href={"#"}>
							<WeightIcon />
						</a>
					</li>
				</ul>
			</nav>
			<p className="sidebar__aside-txt">Copyright, SportSee 2020</p>
		</aside>
	)
}
