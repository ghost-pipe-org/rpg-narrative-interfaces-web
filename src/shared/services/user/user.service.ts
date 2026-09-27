import api from "../api";
import type { postUsersData, patchUsersData, postUsersAuthenticateData, postUsersForgotPasswordData, postUsersResetPasswordData } from "./user.types";

export const postUsers = async (data: postUsersData) => {
  const response = await api.post(`/users`, data);
  return response.data;
};

export const getMyEmmittedSessions = async () => {
  const response = await api.get(`/users/my-emmitted-sessions`);
  return response.data;
}

export const getMyEnrolledSessions = async () => {
  const response = await api.get(`/users/my-enrolled-sessions`);
  return response.data;
}

export const getUsersProfile = async () => {
  const response = await api.get(`/users/profile`);
  return response.data;
}

export const patchUsersProfile = async (data: patchUsersData) => {
  const response = await api.patch(`/users/profile`, data);
  return response.data;
}

export const postUsersAuthenticate = async (data: postUsersAuthenticateData) => {
  const response = await api.post(`/users/authenticate`, data);
  return response.data;
}

export const postUsersForgotPassword = async (data: postUsersForgotPasswordData) => {
  const response = await api.post(`/users/forgot-password`, data);
  return response.data;
}

export const postUsersResetPassword = async (data: postUsersResetPasswordData) => {
  const response = await api.post(`/users/reset-password`, data);
  return response.data;
}