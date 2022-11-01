import React, { useEffect } from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import Link from "next/link";
import Router from "next/router";
import Cookies from "cookies";

export default function Account() {
  const { data: session, status } = useSession();
  if (status == "authenticated") {
    return (
      <div className="max-w-[1240px] mx-auto pt-[200px] h-full px-10 pb-96">
        <div className="h-full">
          <h2>Account</h2>
          <br />
          <br />
          <div>
            <img
              src={session.user.image}
              alt="user image"
              referrerpolicy="no-referrer"
            />
            <h3>User is Logged in</h3>
            <p>Name: {session.user.name}</p>
            <p>Email Address: {session.user.email}</p>
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
                  "p-2 text-gray-100 text-base sm:px-10 sm:text-lg cursor-pointer hover:scale-105 ease-in duration-300 mt-44"
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
  } else {
    return (
      <div>
        <p>You are not signed in.</p>
      </div>
    );
  }
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  console.log(context);
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
  return {
    props: { session },
  };
};
