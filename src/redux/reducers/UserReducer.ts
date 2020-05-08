// reducer for work with user
import { UserActions, REGISTER, AUTH } from "../types/Users";
// state for user
export interface UserState{
    isAuth: boolean;
    name: string;
    surname: string;
    login: string;
}
// initial state
const initialState: UserState  = {
    isAuth: false,
    name: '',
    surname: '',
    login: ''
};

 const UserReducer = (
  state = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    // if action tye register
    case REGISTER: {
      return <UserState>{
        isAuth: true,
        name: action.payload.name,
        surname: action.payload.surname,
        login: action.payload.login,
      };
    }
    // if action type auth
    case AUTH: {
        return <UserState>{
          isAuth: true,
          name: action.payload.name,
          surname: action.payload.surname,
          login: action.payload.login,
        };
      }
    default:
      return state;
  }
};

export default UserReducer;