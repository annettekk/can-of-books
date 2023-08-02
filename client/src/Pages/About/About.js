import React from 'react';

import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
    <Helmet>
        <title>Our Website About</title>
        <meta name="description" content="This is some 'about' page" />
        <link rel="cannonical" href='/about' />
    </Helmet>
    <main>
        <h2>Learn all about us</h2>
        <p></p>
    </main>
    </>
  )
}
