import {IUserActivity} from "../interfaces/IUserActivity"

/**
 * # UserActivityModel
 * @description This class will create a user activity model.
 * @param {IUserActivity} data
 * @example
 * const userActivity = new UserActivityModel(data)
 * @constructor UserActivityModel
 * @returns {IUserActivity}
 * @public
 * @export
 * @class UserActivityModel
 * @see {@link IUserActivity}
 */
export class UserActivityModel implements IUserActivity {
	userId: number
	sessions: {day: string; kilogram: number; calories: number}[]

	constructor(data: {
		userId: number
		sessions: {day: string; kilogram: number; calories: number}[]
	}) {
		this.sessions = data.sessions
		this.userId = data.userId
	}
}
