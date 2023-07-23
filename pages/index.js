import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"
// import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Head from "next/head";
// import Auth from './auth';
// import About from "./about";
// import AccountState from '@/States/AccountState';

 
 
export default function Home() {
  const [session, loading] = useSession();

  if (loading) {
    return null;
  }

  if (session){
  return (
    <>
      Signed in as {session.user.email} <br />
      <button onClick = {() => signOut()}>Sign out</button>
    </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick = {() => signIn()}>Sign in</button>
    </>
  )
}


// export default function Home() {
//   return (
//       <BrowserRouter>
//       <Head>
//         <title>e L e c k</title>
//         <meta name="description" content="e L e c k"/>
//       </Head>
//       {/* <Auth /> */}
//         <Routes>
//           {/* <Route exact path="/" element={<About />}></Route> */}
//           <Route exact path="/login" element={<AccountState><Auth /></AccountState>}></Route>
//         </Routes>
//       </BrowserRouter>
//   )
// }