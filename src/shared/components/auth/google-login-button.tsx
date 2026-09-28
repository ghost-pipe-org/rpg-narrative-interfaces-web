import { GoogleLogin, type CredentialResponse } from "@react-oauth/google"

interface GoogleLoginButtonProps {
  onSuccess: (credentialResponse: CredentialResponse) => void
  onError?: () => void
}

export function GoogleLoginButton({ onSuccess, onError }: GoogleLoginButtonProps) {
  return (
    <div className="flex w-full items-center justify-center">
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onError}
        useOneTap={false}
        width="384"
        text="continue_with"
        shape="rectangular"
        theme="outline"
        size="large"
      />
    </div>
  )
}

