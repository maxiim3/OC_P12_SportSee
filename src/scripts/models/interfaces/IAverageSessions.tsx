export interface IAverageSessions {
	userId: number
	sessions: ISessionData[]
}

export interface ISessionData {
	day: number
	sessionLength: number
}
