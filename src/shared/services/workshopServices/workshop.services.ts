import api from "../apiConfig";

export const getApprovedWorkshops = async () => {
    const response = await api.get('/workshops/approved');
    return response.data;
};

export const getWorkshops = async () => {
    const response = await api.get('/workshops');
    return response.data;
};

export const createWorkshop = async (workshop: any) => { // TODO: Add tipagem
    const response = await api.post('/workshops', workshop);
    return response.data;
};

export const enrollInWorkshop = async (workshopId: string) => {
    const response = await api.post(`/workshops/${workshopId}/subscribe`);
    return response.data;
};

export const cancelWorkshopEnrollment = async (workshopId: string) => {
    const response = await api.delete(`/workshops/${workshopId}/enrollments/me`);
    return response.data;
};

export const approveWorkshop = async (workshopId: string, data: any) => { // TODO: Add tipagem
    const response = await api.patch(`/workshops/${workshopId}/approve`, data);
    return response.data;
};

export const rejectWorkshop = async (workshopId: string, data: any) => { // TODO: Add tipagem
    const response = await api.patch(`/workshops/${workshopId}/reject`, data);
    return response.data;
};

export const cancelApprovedWorkshop = async (workshopId: string, cancelEvent: string) => {
    const response = await api.delete(`/workshops/${workshopId}/cancel`, { data: { cancelEvent } });
    return response.data;
};

export const getMyFacilitatedWorkshops = async () => {
    const response = await api.get('/my-facilitated-workshops');
    return response.data;
};