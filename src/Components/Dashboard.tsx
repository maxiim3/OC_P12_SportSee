import React from "react"
import FoodCaloriesIcon from "./FoodCaloriesIcon"
import FoodProteinIcon from "./FoodProteinIcon"
import FoodCarbsIcon from "./FoodCarbsIcon"
import FoodFatIcon from "./FoodFatIcon"
import {SideBar} from "./SideBar"

export function Dashboard() {
	return (
		<main>
			<SideBar />
			<section className="container">
				<h2>
					Hello <span>Thomas</span>
				</h2>
				<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
				<section className={"graphs"}>
					<section className="graphs__main__main">
						<article className="graphs__main__bars">
							<img
								src="/src/assets/graph-poids.png"
								alt="Poids"
							/>
						</article>
						<article className="graphs__main__evolution">
							<img
								src="/src/assets/graph-Objectifs.png"
								alt="Poids"
							/>
						</article>
						<article className="graphs__main__skills">
							<img
								src="/src/assets/graph-Radar.png"
								alt="Poids"
							/>
						</article>
						<article className="graphs__main__score">
							<img
								src="/src/assets/graph-KPI.png"
								alt="Poids"
							/>
						</article>
					</section>
					<aside className="graphs__aside">
						<ul className={"food"}>
							<li className={"food__item"}>
								<section className="foot__item__icon">
									<FoodCaloriesIcon />
								</section>
								<section className="food__item__details">
									<p className="value">1,930kCal</p>
									<p className="label">Calories</p>
								</section>
							</li>
							<li className={"food__item"}>
								<section className="foot__item__icon">
									<FoodProteinIcon />
								</section>
								<section className="food__item__details">
									<p className="value">155g</p>
									<p className="label">Proteins</p>
								</section>
							</li>
							<li className={"food__item"}>
								<section className="foot__item__icon">
									<FoodCarbsIcon />
								</section>
								<section className="food__item__details">
									<p className="value">290g</p>
									<p className="label">Glucides</p>
								</section>
							</li>
							<li className={"food__item"}>
								<section className="foot__item__icon">
									<FoodFatIcon />
								</section>
								<section className="food__item__details">
									<p className="value">50g</p>
									<p className="label">Lipides</p>
								</section>
							</li>
						</ul>
					</aside>
				</section>
			</section>
		</main>
	)
}
