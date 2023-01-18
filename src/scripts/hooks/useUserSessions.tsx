import {useContext, useMemo} from "react"
import UserContext from "../context/userContext"

/**
 * # useUserSessions
 * @description A custom hook that returns the user's session data.
 * @return {{userSessions: {day: string, kilogram: number, calories: number, dayInitial: number}[]}}
 * @example const {userSessions} = useUserSessions()
 */
const useUserSessions = () => {
	const user = useContext(UserContext)!

	const userSessions = useMemo(() => {
		let sessionIteration = 0
		let sessionsWithIteration: {
			day: string
			kilogram: number
			calories: number
			dayInitial: number
		}[] = []
		user?.activities?.sessions.forEach(session => {
			sessionsWithIteration.push({...session, dayInitial: (sessionIteration += 1)})
		})
		return sessionsWithIteration
	}, [user])

	return {userSessions}
}

export default useUserSessions