import {IUserPerformance} from "../Interface/IUserPerformance"

export class UserPerformanceModel implements IUserPerformance {
	data: {value: number; kind: number}[]
	kind: {}
	userId: number

	constructor(data: {data: {value: number; kind: number}[], kind: {}, userId: number}) {
		this.data = data.data
		this.kind = data.kind
		this.userId = data.userId
	}
}