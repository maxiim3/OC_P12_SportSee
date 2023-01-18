import {IUserMainData} from "../interfaces/IUserMainData"

/**
 * # UserInfoModel
 * @description This class will create a user info model.
 * @param {IUserMainData} data
 * @constructor UserInfoModel
 * @example
 * const userInfo = new UserInfoModel(data)
 * @returns {IUserMainData}
 */
export class UserInfoModel implements IUserMainData {
	id: number
	keyData: {
		calorieCount: number
		proteinCount: number
		carbohydrateCount: number
		lipidCount: number
	}
	score: number
	userInfos: {firstName: string; lastName: string; age: number}

	constructor(data: {
		id: number
		keyData: {
			calorieCount: number
			proteinCount: number
			carbohydrateCount: number
			lipidCount: number
		}
		score?: number
		todayScore?: number
		userInfos: {firstName: string; lastName: string; age: number}
	}) {
		this.id = data.id
		this.keyData = data.keyData
		this.score = data.score || data.todayScore!
		this.userInfos = data.userInfos
	}
}
