import React from "react";
import { Helmet } from "react-helmet-async";
import BookCards from "../../Components/Cards/BookCards";
import Main from "../../Components/Main/Main";

export default function Home() {
  return (
    <>
      {/* <Helmet>
        <title>Our Website</title>
        <meta name="description" content="This is the home page for Can of Books" />
        <link rel="cannonical" href='/' />
    </Helmet> */}
      <main>
        <h2>Home Page</h2>
        <Main />
        {/* <p>router checker</p> */}
        <BookCards />
      </main>
    </>
  );
}
