export interface IUserActivity {
	userId: number
	sessions: {
		day: string
		kilogram: number
		calories: number
	}[]
}
