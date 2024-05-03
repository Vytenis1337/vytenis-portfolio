import React from "react";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import { Navbar } from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import { SideLinks } from "../components/SideLinks";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vytenis Portfolio</title>
        <meta
          name="Vytenis Portfolio Website"
          content="Im a front-end web developer"
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Navbar />
      <div>
        <Main />
        <About />
        {/* <Skills /> */}
        <Projects />
        <Contact />
        <Footer />
      </div>
      <SideLinks />
      <Toaster position="top-right" richColors />
    </div>
  );
}
