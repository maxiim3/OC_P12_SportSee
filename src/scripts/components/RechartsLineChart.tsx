import React from "react"
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from "recharts"
import useUserAverageSessions from "../hooks/useUserAverageSessions"

/**
 * A functional component that renders a line chart using the Recharts library.
 * The chart displays average session length data per day of the week.
 *
 * @returns {JSX.Element} A line chart component.
 */

export function RechartsLineChart() {
	const {averageSessions: sessions} = useUserAverageSessions()

	return (
		<article className="container__main__graphs__graph container__main__graphs__graph--line">
			<ResponsiveContainer
				className={"lineChart"}
				width={"100%"}
				height={"100%"}>
				<LineChart
					width={730}
					height={250}
					margin={{left: 4, right: 4, bottom: 16, top: 16}}
					data={sessions}>
					<XAxis
						dataKey="dayInitial"
						tick={{
							fill: "rgba(255,255,255,0.53)",
							strokeWidth: 0,
							fontSize: "12px",
						}}
						tickMargin={16}
						padding={{
							left: 4,
							right: 6,
						}}
						tickLine={false}
						axisLine={false}
					/>
					<Tooltip
						wrapperStyle={{outline: "none"}}
						cursor={false}
						content={({payload}) => {
							return payload?.map(({payload}) => {
								return (
									<article className={"lineChart__tooltip"}>
										<p>{payload.sessionLength} min</p>
									</article>
								)
							})
						}}
					/>
					<Legend
						align={"right"}
						verticalAlign={"top"}
						layout={"horizontal"}
						content={({payload, content}) => {
							return (
								<header className={"lineChart__legend"}>
									<p>Durée moyenne des sessions</p>
								</header>
							)
						}}
					/>
					<Line
						activeDot={props => {
							return (
								<svg
									x={props.cx - 10}
									y={props.cy - 10}
									width={20}
									height={20}
									fill="white"
									viewBox="0 0 18 18"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M9 12.9505C11.2091 12.9505 13 11.1707 13 8.97523C13 6.77977 11.2091 5 9 5C6.79086 5 5 6.77977 5 8.97523C5 11.1707 6.79086 12.9505 9 12.9505Z"
										fill="white"
									/>
									<path
										d="M9 15.4505C12.5752 15.4505 15.5 12.566 15.5 8.97523C15.5 5.38444 12.5752 2.5 9 2.5C5.42481 2.5 2.5 5.38444 2.5 8.97523C2.5 12.566 5.42481 15.4505 9 15.4505Z"
										stroke="white"
										strokeOpacity="0.198345"
										strokeWidth="5"
									/>
								</svg>
							)
						}}
						dot={false}
						type="natural"
						dataKey="sessionLength"
						stroke="rgb(255 255 255 /.8)"
					/>
				</LineChart>
			</ResponsiveContainer>
		</article>
	)
}
