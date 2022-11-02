import React, { useEffect } from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import Link from "next/link";
import Router from "next/router";
import Cookies from "cookies";

export default function Account({ user }) {
  return (
    <div className="max-w-[1240px] mx-auto pt-[100px] p-16 h-screen md:h-auto md:pt-[200px] ">
      <div className="h-full">
        <h2>Account</h2>
        <br />
        <br />
        <div>
          <img src={user.image} alt="user image" referrerpolicy="no-referrer" />
          <h3>User is Logged in</h3>
          <p>Name: {user.name}</p>
          <p>Email Address: {user.email}</p>
          <br />
          <br />
          <div className="flex flex-col gap-5 w-[200px]">
            <button
              className={
                "p-2 text-gray-100 text-base sm:px-10 sm:text-lg cursor-pointer hover:scale-105 ease-in duration-300"
              }
            >
              <Link href="https://nextcloud.redryder.at">
                <p>Cloud</p>
              </Link>
            </button>
            <button
              className={
                "p-2 text-gray-100 text-base sm:px-10 sm:text-lg cursor-pointer hover:scale-105 ease-in duration-300"
              }
              onClick={() => signOut()}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const cookies = new Cookies(context.req, context.res);
  const redirectionPath = "/Account";
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
  const user = session.user;
  return {
    props: { user },
  };
};
