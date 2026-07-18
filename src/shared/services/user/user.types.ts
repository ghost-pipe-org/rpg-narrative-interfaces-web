export interface postUsersData {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    masterConfirmed: boolean;
}

export interface patchUsersData {
    name: string;
    phoneNumber: string;
}

export interface postUsersAuthenticateData {
    email: string;
    password: string;
}