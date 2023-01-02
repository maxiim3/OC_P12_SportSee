import React, {useContext, useMemo} from "react"
import {StoreContext} from "../Routes"
import {IUser} from "../Interface/IUser"
import {Legend, PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer} from "recharts"

export function RechartsRadialBarChart() {
	const user = useContext(StoreContext)! as IUser
	const scoreObjectif = useMemo(() => {
		return {score: user.info.todayScore || user.info.score}
	}, [user])
	return (
		<article className="container__main__graphs__graph container__main__graphs__graph--radial">
			<ResponsiveContainer className={"radialBarChart"}>
				<RadialBarChart
					width={730}
					height={250}
					innerRadius="85%"
					outerRadius="100%"
					barSize={24}
					data={[scoreObjectif]}
					startAngle={225}
					endAngle={-135}>
					<PolarAngleAxis
						type="number"
						domain={[0, 1]}
						angleAxisId={0}
						tick={false}
					/>
					<RadialBar
						legendType={"wye"}
						label={{
							fill: "#000000",
							position: "center",
							fontSize: "26px",
							fontWeight: "bold",
							formatter: (value: number) => `${value * 100}%`,
						}}
						dataKey="score"
						cornerRadius={10}
						fill="rgb(230, 0, 0)">
						{/*<LabelList
						 dataKey={"score"}
						 position="center"
						 angle={0}
						 fill={"#000000"}
						 />*/}
					</RadialBar>

					<Legend
						layout="vertical"
						verticalAlign="top"
						align="left"
						aria-label={"Score"}
						content={() => <span>Score</span>}
					/>
				</RadialBarChart>
			</ResponsiveContainer>
		</article>
	)
}
