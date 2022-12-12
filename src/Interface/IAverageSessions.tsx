export interface IAverageSessions {
	userId: number
	sessions: {
		day: number
		sessionLength: number
	}[]
}

