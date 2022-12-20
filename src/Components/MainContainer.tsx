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
		return user.info.todayScore || user.info.score
	}, [user]);

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
			console.log(array)
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
						<ResponsiveContainer
							className={"barChart"}
							width={"100%"}
							height={"100%"}
							minHeight={145}
							minWidth={702}>
							<BarChart
								title={"Activité quotidienne"}
								barSize={7}
								barCategoryGap={53}
								barGap={8}
								data={userSessions}>
								<CartesianGrid strokeDasharray="2 2" />
								<XAxis dataKey="sessionNumber" />
								{/*<YAxis dataKey={"kilogram"} />*/}
								<YAxis dataKey={"calories"} />
								<Tooltip />
								<Legend
									align={"right"}
									verticalAlign={"top"}
									layout={"horizontal"}
									content={({payload, content}) => {
										return (
											<ul className={"barChart__legend"}>
												<li>Poids (kg)</li>
												<li>Calories Brûlées (kCal)</li>
											</ul>
										)
									}}
								/>
								<Bar
									className={"barChart__bar barChart__bar--kg"}
									legendType={"circle"}
									dataKey="kilogram"
									radius={[3, 3, 0, 0]}
								/>
								<Bar
									className={"barChart__bar barChart__bar--cal"}
									dataKey="calories"
									legendType={"circle"}
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
								innerRadius="10%"
								outerRadius="80%"
								data={[scoreObjectif]}
								startAngle={180}
								endAngle={0}>
								<RadialBar
									label={{fill: "#666", position: "insideStart"}}
									background
									clockWise={true}
									dataKey="uv"
								/>
								<Legend
									iconSize={10}
									width={120}
									height={140}
									layout="vertical"
									verticalAlign="middle"
									align="right"
								/>
								<Tooltip />
							</RadialBarChart>
						</ResponsiveContainer>
					</article>
				</section>
				{/*<aside className="container__main__aside">
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
				 </aside>*/}
			</main>
		</section>
	)
}
