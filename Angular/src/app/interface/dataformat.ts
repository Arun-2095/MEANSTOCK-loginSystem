export interface Dataformat {
    mgs: string;
    token?: string;
   user: {
    username?: string;
    password?: string;
    phone?: number;
    email?: string;
   };

}

export interface User {
    username: string;
    password: string;
    phone: number;
    email: string;
   __v: number;
   _id: string;
}

export interface RegistrationData {
    mgs: string;
    token?: string;
    username?: string;
    password?: string;
    phone?: number;
    email?: string;

}

export interface RegistrationResponse {
   success: boolean;
   mgs: string;
}
