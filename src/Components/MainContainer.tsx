import React, {useContext, useMemo} from "react"
import {IUser} from "../Interface/IUser"
import {Navigate} from "react-router-dom"
import {StoreContext} from "../Routes"
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	Radar,
	RadarChart,
	RadialBar,
	RadialBarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts"
import FoodCaloriesIcon from "./FoodCaloriesIcon"
import FoodProteinIcon from "./FoodProteinIcon"
import FoodCarbsIcon from "./FoodCarbsIcon"
import FoodFatIcon from "./FoodFatIcon"

export function MainContainer() {
	const user = useContext(StoreContext)! as IUser
	if (!user) return <Navigate to={"/page-not-found"} />

	const userSessions = useMemo(() => {
		let sessionIteration = 0
		let array: {}[] = []
		user?.activities?.sessions.forEach(session => {
			array.push({...session, dayInitial: (sessionIteration += 1)})
		})
		return array
	}, [user])

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
		}
	}
	const averageSessionLength = useMemo(() => {
		let sessionIteration: number = 0
		let array: {}[] = []
		user?.averageSessions?.sessions.forEach(session => {
			sessionIteration += 1
			array.push({...session, sessionNumber: switchDay(sessionIteration)})
		})
		return array
	}, [user])

	const scoreObjectif = useMemo(() => {
		return {score: user.info.todayScore || user.info.score}
	}, [user])

	function switchKind(kind: number) {
		switch (kind) {
			case 1:
				return "Cardio"
			case 2:
				return "Energie"
			case 3:
				return "Endurance"
			case 4:
				return "Force"
			case 5:
				return "Vitesse"
			case 6:
				return "Intensité"
		}
	}

	const userPerformance = useMemo(() => {
		let array: {}[] = []
		user?.performance?.data.forEach(session => {
			array.push({...session, kindLabel: switchKind(session.kind)})
		})
		return array
	}, [user])

	return (
		<section className="container">
			<header className={"container__header"}>
				<h2>
					Hello <span>{user?.info?.userInfos?.firstName}</span>
				</h2>
				<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			</header>
			<main className={"container__main"}>
				<section className="container__main__graphs">
					<article className="container__main__graphs__graph container__main__graphs__graph--bars">
						<ResponsiveContainer className={"barChart"}>
							<BarChart
								margin={{top: 32, left: 24, bottom: 23, right: 26}}
								barSize={7}
								barCategoryGap={53}
								barGap={8}
								data={userSessions}>
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
										fontSize: "16px",
									}}
									tickMargin={16}
									tickLine={false}
								/>
								<YAxis
									dataKey={"calories"}
									axisLine={false}
									tick={{
										stroke: "#9b9eac",
										opacity: 0.5,
										strokeWidth: 0,
										fontSize: "16px",
									}}
									tickMargin={43}
									tickLine={false}

								/>
								<YAxis
									dataKey={"kilogram"}
									axisLine={false}
								/>
								<Tooltip />
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
								/>
								<Bar
									className={"barChart__bar barChart__bar--cal"}
									dataKey="calories"
									radius={[3, 3, 0, 0]}
								/>
							</BarChart>
						</ResponsiveContainer>
					</article>
					<article className="container__main__graphs__graph container__main__graphs__graph--evolution">
						<ResponsiveContainer
							className={""}
							width={"100%"}
							height={"100%"}>
							<LineChart
								width={730}
								height={250}
								data={averageSessionLength}
								/*	margin={{top: 5, right: 30, left: 20, bottom: 5}}*/
							>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="dayInitial" />
								{/*<YAxis />*/}
								<Tooltip />
								<Legend />
								<Line
									type="monotone"
									dataKey="sessionLength"
									stroke="#8884d8"
								/>
							</LineChart>
						</ResponsiveContainer>
					</article>
					<article className="container__main__graphs__graph container__main__graphs__graph--skills">
						<ResponsiveContainer>
							<RadarChart
								outerRadius={90}
								width={730}
								height={250}
								data={userPerformance}>
								<PolarGrid />
								<PolarAngleAxis dataKey="kindLabel" />
								<PolarRadiusAxis
									angle={30}
									domain={[0, 150]}
								/>
								<Radar
									name="Mike"
									dataKey="value"
									stroke="#8884d8"
									fill="#8884d8"
									fillOpacity={0.6}
								/>
								<Legend />
							</RadarChart>
						</ResponsiveContainer>
					</article>
					<article className="container__main__graphs__graph container__main__graphs__graph--score">
						<ResponsiveContainer>
							<RadialBarChart
								width={730}
								height={250}
								innerRadius="85%"
								outerRadius="100%"
								data={[scoreObjectif]}
								startAngle={220}
								// endAngle={-130}>
								endAngle={50}>
								<RadialBar
									label={{fill: "#000000", position: "center", fontSize: "24px"}}
									background
									dataKey="score"
								/>
								<Legend
									iconSize={10}
									width={120}
									height={140}
									layout="vertical"
									verticalAlign="top"
									align="left"
									aria-label={"Score"}
									content={props => <span>Score</span>}
								/>
								<Tooltip />
							</RadialBarChart>
						</ResponsiveContainer>
					</article>
				</section>
				<aside className="container__main__aside">
					<article className={"container__main__aside__item"}>
						<FoodCaloriesIcon />
						<p className="value">{user?.info?.keyData?.calorieCount}</p>
						<p className="label">Calories</p>
					</article>
					<article className={"container__main__aside__item"}>
						<FoodProteinIcon />
						<p className="value">{user?.info?.keyData?.proteinCount}</p>
						<p className="label">Proteins</p>
					</article>
					<article className={"container__main__aside__item"}>
						<FoodCarbsIcon />
						<p className="value">{user?.info?.keyData?.carbohydrateCount}</p>
						<p className="label">Glucides</p>
					</article>
					<article className={"container__main__aside__item"}>
						<FoodFatIcon />
						<p className="value">{user?.info?.keyData?.lipidCount}</p>
						<p className="label">Lipides</p>
					</article>
				</aside>
			</main>
		</section>
	)
}
