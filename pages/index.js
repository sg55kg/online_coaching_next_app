import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {signIn, signOut, useSession} from "next-auth/react";
import {useAuth} from "../contexts/AuthContext";
import {useEffect} from "react";

export default function Home() {

    const session = useSession()
    const { user } = useAuth()



  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          {session.status === 'unauthenticated' &&
              <button onClick={() => signIn()}>
                  Get Started
              </button>
          }
          {session.status === 'authenticated' &&
            <button
              onClick={() => signOut()}
            >
                Sign Out
            </button>
          }
      </main>
    </div>
  )
}
