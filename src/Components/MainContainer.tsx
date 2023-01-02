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

export function MainContainer() {
	const user = useContext(StoreContext)! as IUser
	if (!user) return <Navigate to={"/page-not-found"} />

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
					<RechartsBarChart />
					<RechartsLineChart />
					<RechartsRadarChart />
					<RechartsRadialBarChart />
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
