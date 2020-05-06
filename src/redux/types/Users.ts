export const REGISTER = 'REGISTER_NEW_USER';
export const AUTH = 'AUTH_USER';


export interface RegisterUser{
    name: string;
    surname: string;
    email: string;
    login: string;
    password: string;
}
export interface RegisterResponse{
    name?: string;
    surname?: string;
    login?: string;
    message: string;
}
export interface AuthUser{
    login: string;
    password: string;
}

export interface RegisterAction{
    type: typeof REGISTER;
    payload: RegisterResponse
}

export interface AuthAction{
    type: typeof AUTH;
    payload: RegisterResponse
}

export type UserActions = RegisterAction | AuthAction;
