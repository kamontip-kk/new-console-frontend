import axios from 'axios';
import { getAuthToken } from '../service/auth/auth.service';
import appConfig from '../appConfig';

axios.interceptors.request.use(async (config: any) => {
  config.baseURL = appConfig.NEXT_PUBLIC_API_URL;
    // config.baseURL = 'http://localhost:8000';
    const jwtToken = getAuthToken();
    if (jwtToken !== null) {
        config.headers['Authorization'] = `Bearer ${jwtToken}`;
    }
    return config;
});

export default axios;