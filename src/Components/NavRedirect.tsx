import {useNavigate} from "react-router-dom"
import React from "react"

// todo add documentation
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

//todo add PropTypes