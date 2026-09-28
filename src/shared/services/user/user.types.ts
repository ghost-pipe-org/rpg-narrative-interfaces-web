export interface postUsersData {
  name: string
  email?: string
  password?: string
  googleIdToken?: string
  enrollment: string | undefined
  phoneNumber: string | undefined
  masterConfirm: boolean
}

export interface patchUsersData {
  name: string
  phoneNumber: string
}

export type postUsersAuthenticateData =
  | {
      email: string
      password: string
    }
  | {
      googleIdToken: string
    }

export interface postUsersForgotPasswordData {
  email: string
}

export interface postUsersResetPasswordData {
  token: string
  password: string
}

export interface postUsersVerifyEmailData {
  token: string
}

export interface postUsersResendVerificationData {
  email: string
}
