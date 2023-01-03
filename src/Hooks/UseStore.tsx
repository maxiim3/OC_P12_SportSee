import Api from "../Service/Api"

/**
 * # useStore
 * useStore is a hook that creates an API store and retrieves a user object based on the provided userId.
 *
 * @param {number} userId - The id of the user to retrieve from the store.
 * @return {Object} An object containing the retrieved user object.
 *
 * @example
 * const {user} = useStore(12)
 */
export async function useStore(userId: number) {
	const store = new Api(userId)
	await store.createStore()
	const user = store.getUser()
	return {user}
}