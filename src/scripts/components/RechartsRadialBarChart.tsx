import React from "react"
import {Legend, PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer} from "recharts"
import useUserScore from "../hooks/useUserScore"

/**
 * A memoized variable that contains the user's score object.
 * The object has a single property, "score", which is the user's score.
 *
 * @returns {Object} An object with a single property, "score", which is the user's score.
 */
export function RechartsRadialBarChart() {
	const {userScore: score} = useUserScore()

	return (
		<article className="container__main__graphs__graph container__main__graphs__graph--radial">
			<ResponsiveContainer className={"radialBarChart"}>
				<RadialBarChart
					width={730}
					margin={{top: 18, right: 18, bottom: 18, left: 18}}
					height={250}
					innerRadius="85%"
					outerRadius="100%"
					barSize={24}
					data={[score]}
					startAngle={225}
					endAngle={-135}>
					<PolarAngleAxis
						type="number"
						domain={[0, 1]}
						angleAxisId={0}
						tick={false}
					/>
					<RadialBar
						legendType={"line"}
						id={"score"}
						label={{
							fill: "#000000",
							position: "centerBottom",
							fontSize: 18,
							fontWeight: "bold",
							formatter: (value: number) => `${value * 100}%`,
						}}
						dataKey="score"
						cornerRadius={10}
						fill="rgb(230, 0, 0)"></RadialBar>
					<Legend
						layout="vertical"
						verticalAlign="top"
						align="left"
						aria-label={"Score"}
						content={() => (
							<div className={"radialBarChart__legend"}>
								<p className={"radialBarChart__legend--title"}>Score</p>
								<p className={"radialBarChart__legend--label"}>de votre objectif</p>
							</div>
						)}
					/>
				</RadialBarChart>
			</ResponsiveContainer>
		</article>
	)
}
