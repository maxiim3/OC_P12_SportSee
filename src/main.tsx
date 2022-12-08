import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import {Header} from "./Components/Header"
import {SideBar} from "./Components/SideBar"
import {Dashboard} from "./Components/Dashboard"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<>
			<Header />
			<Dashboard />
		</>
	</React.StrictMode>
)
