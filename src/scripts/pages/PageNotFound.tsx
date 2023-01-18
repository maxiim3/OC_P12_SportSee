import React from "react"
import {Link} from "react-router-dom"
import "../../styles/other/page-not-found.scss"

/**
 * # PageNotFound *  is a functional component that displays a message when a requested route is not found.
 *
 * @return {JSX.Element} Returns a JSX element representing the page not found message.
 * @example
 * <PageNotFound />
 */
const PageNotFound = () => {
	return (
		<div className={"pageNotFound"}>
			<h1>404</h1>
			<p>
				Nous sommes désolés, <br />
				la page que vous avez demandée est introuvable.
			</p>
			<Link to="/">Retourner à l'accueil</Link>
		</div>
	)
}

export default PageNotFound
