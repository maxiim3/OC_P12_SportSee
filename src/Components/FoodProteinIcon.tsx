import React from "react"

/**
 * FoodProteinIcon is a functional component that displays an SVG icon of a chicken.
 *
 * @return {JSX.Element} Returns a JSX element representing the FoodProteinIcon.
 * @example
 * <FoodProteinIcon />
 */
const FoodProteinIcon = () => {
	return (
		<svg
			width="60"
			height="60"
			viewBox="0 0 60 60"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g id="food-protein-icon">
				<rect
					id="background"
					width="60"
					height="60"
					rx="6"
					fill="#4AB8FF"
					fillOpacity="0.1"
				/>
				<g id="chicken">
					<path
						id="Path"
						d="M39.2353 24.4706C38.8824 24.1177 38.4118 23.8824 38.0588 23.8824C37.9412 23.4118 37.8235 23.0588 37.4706 22.7059C36.6471 21.8824 35.2353 21.8824 34.4118 22.7059C33.7059 23.4118 33.5882 24.5883 34.1765 25.4118L31.5882 27.8824L30.2941 26.5883L27.7059 29.1765C27.4706 29.0588 27.1176 29.0588 26.8824 29.0588C23.5882 29.0588 21 31.6471 21 34.9412C21 38.2353 23.5882 40.8236 26.8824 40.8236C30.1765 40.8236 32.7647 38.2353 32.7647 34.9412C32.7647 34.7059 32.7647 34.353 32.6471 34.1177L35.2353 31.5294L33.9412 30.2353L36.4118 27.7647C37.2353 28.353 38.4118 28.2353 39.1176 27.5294C40.0588 26.7059 40.0588 25.2941 39.2353 24.4706Z"
						fill="#4AB8FF"
					/>
				</g>
			</g>
		</svg>
	)
}

export default FoodProteinIcon
