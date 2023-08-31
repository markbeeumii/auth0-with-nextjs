import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useUser} from '@auth0/nextjs-auth0/client'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  //if(!error && !isLoading) console.log(user)
  return (
    <>
      <Head>
        <title>Auth App</title>
        <meta name="description" content="Auth Google" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type='image/jpg' href="	https://img.freepik.com/free-vector/gradient-code-…1ecb13566453b410365bcb1e10fec96f13dcad3f0a6921e21" />
      </Head>
        <main>
          {/* <h1>Hello</h1> */}
        </main>
    </>
  )
}
