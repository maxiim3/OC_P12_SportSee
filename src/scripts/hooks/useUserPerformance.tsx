import {useContext, useMemo} from "react"
import UserContext from "../context/userContext"


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
const useUserPerformance = () => {
	const user = useContext(UserContext)!
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
 	return {userPerformance}
}

export default useUserPerformance