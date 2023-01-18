import {IAverageSessions} from "../interfaces/IAverageSessions"

/**
 * # AverageSessionsModel
 * @description This class will create a average sessions model.
 * @param {IAverageSessions} data
 * @constructor AverageSessionsModel
 * @example
 * const averageSessions = new AverageSessionsModel(data)
 * @returns {IAverageSessions}
 */
export class AverageSessionsModel implements IAverageSessions {
	sessions: {day: number; sessionLength: number}[]
	userId: number

	constructor(data: {sessions: {day: number; sessionLength: number}[], userId: number}) {
		this.sessions = data.sessions
		this.userId = data.userId
	}
}