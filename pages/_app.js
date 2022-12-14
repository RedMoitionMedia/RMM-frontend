import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps, session }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <SessionProvider session={session}>
        <Head>
          <title>RedMotionMedia</title>
          <meta name="description" content="Created by RedMotionMedia" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Navbar />

        <Component {...pageProps} />

        <Footer />
      </SessionProvider>
    </div>
  );
}

export default MyApp;
