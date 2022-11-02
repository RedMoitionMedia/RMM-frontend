import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import Router from "next/router";
import Link from "next/link";
import Cookies from "cookies";

export default function Login({ state }) {
  if (state == "notSignedIn") {
    return (
      <div className="max-w-[1240px] mx-auto pt-[200px] h-full px-10 pb-96">
        <div className="h-full">
          <h2>Login</h2>
          <br />
          <br />
          <button
            className={
              "flex justify-center items-center gap-3 p-2 text-gray-100 text-base sm:px-10 sm:text-lg cursor-pointer hover:scale-105 ease-in duration-300"
            }
            onClick={() => {
              signIn("google");
            }}
          >
            <div className="rounded-full p-3">
              <FaGoogle />
            </div>
            <p>Log in with Google</p>
          </button>
        </div>
      </div>
    );
  } else {
    useEffect(() => {
      setTimeout(() => {
        signOut();
      }, 500);
    }, []);
    return (
      <div className="max-w-[1240px] mx-auto pt-[200px] h-full px-10 pb-96">
        <div className="h-full">
          <h2>User not allowed</h2>
        </div>
      </div>
    );
  }
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  let state = "notSignedIn";
  if (!session) {
    return {
      props: { state },
    };
  }
  const user = session.user;
  const response = await fetch(
    "https://redmotionmedia.redryder.at:5002/api/nextcloud/getUserInfos",
    {
      method: "POST",
      body: JSON.stringify(user),
    }
  );
  const backendUser = await response.json();
  if (!backendUser) {
    state = "notAllowed";
    return {
      props: { state },
    };
  }
  const cookies = new Cookies(context.req, context.res);
  let redirectionPath = "/";

  if (cookies.get("redirectionPath")) {
    redirectionPath = cookies.get("redirectionPath");
  }
  return {
    redirect: {
      destination: redirectionPath,
    },
  };
};
