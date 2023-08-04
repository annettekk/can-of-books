import React from 'react';
import { Helmet } from "react-helmet-async";
import './About';

export default function About() {
  return (
    <>
    <Helmet>
        <title>Our Website About</title>
        <meta name="description" content="This is About page" />
        <link rel="cannonical" href='/about' />
    </Helmet>
    <main>
        <h2>About Page</h2>
        <p>Find information about creators of this website below.</p>
        <h3>Anna Kuroshchenkova & Jaga Galganek</h3>
        <p></p>
    </main>
    </>
  )
}
