export type Roles = 'SUSCRIPTOR' | 'ADMIN';

export interface User {
    username?: string | null;
    password?: string | null;
}

export interface UserResponse {
    message: string;
    token: string;
    userId: number;
    role: Roles;
}