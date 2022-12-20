import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import {Dashboard} from "./Pages/dashboard"
import React, {useEffect} from "react"
import {IUser} from "./Interface/IUser"
import Api from "./Service/Api"
import {mockUser} from "./Mock/mockUser"


function useStore(userId: number) {
	const store = new Api(userId)
	store.createStore().then()
	const user = store.getUser()
	return {user}
}

export const StoreContext = React.createContext({} as IUser)

const USER_ID: 12 | 18 = 12

export function Router() {
	useEffect(() => {
		sessionStorage.clear()
		localStorage.clear()
		sessionStorage.setItem("userId", JSON.stringify(USER_ID))
	}, [USER_ID])

	const {user} = useStore(USER_ID)

	return (
		<BrowserRouter>
			<StoreContext.Provider value={mockUser}>
				<Routes>
					<Route
						path={"/"}
						element={<Dashboard />}
					/>
					{/*<Route
					 path={`/user/${userID}`}
					 element={JSON.stringify(user.info)}
					 />
					 <Route
					 path={`/user/${userID}/activity`}
					 element={JSON.stringify(user.activities)}
					 />
					 <Route
					 path={`/user/${userID}/performance`}
					 element={JSON.stringify(user.performance)}
					 />
					 <Route
					 path={`/user/${userID}/average-sessions`}
					 element={JSON.stringify(user.averageSessions)}
					 />*/}
					<Route
						path={`/page-not-found`}
						element={<h1>ERROR 404</h1>}
					/>
					<Route
						path={`*`}
						element={<Navigate to={"/page-not-found"} />}
					/>
				</Routes>
			</StoreContext.Provider>
		</BrowserRouter>
	)
}
