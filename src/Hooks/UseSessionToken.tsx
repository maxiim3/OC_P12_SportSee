// todo add documentation
export function useSessionToken() {
	const DEFAULT_ID = 12
	const token = parseInt(sessionStorage.id) || DEFAULT_ID
	return {token}
}