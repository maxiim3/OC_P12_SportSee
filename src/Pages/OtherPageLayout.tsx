import React from "react"

//todo add documentation
export function OtherPageLayout(props: {title: string; label: string}) {
	return (
		<section className="container">
			<header className={"container__header"}>
				<h2>{props.title}</h2>
				<p>{props.label}</p>
			</header>
		</section>
	)
}

// todo add PropTypes