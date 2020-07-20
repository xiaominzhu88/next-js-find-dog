import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GetServerSidePropsContext } from 'next';

export default function Logout() {
  return (
    <div>
      <Head>
        <title>Logged out</title>
      </Head>
      <Header />
      <div>
        <h1>You are Logged Out</h1>
        <h2>Thank you ✍️</h2>
      </div>
      <Footer />
      <style jsx>
        {`
          h1,
          h2 {
            text-align: center;
            color: #9d9c9f;
          }
        `}
      </style>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { serialize } = await import('cookie');
  const nextCookies = (await import('next-cookies')).default;
  const { deleteSessionByToken } = await import('../db');

  const { token } = nextCookies(context);
  await deleteSessionByToken(token);

  // Remove the cookie
  context.res.setHeader(
    'Set-Cookie',
    serialize('token', '', {
      maxAge: -1,
      path: '/',
    }),
  );

  return {
    props: {},
  };
}
