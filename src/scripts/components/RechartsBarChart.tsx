import React from "react"
import useUserSessions from "../hooks/useUserSessions"
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts"

/**
 * A functional component that renders a bar chart using the Recharts library.
 *
 * The chart displays user session data.
 *
 * @returns {JSX.Element} A bar chart component.
 */
export function RechartsBarChart() {
	const {userSessions: sessions} = useUserSessions()

	return (
		<article className="container__main__graphs__graph container__main__graphs__graph--bars">
			<ResponsiveContainer className={"barChart"}>
				<BarChart
					margin={{top: 32, left: 24, bottom: 23, right: 26}}
					barSize={7}
					barCategoryGap={53}
					barGap={8}
					data={sessions}>
					<CartesianGrid
						vertical={false}
						strokeDasharray="2 2"
						strokeOpacity={0.5}
					/>

					<XAxis
						dataKey={"dayInitial"}
						tick={{
							stroke: "#9b9eac",
							opacity: 0.5,
							strokeWidth: 0,
							fontSize: 10,
						}}
						tickMargin={16}
						tickLine={false}
					/>
					<YAxis
						dataKey={"kilogram"}
						orientation={"right"}
						yAxisId={"right"}
						domain={[65, 85]}
						axisLine={false}
						tickCount={5}
						tick={{
							stroke: "#9b9eac",
							opacity: 0.5,
							strokeWidth: 0,
							fontSize: 10,
						}}
						tickMargin={43}
						tickLine={false}
					/>
					<YAxis
						hide={true}
						dataKey={"calories"}
						yAxisId={"left"}
						orientation={"left"}
						domain={[200, 400]}
						axisLine={false}
						tickCount={5}
						tick={{
							stroke: "#9b9eac",
							opacity: 0.5,
							strokeWidth: 0,
							fontSize: 10,
						}}
						tickMargin={43}
						tickLine={false}
					/>
					<Tooltip
						labelFormatter={(label, value) => <></>}
						wrapperStyle={{outline: "none"}}
						content={({payload}) => {
							return (
								<article className={"barChart__tooltip"}>
									{payload?.map(props => (
										<li key={Math.random()}>
											{`${props.value}${
												props.dataKey === "kilogram" ? "kg" : "Kcal"
											}`}
										</li>
									))}
								</article>
							)
						}}
					/>
					<Legend
						align={"right"}
						verticalAlign={"top"}
						layout={"horizontal"}
						content={({payload, content}) => {
							return (
								<header className={"barChart__legend"}>
									<p>Activité quotidiennes</p>
									<ul>
										<li>Poids (kg)</li>
										<li>Calories Brûlées (kCal)</li>
									</ul>
								</header>
							)
						}}
					/>
					<Bar
						className={"barChart__bar barChart__bar--kg"}
						dataKey="kilogram"
						radius={[3, 3, 0, 0]}
						yAxisId={"right"}
					/>
					<Bar
						className={"barChart__bar barChart__bar--cal"}
						dataKey="calories"
						yAxisId={"left"}
						radius={[3, 3, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</article>
	)
}
