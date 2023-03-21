import React from "react";
import mesh01 from "../Images/mesh01.png";
import grain from "../Images/grain.png";
import Navbar from "../Components/Navbar";


function Home() {
  return (
    <div className="">
      <>
        <img
          src={mesh01}
          alt="Your SVG"
          className="absolute top-8 w-1/2 h-screen -z-20"
        />
        <img
          src={grain}
          alt="Your SVG"
          className="fixed top-8 w-full  h-full -z-10"
        />
        
        <Navbar />

        <div className=" flex flex-col items-center justify-center h-screen">
          <h1 className="text-8xl font-bold">TechX Hackathon</h1>
          <h2  className="text-4xl mb-10 mt-5 text-gray-300">
            Innovate for good cause
          </h2>

          <div className="flex mb-20">
            <button className="rounded-none mr-10  p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Register Now{" "}
              <i className="fa-solid fa-arrow-right fa-l pl-2 pr-2"></i>
            </button>
            <button className="rounded-none border-2 p-2">
              {" "}
              <a href="">
                <i className="fa-brands fa-discord fa-l pr-5"></i>
              </a>
              Join Discord
            </button>
          </div>
          <a href="">
            <i className="fa-solid fa-arrow-down fa-xl pr-5"></i>
          </a>
        </div>
      </>
    </div>
  );
}

export default Home;
