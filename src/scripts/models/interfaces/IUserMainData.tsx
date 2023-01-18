export interface IUserMainData {
	id: number
	userInfos: {
		firstName: string
		lastName: string
		age: number
	}
	score?: number
	todayScore?: number
	keyData: {
		calorieCount: number
		proteinCount: number
		carbohydrateCount: number
		lipidCount: number
	}
}

