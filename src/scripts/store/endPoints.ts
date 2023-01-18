import USER_ID from "./user"

const DATABASE_PORT = 3000
const API_BASE_URL = `http://localhost:${DATABASE_PORT}/user/${USER_ID}`
const USER_ACTIVITY_URL = `${API_BASE_URL}/activity`
const AVERAGE_SESSIONS_URL = `${API_BASE_URL}/average-sessions`
const USER_PERFORMANCE_URL = `${API_BASE_URL}/performance`

export {API_BASE_URL, USER_ACTIVITY_URL, AVERAGE_SESSIONS_URL, USER_PERFORMANCE_URL}
