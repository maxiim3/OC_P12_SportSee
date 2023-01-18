import {IUserMainData} from "./IUserMainData"
import {IUserActivity} from "./IUserActivity"
import {IAverageSessions} from "./IAverageSessions"
import {IUserPerformance} from "./IUserPerformance"

export interface IUser {
	info: IUserMainData
	activities: IUserActivity
	averageSessions: IAverageSessions
	performance: IUserPerformance
}