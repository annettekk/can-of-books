import React from 'react';

import Hero from "../../Components/Hero/Hero"

import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
    <Helmet>
        <title>Our Website</title>
        <meta name="description" content="This is the home page" />
        <link rel="cannonical" href='/' />
    </Helmet>
    <main>
        <Hero />
        <h2>This is the home page</h2>
        <p>router checker</p>
    </main>
    </>
  )
}

