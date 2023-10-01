import React from "react";
import Head from "next/head";
import { UilSearch } from "@iconscout/react-unicons";

const Hero = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
      </Head>
      <div className="flex justify-center items-center ">
        <div
          className="hero w-% h-96"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-box"></div>
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1
                className="mb-5 text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold funky-techy-font"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                START YOUR JOURNEY NOW
              </h1>
              <input
                type="text"
                placeholder="Search for communities..."
                className="input input-bordered input-primary w-full max-w-xs rounded-box text-black bg-white border-purple-500 hover:border-purple-700 hover:ring-4 hover:ring-purple-700"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
