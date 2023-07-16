import Head from "next/head";
import Auth from './auth';

 
export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title>e L e c k</title>
        <meta name="description" content="e L e c k"/>
      </Head>
      <Auth />
    </div>
    </>
  )
}