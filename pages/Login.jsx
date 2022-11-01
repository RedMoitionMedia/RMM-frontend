import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import Router from "next/router";
import Link from "next/link";
import Cookies from "cookies";

export default function Login({ redirectionPath }) {
  const { data: session, status } = useSession();
  const [authenticationState, setAuthenticationState] = useState("loading");
  const [backendUser, setBackendUser] = useState([]);

  async function setBackendUserAndChangeAuthenticationState(user) {
    const response = await fetch(
      "https://redmotionmedia.redryder.at:5002/api/nextcloud/getUserInfos",
      {
        method: "POST",
        body: JSON.stringify(user),
      }
    );
    const backendUser = await response.json();
    setBackendUser(backendUser);
    if (backendUser) {
      if (session.user.email == backendUser.email.value) {
        setAuthenticationState("success");
      } else {
        setAuthenticationState("fail");
      }
    } else {
      setAuthenticationState("fail");
    }
  }

  if (session) {
    setBackendUserAndChangeAuthenticationState(session.user);
    if (authenticationState == "loading") {
      return (
        <div className="max-w-[1240px] mx-auto pt-[200px] h-full px-10 pb-96">
          <div className="h-full">
            <h2>Loading ...</h2>
          </div>
        </div>
      );
    }

    if (authenticationState == "fail") {
      setTimeout(() => {
        signOut();
      }, 1000);
      return (
        <div className="max-w-[1240px] mx-auto pt-[200px] h-full px-10 pb-96">
          <div className="h-full">
            <h2>User not allowed</h2>
          </div>
        </div>
      );
    } else {
      Router.push(redirectionPath);
    }
  } else {
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
  }
}

export const getServerSideProps = async ({ params, query, req, res }) => {
  const cookies = new Cookies(req, res);
  let redirectionPath = "/";

  if (cookies.get("redirectionPath")) {
    redirectionPath = cookies.get("redirectionPath");
  }
  return {
    props: { redirectionPath },
  };
};
