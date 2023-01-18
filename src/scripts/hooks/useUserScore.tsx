import {useContext, useMemo} from "react"
import UserContext from "../context/userContext"

const useUserScore = () => {
	const user = useContext(UserContext)!
	const userScore = useMemo(() => {
		return {score: user.info.todayScore || user.info.score}
	}, [user])
	return {userScore}
}

export default useUserScore