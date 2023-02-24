import '@/styles/globals.css'
import axios from 'axios';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  axios.defaults.headers.common['API-Key'] = process.env.NEXT_PUBLIC_API_KEY;

  return <Component {...pageProps} />
}
