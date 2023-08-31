import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import '@/styles/main.scss'
import MainLayout from './layout/mainLayout';

export default function App({ Component, pageProps }: AppProps) {
  

  return(
    <>
    <UserProvider  loginUrl='/api/auth/login'>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </UserProvider>
    </>
  )
}
