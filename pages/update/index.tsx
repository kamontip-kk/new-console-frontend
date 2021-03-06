import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import PleaseLogin from '../../components/PleaseLogin'
import UpdatesForYou from '../../components/UpdatesForYou'
import CreateUpdate from '../../components/CreateUpdate'
import DeleteUpdate from '../../components/DeleteUpdate'
import UpdateUpdate from '../../components/UpdateUpdate'
import styles from '../../styles/Home.module.css'
// import { getAuthToken } from '../../service/auth/auth.service';
// import { Router, useRouter } from "next/router";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>New Console</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
      <div>
        <Navbar/>
        <div>
          <UpdatesForYou/>
          <CreateUpdate/>
          <DeleteUpdate/>
          <UpdateUpdate/>
        </div>
        {/* {content()} */}
      </div>
    </div>
    
  )
}

export default Home
