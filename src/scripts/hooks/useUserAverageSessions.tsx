import {useContext, useMemo} from "react"
import UserContext from "../context/userContext"

/**
 * Returns the day of the week represented by the given number.
 *
 * @param {number} day - A number representing a day of the week (1 for Monday, 2 for Tuesday, etc.).
 * @returns {string} The day of the week as a string (e.g. "L" for Monday, "M" for Tuesday, etc.).
 */
function switchDay(day: number) {
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
		default:
			return "unknown"
	}
}

const useUserAverageSessions = () => {
	const user = useContext(UserContext)!
	const averageSessions = useMemo(() => {
		let sessionIteration: number = 0
		let sessionWithDaysInitial: {day: number; sessionLength: number; dayInitial: string}[] = []
		user?.averageSessions?.sessions.forEach(session => {
			sessionIteration += 1
			sessionWithDaysInitial.push({...session, dayInitial: switchDay(sessionIteration)})
		})
		return sessionWithDaysInitial
	}, [user])

	return {averageSessions}
}

export default useUserAverageSessions
