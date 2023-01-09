import React from "react"
import "../Sass/loader.css"

//todo add documentation
export function Loader() {
	return (
		<div
			style={{
				display: "grid",
				placeContent: "center",
				width: "100%",
				height: "100%",
				fontSize: 36,
				fontWeight: 600,
			}}>
			<span className="loader"></span>
		</div>
	)
}
