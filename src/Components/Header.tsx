import {MainIcon} from "./Logo"
import React from "react"

export function Header() {
	return (
		<header className={"header"}>
			<span className={"header__logo"}>
				<MainIcon /> <h1>SportSee</h1>
			</span>
			<nav>
				<ul className={"header__nav"}>
					<li>
						<a href={"#"}>Accueil</a>
					</li>
					<li>
						<a href={"#"}>Profil</a>
					</li>
					<li>
						<a href={"#"}>Réglage</a>
					</li>
					<li>
						<a href={"#"}>Communauté</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}