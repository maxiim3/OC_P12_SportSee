import React from "react"

/**
 * # Loader
 *
 * @description Renders a loading spinner for the webpage with grid layout, centering, and font size and weight.
 *
 * @returns {JSX.Element} - A div element containing a loading spinner represented by a span element with a class of 'loader'.
 *
 * @example <Loader />
 */

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
