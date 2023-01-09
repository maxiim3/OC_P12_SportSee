import {UserInfoModel} from "../Models/UserInfoModel"
import {UserActivityModel} from "../Models/UserActivityModel"
import {AverageSessionsModel} from "../Models/AverageSessionsModel"
import {UserPerformanceModel} from "../Models/UserPerformanceModel"
import {IUser} from "../Interface/IUser"
import {useSessionToken} from "./UseSessionToken"

// todo change update documentation
/**
 * # useStore
 * useStore is a hook that creates an API store and retrieves a user object based on the provided userId.
 *
 * @param {number} userId - The id of the user to retrieve from the store.
 * @return {Object} An object containing the retrieved user object.
 *
 * @example
 * const {user} = useStore(12)
 */

export const useStore = async (): Promise<IUser> => {
	const {token} = useSessionToken()
	const DATABASE_PORT = 3000
	const API_BASE_URL = `http://localhost:${DATABASE_PORT}/user/${token}`
	const USER_ACTIVITY_URL = `${API_BASE_URL}/activity`
	const AVERAGE_SESSIONS_URL = `${API_BASE_URL}/average-sessions`
	const USER_PERFORMANCE_URL = `${API_BASE_URL}/performance`

	const userData = await fetchData(API_BASE_URL)
	const userInfo = new UserInfoModel(userData)

	const activitiesData = await fetchData(USER_ACTIVITY_URL)
	const activities = new UserActivityModel(activitiesData)

	const averageSessionData = await fetchData(AVERAGE_SESSIONS_URL)
	const averageSession = new AverageSessionsModel(averageSessionData)

	const performanceData = await fetchData(USER_PERFORMANCE_URL)
	const performance = new UserPerformanceModel(performanceData)

	return {
		info: userInfo,
		activities: activities,
		averageSessions: averageSession,
		performance: performance,
	}
}

async function fetchData(URL: string) {
	const results = await fetch(URL)
	if (!results.ok) throw new Error("Fetching error... 🙊")
	const {data: userData} = await results.json()
	if (!userData) throw new Error(`Error from Api \"${URL}\"`)

	return userData
}
