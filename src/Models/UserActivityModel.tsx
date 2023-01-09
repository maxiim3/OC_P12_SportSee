import {IUserActivity} from "../Interface/IUserActivity"

// todo add documentation
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
