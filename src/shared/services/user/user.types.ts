export interface postUsersData {
    name: string;
    email: string;
    password: string;
    enrollment: string | undefined;
    phoneNumber: string | undefined;
    masterConfirm: boolean;
}

export interface patchUsersData {
    name: string;
    phoneNumber: string;
}

export interface postUsersAuthenticateData {
    email: string;
    password: string;
}