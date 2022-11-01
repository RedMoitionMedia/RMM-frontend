import Cookies from "cookies";
import Router from "next/router";
import { useSession, signOut, getSession } from "next-auth/react";
import React from "react";

export default function Cloud() {
  Router.push("https://nextcloud.redryder.at");
  return (
    <div className="max-w-[1240px] mx-auto pt-[200px] h-full px-10 pb-96">
      <div className="h-full">
        <h2>Loading ...</h2>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  console.log(context);
  const cookies = new Cookies(context.req, context.res);
  const redirectionPath = "/Cloud";
  cookies.set("redirectionPath", redirectionPath, {
    httpOnly: true,
  });
  if (!session) {
    return {
      redirect: {
        destination: "/Login",
      },
    };
  }
  return {
    props: { session },
  };
};
