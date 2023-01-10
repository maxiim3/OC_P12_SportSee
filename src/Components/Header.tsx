import {MainIcon} from "./Logo"
import React from "react"
import {NavRedirect} from "./NavRedirect"

// todo add documentation
export function Header() {
	return (
		//todo add underline animation on hover link
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
