import React, {useContext, useMemo} from "react"
import {StoreContext} from "../Routes"
import {IUser} from "../Interface/IUser"
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from "recharts"

/**
 * A functional component that renders a line chart using the Recharts library.
 * The chart displays average session length data per day of the week.
 *
 * @returns {JSX.Element} A line chart component.
 */

export function RechartsLineChart() {
	const user = useContext(StoreContext)! as IUser
	/**
	 * Returns the day of the week represented by the given number.
	 *
	 * @param {number} day - A number representing a day of the week (1 for Monday, 2 for Tuesday, etc.).
	 * @returns {string} The day of the week as a string (e.g. "L" for Monday, "M" for Tuesday, etc.).
	 */
	const switchDay = (day: number) => {
		switch (day) {
			case 1:
				return "L"
			case 2:
				return "M"
			case 3:
				return "M"
			case 4:
				return "J"
			case 5:
				return "V"
			case 6:
				return "S"
			case 7:
				return "D"
			default:
				return "unknown"
		}
	}
	const averageSessionLength = useMemo(() => {
		let sessionIteration: number = 0
		let sessionWithDaysInitial: {day: number; sessionLength: number; dayInitial: string}[] = []
		user?.averageSessions?.sessions.forEach(session => {
			sessionIteration += 1
			sessionWithDaysInitial.push({...session, dayInitial: switchDay(sessionIteration)})
		})
		return sessionWithDaysInitial
	}, [user])
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
					data={averageSessionLength}>
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
							return <></>
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
