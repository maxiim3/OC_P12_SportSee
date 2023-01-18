export interface IUserActivity {
	userId: number
	sessions: ISession[]
}

export interface ISession {
	day: string
	kilogram: number
	calories: number
}
