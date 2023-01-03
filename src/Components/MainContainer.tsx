import React, {useContext} from "react"
import {IUser} from "../Interface/IUser"
import {Navigate} from "react-router-dom"
import {StoreContext} from "../Routes"
import FoodCaloriesIcon from "./FoodCaloriesIcon"
import FoodProteinIcon from "./FoodProteinIcon"
import FoodCarbsIcon from "./FoodCarbsIcon"
import FoodFatIcon from "./FoodFatIcon"
import {RechartsBarChart} from "./RechartsBarChart"
import {RechartsLineChart} from "./RechartsLineChart"
import {RechartsRadarChart} from "./RechartsRadarChart"
import {RechartsRadialBarChart} from "./RechartsRadialBarChart"

/**
 * MainContainer is a functional component that displays information about the user
 * and several charts of their data.
 *
 * @return {JSX.Element} A JSX element representing the main container
 */
export function MainContainer() {
	const user = useContext(StoreContext)! as IUser

	if (!user) return <Navigate to={"/page-not-found"} />

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
