export type User = {
    id: string;
    name?: string;
    email?: string;
    password?: string;
    enrollment?: string;
    phoneNumber?: string;
    masterConfirm?: boolean;
    role?: string;
    isAdmin?: boolean;
}

export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface AuthResponse {
    token: string;
    user: User;
  }
  
  export interface RegisterCredentials {
    name: string;
    email: string;
    password: string;
    enrollment?: string;
    phoneNumber?: string;
    masterConfirm: boolean;
  }