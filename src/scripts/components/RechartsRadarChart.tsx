import React from "react"
import {
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	Radar,
	RadarChart,
	ResponsiveContainer,
} from "recharts"
import useUserPerformance from "../hooks/useUserPerformance"

/**
 * A functional component that renders a radar chart using the Recharts library.
 * The chart displays performance data for various kinds of physical activities.
 *
 * @returns {JSX.Element} A radar chart component.
 */
export function RechartsRadarChart() {
	const {userPerformance: performance} = useUserPerformance()

	return (
		<article className="container__main__graphs__graph container__main__graphs__graph--radar">
			<ResponsiveContainer className={"radarChart"}>
				<RadarChart
					outerRadius={50}
					width={730}
					height={250}
					data={performance}>
					<PolarGrid
						gridType={"polygon"}
						strokeWidth={1}
						radialLines={false}
						stroke={"rgb(255 255 255)"}
					/>
					<PolarAngleAxis
						dataKey="kindLabel"
						tickLine={false}
						tick={{
							fill: "rgba(255,255,255,1)",
							strokeWidth: 0,
							fontSize: 10,
						}}
					/>
					<PolarRadiusAxis
						angle={30}
						domain={[0, 150]}
						tickLine={false}
						stroke={"none"}
					/>
					<Radar
						dataKey="value"
						stroke="none"
						fill="rgb(255, 0, 0)"
						fillOpacity={0.6}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</article>
	)
}
