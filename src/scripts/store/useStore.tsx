import {UserInfoModel} from "../models/classes/UserInfoModel"
import {UserActivityModel} from "../models/classes/UserActivityModel"
import {AverageSessionsModel} from "../models/classes/AverageSessionsModel"
import {UserPerformanceModel} from "../models/classes/UserPerformanceModel"
import {IUser} from "../models/interfaces/IUser"
import {
	API_BASE_URL,
	AVERAGE_SESSIONS_URL,
	USER_ACTIVITY_URL,
	USER_PERFORMANCE_URL,
} from "./endPoints"

/**
 * # useStore
 * @description This is a custom hook that will fetch data from the API and return the data in a store.
 * @returns {IUser} - The user data.
 * @example
 * const {user} = useStore(12)
 */

export const useStore = async (): Promise<IUser> => {
	try {
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
	} catch (e) {
		console.error(e)
		return {} as IUser
	}
}

/**
 * # fetchData
 * @description This function will fetch data from the API.
 * @param {string} URL
 * @return {Promise<any>}
 * @example
 * const data = await fetchData("http://localhost:3000/user/12")
 */
async function fetchData(URL: string) {
	const results = await fetch(URL)
	if (!results.ok) throw new Error("Fetching error... 🙊")
	const {data: userData} = await results.json()
	if (!userData) throw new Error(`Error from Api \"${URL}\"`)

	return userData
}
