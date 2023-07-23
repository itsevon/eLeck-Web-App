import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Head from "next/head";
import Auth from './auth';
import About from "./about";
import AccountState from '@/States/AccountState';

 
export default function Home() {
  return (
      <BrowserRouter>
      <Head>
        <title>e L e c k</title>
        <meta name="description" content="e L e c k"/>
      </Head>
      {/* <Auth /> */}
        <Routes>
          {/* <Route exact path="/" element={<About />}></Route> */}
          <Route exact path="/login" element={<AccountState><Auth /></AccountState>}></Route>
        </Routes>
      </BrowserRouter>
  )
}