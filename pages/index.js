import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import { Input,Button, Checkbox, Typography, Card } from "@material-tailwind/react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Head from "next/head";
import Auth from './auth';
import About from "./about";
import AccountState from '@/States/AccountState';


 
 
// export default function Home() {
//   const { data: session} = useSession();

//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <Button onClick={() => signOut()}>Sign out</Button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <Button onClick={() => signIn()}>Sign in</Button>
//     </>
//   )
// }


export default function Home() {
  return (
    <>
      <Head>
        <title>e L e c k</title>
        <meta name="description" content="e L e c k"/>
      </Head>
      <Auth />
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