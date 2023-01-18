import React, {useContext} from "react"
import FoodCaloriesIcon from "../icons/FoodCaloriesIcon"
import FoodProteinIcon from "../icons/FoodProteinIcon"
import FoodCarbsIcon from "../icons/FoodCarbsIcon"
import FoodFatIcon from "../icons/FoodFatIcon"
import {RechartsBarChart} from "../components/RechartsBarChart"
import {RechartsLineChart} from "../components/RechartsLineChart"
import {RechartsRadarChart} from "../components/RechartsRadarChart"
import {RechartsRadialBarChart} from "../components/RechartsRadialBarChart"
import UserContext from "../context/userContext"

/**
 * # Dashboard *  is a functional component that renders the header, sidebar, and main container of a dashboard layout.
 *
 * @return {JSX.Element} Returns a JSX element representing the dashboard layout.
 * @example
 * <Dashboard />
 */
export function Dashboard() {
	const user = useContext(UserContext)!

	const {firstName} = user?.info.userInfos
	const {calorieCount, proteinCount, carbohydrateCount, lipidCount} = user?.info.keyData

	return (
		<section className="container">
			<header className={"container__header"}>
				<h2>
					Hello <span>{firstName}</span>
				</h2>
				<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			</header>
			<main className={"container__main"}>
				<section className="container__main__graphs">
					<RechartsBarChart />
					 <RechartsLineChart />
					 <RechartsRadarChart />
					 <RechartsRadialBarChart />
				</section>
				<aside className="container__main__aside">
					<article className={"container__main__aside__item"}>
						<FoodCaloriesIcon />
						<p className="value">{calorieCount}</p>
						<p className="label">Calories</p>
					</article>
					<article className={"container__main__aside__item"}>
						<FoodProteinIcon />
						<p className="value">{proteinCount}</p>
						<p className="label">Proteins</p>
					</article>
					<article className={"container__main__aside__item"}>
						<FoodCarbsIcon />
						<p className="value">{carbohydrateCount}</p>
						<p className="label">Glucides</p>
					</article>
					<article className={"container__main__aside__item"}>
						<FoodFatIcon />
						<p className="value">{lipidCount}</p>
						<p className="label">Lipides</p>
					</article>
				</aside>
			</main>
		</section>
	)
}
