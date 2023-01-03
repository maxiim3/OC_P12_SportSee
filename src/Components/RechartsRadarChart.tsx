import React, {useContext, useMemo} from "react"
import {StoreContext} from "../Routes"
import {IUser} from "../Interface/IUser"
import {
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	Radar,
	RadarChart,
	ResponsiveContainer,
} from "recharts"
/**
 * A functional component that renders a radar chart using the Recharts library.
 * The chart displays performance data for various kinds of physical activities.
 *
 * @returns {JSX.Element} A radar chart component.
 */
export function RechartsRadarChart() {
	const user = useContext(StoreContext)! as IUser

	/**
	 * Returns a string label for a given kind of physical activity.
	 *
	 * @param {number} kind - A number representing a kind of physical activity (1 for intensity, 2 for speed, etc.).
	 * @returns {string} The label for the kind of physical activity as a string (e.g. "Intensité" for intensity, "Vitesse" for speed, etc.).
	 */
	function switchKind(kind: number) {
		switch (kind) {
			case 6:
				return "Cardio"
			case 5:
				return "Energie"
			case 4:
				return "Endurance"
			case 3:
				return "Force"
			case 2:
				return "Vitesse"
			case 1:
				return "Intensité"
			default:
				return "unknown"
		}
	}

	const userPerformance = useMemo(() => {
		let performanceWithLabel: {value: number; kind: number; kindLabel: string}[] = []
		user?.performance?.data.map(data => {
			return data.value === 6
				? 1
				: data.value === 5
				? 2
				: data.value === 4
				? 3
				: data.value === 3
				? 4
				: data.value === 2
				? 5
				: 6
		})
		user?.performance?.data.forEach(session => {
			performanceWithLabel.push({...session, kindLabel: switchKind(session.kind)})
		})
		return performanceWithLabel
	}, [user])

	return (
		<article className="container__main__graphs__graph container__main__graphs__graph--radar">
			<ResponsiveContainer className={"radarChart"}>
				<RadarChart
					outerRadius={90}
					width={730}
					height={250}
					data={userPerformance}>
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
							fontSize: "12px",
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
					{/*<Legend />*/}
				</RadarChart>
			</ResponsiveContainer>
		</article>
	)
}
