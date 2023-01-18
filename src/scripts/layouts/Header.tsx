import {MainIcon} from "../icons/Logo"
import React from "react"
import {NavRedirect} from "../components/NavRedirect"

/**
 * # Header
 *
 * @description  A functional component that renders a header for the webpage with a logo and navigation links.
 *
 * @example <Header />
 */
export function Header() {
	return (
		<header className={"header"}>
			<span className={"header__logo"}>
				<MainIcon /> <h1>SportSee</h1>
			</span>
			<nav>
				<ul className={"header__nav"}>
					<li>
						<NavRedirect
							title={"Accueil"}
							url={"/"}
						/>
					</li>
					<li>
						<NavRedirect
							title={"Profil"}
							url={"/profil"}
						/>
					</li>
					<li>
						<NavRedirect
							title={"Réglage"}
							url={"/settings"}
						/>
					</li>
					<li>
						<NavRedirect
							title={"Communauté"}
							url={"/community"}
						/>
					</li>
				</ul>
			</nav>
		</header>
	)
}
