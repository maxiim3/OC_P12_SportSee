import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/index.scss"
import {Router} from "./scripts/Routes"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
)
