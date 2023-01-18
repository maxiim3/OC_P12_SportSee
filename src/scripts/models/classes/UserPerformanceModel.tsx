import {IUserPerformance} from "../interfaces/IUserPerformance"

/**
 * # UserPerformanceModel
 * @description This class will create a user performance model.
 * @param {IUserPerformance} data
 * @example
 * const userPerformance = new UserPerformanceModel(data)
 * @constructor UserPerformanceModel
 * @returns {IUserPerformance}
 * @see {@link IUserPerformance}
 */
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