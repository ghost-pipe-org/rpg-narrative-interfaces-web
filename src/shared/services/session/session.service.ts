import api from "../api";
import type { postSessionData } from "./session.types";

export const getSessions = async () => {
  const response = await api.get(`/sessions`);
  return response.data;
};

export const postSession = async (data: postSessionData) => {
    const response = await api.post(`/sessions`, data);
    return response.data;
}

export const deleteSession = async (sessionId: string) => {
    const response = await api.delete(`/sessions/${sessionId}`);
    return response.data;
}

export const getSessionsApproved = async () => {
  const response = await api.get(`/sessions/approved`);
  return response.data;
};

export const patchSessionSubscribe = async (sessionId: string) => {
    const response = await api.patch(`/sessions/${sessionId}/subscribe`);
    return response.data;
}

export const patchSessionApprove = async (sessionId: string) => {
    const response = await api.patch(`/sessions/${sessionId}/approve`);
    return response.data;
}

export const patchSessionReject = async (sessionId: string) => {
    const response = await api.patch(`/sessions/${sessionId}/reject`);
    return response.data;
}