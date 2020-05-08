export const REGISTER = 'REGISTER_NEW_USER';
export const AUTH = 'AUTH_USER';
// type for user in register form
export interface RegisterUser{
    name: string;
    surname: string;
    email: string;
    login: string;
    password: string;
}
// type for response from server
export interface RegisterResponse{
    name?: string;
    surname?: string;
    login?: string;
    message: string;
}
// type for auth user
export interface AuthUser{
    login: string;
    password: string;
}
// action type for register
export interface RegisterAction{
    type: typeof REGISTER;
    payload: RegisterResponse
}
// action type for auth
export interface AuthAction{
    type: typeof AUTH;
    payload: RegisterResponse
}
// create user type
export type UserActions = RegisterAction | AuthAction;
