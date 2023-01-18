import {createContext} from "react"
import {mockUser} from "../../mocks/mockUser"

/**
 * #UserContext
 * @description UserContext is a context that contains the user data.
 * @type {React.Context<IUser>}
 */
const UserContext = createContext(mockUser) // default data is mocked data
export default UserContext
