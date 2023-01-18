import React from "react"
import PropTypes from "prop-types"

/**
 * # OtherPages
 * @description OtherPages is a functional component that renders the header, sidebar, and main container of a page layout.
 * @param {{title: string, label: string}} props
 * @return {JSX.Element}
 * @constructor
 */
export function OtherPages(props: {title: string; label: string}) {
	return (
		<section className="container">
			<header className={"container__header"}>
				<h2>{props.title}</h2>
				<p>{props.label}</p>
			</header>
		</section>
	)
}

OtherPages.prototype = {
	title: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
}
