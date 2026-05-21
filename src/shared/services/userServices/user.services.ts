import api from '../apiConfig';
import type { AuthResponse, LoginCredentials, RegisterCredentials, User } from './user.types';

export const authenticateUser = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/users/authenticate', credentials);
  return response.data;
};

export const createUser = async (user: RegisterCredentials) => {
    const response = await api.post('/users', user);
    return response.data;
};

export const updateUserProfile = async (data: User) => {
    const response = await api.patch('/users/profile', data);
    return response.data;
};

export const updateUserPassword = async (data: { password?: string, confirmPassword?: string }) => {
    const response = await api.patch('/users/password', data);
    return response.data;
};

export const updateUserEmail = async (data: { email?: string, confirmEmail?: string }) => {
    const response = await api.patch('/users/email', data);
    return response.data;
};

export const searchUserByEmail = async (email: string) => {
    const response = await api.get(`/users/search?email=${encodeURIComponent(email)}`);
    return response.data;
};