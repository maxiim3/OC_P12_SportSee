import React from "react"
import ReactDOM from "react-dom/client"
import "./Sass/index.scss"
import {Router} from "./Routes"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
)
