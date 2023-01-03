import React from "react"

/**
 * # PageNotFound
 * PageNotFound is a functional component that displays a message when a requested route is not found.
 *
 * @return {JSX.Element} Returns a JSX element representing the page not found message.
 * @example
 * <PageNotFound />
 */
const PageNotFound = () => {
	return (
		<div>
			<h1>ERREUR 404 : Page Introuvable</h1>
			<p>Nous sommes désolés, la page que vous avez demandée est introuvable.</p>
		</div>
	)
}

export default PageNotFound
