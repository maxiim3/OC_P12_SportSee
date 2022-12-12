import React from "react"
import ReactDOM from "react-dom/client"
import "./Sass/index.scss"
import {Header} from "./Components/Header"
import {SideBar} from "./Components/SideBar"
import {MainContainer} from "./Components/MainContainer"
import {user} from "./Store/Store"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<>
			<Header />
			<main className={"main"}>
				<SideBar />
				<MainContainer user={user} />
			</main>
		</>
	</React.StrictMode>
)
