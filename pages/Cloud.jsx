import Cookies from 'cookies';
import Router from 'next/router';
import { useSession, signOut, getSession } from 'next-auth/react';
import React from 'react';

export default function Cloud() {
  return (
    <div className='max-w-[1240px] pt-[200px] p-16'>
      <div className='h-full'>
        <h2>Error 404: Page not available! Please try again later.</h2>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const cookies = new Cookies(context.req, context.res);
  const nextcloudPath = 'https://nextcloud.redryder.at';
  const redirectionPath = '/Cloud';
  cookies.set('redirectionPath', redirectionPath, {
    httpOnly: true,
  });
  if (!session) {
    return {
      redirect: {
        destination: '/Login',
      },
    };
  } else {
    return {
      redirect: {
        destination: nextcloudPath,
      },
    };
  }
};
