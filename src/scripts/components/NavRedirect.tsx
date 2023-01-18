import {useNavigate} from "react-router-dom"
import React from "react"
import PropTypes from "prop-types"

/**
 * # NavRedirect
 *
 * @description A functional component that allows navigation to a specified URL by clicking a link.
 *
 * @param {Object} props - The properties of the component.
 * @param {string} props.url - The URL to navigate to when the link is clicked.
 * @param {string} props.title - The text to display as the link.
 *
 * @returns {JSX.Element} - An anchor element with the given title, that navigates to the specified url when clicked.
 *
 * @example <NavRedirect url='/about' title='About'/>
 */

export function NavRedirect(props: {url: string; title: string}) {
	const navigate = useNavigate()
	return (
		<a
			href={"#"}
			onClick={e => {
				e.preventDefault()
				return navigate(props.url)
			}}>
			{props.title}
		</a>
	)
}

NavRedirect.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}
