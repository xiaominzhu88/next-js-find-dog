import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getDogsById } from '../db';

function Dog({ dogs }) {
  return (
    <div>
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header />

      <main>
        <h1>{dogs.id}</h1>
        <h3>{dogs.h3}</h3>
        <p>{dogs.p}</p>
      </main>

      <Footer />
    </div>
  );
}
export default Dog;

export async function getServerSideProps(context) {
  const dogs = getDogsById(context.params.id);
  return {
    props: {
      dogs: dogs[0],
    },
  };
}
