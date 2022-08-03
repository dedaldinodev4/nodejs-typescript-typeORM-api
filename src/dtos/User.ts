
export interface IUser {
    id?: string; 
    name: string;
    email: string;
    password: string;
    status: boolean;
} 

export interface IUserRequest {
    name: string;
    email: string;
    password: string;
}

export interface ICurrentUser {
    user: any;
    token: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}