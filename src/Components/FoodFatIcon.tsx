import React from "react"

/**
 * FoodFatIcon is a React component that displays an SVG icon of a cheeseburger.
 *
 * @return {JSX.Element} Returns a JSX element representing the FoodFatIcon.
 * @example
 * <FoodFatIcon />
 */
const FoodFatIcon = () => {
	return (
		<svg
			width="60"
			height="60"
			viewBox="0 0 60 60"
			fill="none"
			className={"svg__food__fat"}
			xmlns="http://www.w3.org/2000/svg">
			<g id="food-fat-icon">
				<rect
					id="background"
					width="60"
					height="60"
					rx="6"
				/>
				<g id="cheeseburger">
					<path
						id="Path"
						d="M21.25 36V36C21.25 38.125 22.875 39.75 25 39.75H35C37.125 39.75 38.75 38.125 38.75 36V36H21.25Z"
					/>
					<path
						id="Path_2"
						d="M38.75 33.5H21.25C20.5 33.5 20 33 20 32.25V32.25C20 31.5 20.5 31 21.25 31H38.75C39.5 31 40 31.5 40 32.25V32.25C40 33 39.5 33.5 38.75 33.5Z"
					/>
					<path
						id="Shape"
						d="M31.25 21H28.75C24.625 21 21.25 24.375 21.25 28.5H38.75C38.75 24.375 35.375 21 31.25 21ZM27.5 26C26.75 26 26.25 25.5 26.25 24.75C26.25 24 26.75 23.5 27.5 23.5C28.25 23.5 28.75 24 28.75 24.75C28.75 25.5 28.25 26 27.5 26ZM32.5 26C32.5 26.75 33 27.25 33.75 27.25C34.5 27.25 35 26.75 35 26C35 25.25 34.5 24.75 33.75 24.75C33 24.75 32.5 25.25 32.5 26Z"
					/>
				</g>
			</g>
		</svg>
	)
}

export default FoodFatIcon
