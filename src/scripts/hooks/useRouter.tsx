import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom"
import {ContextAndLayoutProvider} from "../context/ContextAndLayoutProvider"
import {useStore} from "../store/useStore"
import {Dashboard} from "../pages/Dashboard"
import {OtherPages} from "../pages/OtherPages"
import PageNotFound from "../pages/PageNotFound"
import React from "react"

export function useRouter() {
	return createBrowserRouter(
		createRoutesFromElements(
			<Route
				path={"/"}
				element={<ContextAndLayoutProvider />}
				loader={useStore} // This is the loader that will be used to load the data.
				errorElement={<Navigate to={"/page-not-found"} />}>
				<Route
					path={"/"}
					element={<Dashboard />}
				/>
				<Route
					path={`/profil`}
					element={
						<OtherPages
							title={"Profil"}
							label={"Paramètres de votre profil"}
						/>
					}
				/>
				<Route
					path={`/settings`}
					element={
						<OtherPages
							title={"Paramètres"}
							label={"Réglage de l'Application"}
						/>
					}
				/>
				<Route
					path={`/community`}
					element={
						<OtherPages
							title={"Communauté"}
							label={"Échangez avec la communauté SportSee"}
						/>
					}
				/>
				<Route
					path={`/page-not-found`}
					element={<PageNotFound />}
				/>
			</Route>,
		),
	)
}