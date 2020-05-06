import { UserActions, REGISTER, AUTH } from "../types/Users";

export interface UserState{
    isAuth: boolean;
    name: string;
    surname: string;
    login: string;
}

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
    case REGISTER: {
      return <UserState>{
        isAuth: true,
        name: action.payload.name,
        surname: action.payload.surname,
        login: action.payload.login,
      };
    }
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