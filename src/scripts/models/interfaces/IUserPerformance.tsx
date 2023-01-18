export interface IUserPerformance {
	userId: number
	kind: {[key: string]: string}
	data: IDataValue[]
}

export interface IDataValue {
	value: number
	kind: number
}
