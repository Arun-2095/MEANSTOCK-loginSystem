export interface Dataformat {
    mgs: string;
    token?: string;
    username?: string;
    password?: string;
    phone?: number;
    email?: string;
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
