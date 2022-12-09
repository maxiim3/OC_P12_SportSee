export type UserInfoType = {
	firstName: string
	lastName: string
	age: number
}
export type KeyDataType = {
	calorieCount: number
	proteinCount: number
	carbohydrateCount: number
	lipidCount: number
}
export type SessionType = {
	day: string
	kilogram: number
	calories: number
	sessionLength: number
	value: number
	kind: ExerciceType
}
export type ExerciceType = "cardio" | "energy" | "endurance" | "strength" | "speed" | "intensity"

export interface IUserDataType {
	id: number
	userInfos: UserInfoType
	todayScore: number
	score: number
	keyData: KeyDataType
	sessions: SessionType[]
}

class UserModel implements IUserDataType {
	id: number
	keyData: KeyDataType
	score: number
	sessions: SessionType[]
	todayScore: number
	userInfos: UserInfoType

	constructor(
		id: number,
		keyData: KeyDataType,
		score: number,
		sessions: SessionType[],
		todayScore: number,
		userInfos: UserInfoType
	) {
		this.id = id
		this.keyData = keyData
		this.score = score
		this.sessions = sessions
		this.todayScore = todayScore
		this.userInfos = userInfos
	}
}
