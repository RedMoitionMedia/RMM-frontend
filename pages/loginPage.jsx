import React, { useState } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

const LoginPage = () => {
  const { data: session, status } = useSession();
  const [authenticationState, setAuthenticationState] = useState("loading");

  async function getUserInfos(user) {
    const response = await fetch(
      "https://redmotionmedia.redryder.at:5002/api/nextcloud/getUserInfos",
      {
        method: "POST",
        body: JSON.stringify(user),
      }
    );
    return await response.json();
  }

  if (session) {
    if (authenticationState == "loading") {
      let backendUser = getUserInfos(session.user);

      backendUser.then((data) => {
        console.log(data);
        if (data) {
          if (session.user.email == data.email.value) {
            setAuthenticationState("success");
          } else {
            setAuthenticationState("fail");
          }
        } else {
          setAuthenticationState("fail");
        }
      });
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
      document.getElementById("navLoginLink").innerHTML = "Account";
      document.getElementById("navCloudLink").style.display = "block";

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
              <h3>User Logged in</h3>
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
};
export default LoginPage;
