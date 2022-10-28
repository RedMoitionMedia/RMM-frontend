/*App.js*/

import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

function loginPage() {
    const [ profile, setProfile ] = useState();
    const clientId = '386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com';
    useEffect(() => {
        const gapi = import("gapi-script").then((pack) => pack.gapi);

        const initClient = async() => {
            const d = await gapi;
            d.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.then((d)=> d.load("client:auth2",initClient));
    });

    const onSuccess = (res) => {
        setProfile(res.profileObj);
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
        setProfile(null);
    };

    return (
            <div className="max-w-[1240px] mx-auto pt-[200px] h-full px-10 pb-96">
            <div className="h-full">
            <h2>Google Login</h2>
            <br />
            <br />
            {profile!=null ? (
                <div>
                    <img src={profile.imageUrl} alt="user image" referrerpolicy="no-referrer"/>
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                </div>
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}
            </div>
          </div>
    );
}
export default loginPage;