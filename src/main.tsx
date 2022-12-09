import React from "react"
import ReactDOM from "react-dom/client"
import "./Sass/index.scss"
import {Header} from "./Components/Header"
import {SideBar} from "./Components/SideBar"
import {MainContainer} from "./Components/MainContainer"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<>
			<Header />
			<main className={'main'}>
				<SideBar />
				<MainContainer />
			</main>
		</>
	</React.StrictMode>
)
