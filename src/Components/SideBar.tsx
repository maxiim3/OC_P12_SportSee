import {MeditationIcon} from "./MeditationIcon"
import {SwimmingIcon} from "./SwimmingIcon"
import {BikingIcon} from "./BikingIcon"
import {WeightIcon} from "./WeightIcon"
import React from "react"

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
			<p className="aside-txt">Copyright, SportSee 2020</p>
		</aside>
	)
}
