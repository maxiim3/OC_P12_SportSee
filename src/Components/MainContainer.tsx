import FoodCaloriesIcon from "./FoodCaloriesIcon"
import FoodProteinIcon from "./FoodProteinIcon"
import FoodCarbsIcon from "./FoodCarbsIcon"
import FoodFatIcon from "./FoodFatIcon"

export function MainContainer() {
	return (
		<section className="container">
			<header className={"container__header"}>
				<h2>
					Hello <span>Thomas</span>
				</h2>
				<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			</header>
			<main className={"container__main"}>
				<section className="container__main__graphs">
					<article className="container__main__graphs__graph container__main__graphs__graph--bars">
						<img
							src="/src/assets/graph-poids.png"
							alt="Poids"
						/>
					</article>
					<article className="container__main__graphs__graph container__main__graphs__graph--evolution">
						<img
							src="/src/assets/graph-Objectifs.png"
							alt="Poids"
						/>
					</article>
					<article className="container__main__graphs__graph container__main__graphs__graph--skills">
						<img
							src="/src/assets/graph-Radar.png"
							alt="Poids"
						/>
					</article>
					<article className="container__main__graphs__graph container__main__graphs__graph--score">
						<img
							src="/src/assets/graph-KPI.png"
							alt="Poids"
						/>
					</article>
				</section>
				<aside className="container__main__aside">
						<article className={"container__main__aside__item"}>
								<FoodCaloriesIcon />
								<p className="value">1,930kCal</p>
								<p className="label">Calories</p>
						</article>
						<article className={"container__main__aside__item"}>
								<FoodProteinIcon />
								<p className="value">155g</p>
								<p className="label">Proteins</p>
						</article>
						<article className={"container__main__aside__item"}>
								<FoodCarbsIcon />
								<p className="value">290g</p>
								<p className="label">Glucides</p>
						</article>
						<article className={"container__main__aside__item"}>
								<FoodFatIcon />
								<p className="value">50g</p>
								<p className="label">Lipides</p>
						</article>
				</aside>
			</main>
		</section>
	)
}