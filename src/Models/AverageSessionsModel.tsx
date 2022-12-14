import {IAverageSessions} from "../Interface/IAverageSessions"

// todo add documentation
export class AverageSessionsModel implements IAverageSessions {
	sessions: {day: number; sessionLength: number}[]
	userId: number

	constructor(data: {sessions: {day: number; sessionLength: number}[], userId: number}) {
		this.sessions = data.sessions
		this.userId = data.userId
	}
}