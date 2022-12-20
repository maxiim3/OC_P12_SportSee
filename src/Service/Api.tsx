import {FetchData} from "../Models/FetchData"
import {IUserMainData} from "../Interface/IUserMainData"
import {IAverageSessions} from "../Interface/IAverageSessions"
import {IUserPerformance} from "../Interface/IUserPerformance"
import {IUserActivity} from "../Interface/IUserActivity"
import {UserMainDataModel} from "../Models/UserMainDataModel"
import {AverageSessionsModel} from "../Models/AverageSessionsModel"
import {UserActivityModel} from "../Models/UserActivityModel"
import {UserPerformanceModel} from "../Models/UserPerformanceModel"
import {IUser} from "../Interface/IUser"


export default class Api {
	private readonly userId: number
	private userInfo: IUserMainData | null
	private userActivities: IUserActivity | null
	private userAverageSessions: IAverageSessions | null
	private userPerformance: IUserPerformance | null

	constructor(userId: number) {
		this.userId = userId
		this.userInfo = null
		this.userActivities = null
		this.userAverageSessions = null
		this.userPerformance = null
	}

	async createStore() {
		const basedUrl = `http://localhost:3000/user/${this.userId}`
		const activityUrl = `${basedUrl}/activity`
		const userAverageSessions = `${basedUrl}/average-sessions`
		const userPerformance = `${basedUrl}/performance`

		const callToApi = new FetchData(this.userId, basedUrl)
		const responseFromAPi = await callToApi.fetchFromApi()
		if (responseFromAPi!) {
			const callToActivityApi = new FetchData(this.userId, activityUrl)
			const callToAverageSessionsApi = new FetchData(this.userId, userAverageSessions)
			const callToPerformanceApi = new FetchData(this.userId, userPerformance)

			const responseFromActivityApi = await callToActivityApi.fetchFromApi()
			const responseFromAverageSessionsApi = await callToAverageSessionsApi.fetchFromApi()
			const responseFromPerformanceApi = await callToPerformanceApi.fetchFromApi()

			this.userInfo = responseFromAPi && responseFromAPi
			this.userActivities = responseFromActivityApi! && responseFromActivityApi
			this.userAverageSessions =
				responseFromAverageSessionsApi! && responseFromAverageSessionsApi
			this.userPerformance = responseFromPerformanceApi! && responseFromPerformanceApi
		} else {
			console.warn("Error during data fetching...")
		}
	}

	private getUserInfo() {
		if (!this.userInfo) return
		return new UserMainDataModel(this.userInfo)
	}

	private getUserAverageSessions() {
		if (!this.userAverageSessions) return
		return new AverageSessionsModel(this.userAverageSessions)
	}

	private getUserActivities() {
		if (!this.userActivities) return
		return new UserActivityModel(this.userActivities)
	}

	private getUserPerformance() {
		if (!this.userPerformance) return
		return new UserPerformanceModel(this.userPerformance)
	}

	getUser() : IUser{
		return {
			info: this.getUserInfo()!,
			activities: this.getUserActivities()!,
			averageSessions: this.getUserAverageSessions()!,
			performance: this.getUserPerformance()!,
		}
	}
}


