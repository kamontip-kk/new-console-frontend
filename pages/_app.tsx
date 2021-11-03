import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import axios from '../config/axios';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  axios.interceptors.response.use(
    (res: any) => {
      return res;
    },
    (error: any) => {
      if (error?.response) {
        if (error?.response?.status === 401) {
          if (pageProps.pathname === '/signin') return;

          console.log('Unauthorized');   
          router.push(`/signin`);
        }

        console.log(error.response.data)
        alert(error.response.data.message)
        // console.log('Unauthorized')
        
        // router.push(`/signup`);
      }

      // if (unredirected404Route.includes(Object.keys(router.query)?.[0])) {
      //   return Promise.reject(error?.response);
      // }

      // if (error?.response?.status === 404) {
      //   router.push('/404');
      // }

      return Promise.reject(error?.response);
    }
  );

  return <Component {...pageProps} />
}

export default MyApp
