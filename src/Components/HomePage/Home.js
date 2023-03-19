import React from "react";
import "./Home.css";
import bg1 from "../../Images/bg.svg";
import mesh01 from "../../Images/mesh01.png";
import grain from "../../Images/grain.png";

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
          className="fixed top-8 w-full  h-full -z-10     "
        />
        <div className="fixed   w-full bg-violet-900/10  backdrop-blur-lg items-center">
          <div className="flex  justify-between w-full my-4">
            <ul className="flex space-x-20 ml-20 ">
              <li>Home</li>
              <li>About</li>
              <li>Swag</li>
              <li>Sponsor</li>
              <li>Team</li>
            </ul>

            <div className="mr-10">
              <a href="">
                <i className="fa-brands fa-twitter fa-xl pr-5"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-discord fa-xl pr-5"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin fa-xl pr-5"></i>
              </a>
            </div>
          </div>
          <div className="relative bottom-0 h-[0.5px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </div>

        <div className=" flex flex-col items-center justify-center h-screen">
          <h1 className="text-8xl font-bold">TechX Hackathon</h1>
          <h2 className="mb-10">Innovate for good cause</h2>

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
