import { SignupProps, SigninProps, TOKEN } from "./auth.model";
import axios from '../../config/axios';

export function getAuthToken() {
  if ((process as any).browser as any) {
    return localStorage.getItem(TOKEN);
  }
  return null;
}

export function userSignup(_signupProps: SignupProps) {
  return axios.post('/auth/signup', {..._signupProps})
}

export function userSignin(_signinProps: SigninProps) {
    return axios.post('/auth/signin', {..._signinProps})
}