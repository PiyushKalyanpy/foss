import React from 'react'

function Navbar() {
  return (
    <div className="fixed   w-full bg-violet-900/10  backdrop-blur-lg items-center">
          <div className="flex flex-col w-full ">
            <div className="flex  justify-between w-full my-4">
              <ul className="flex space-x-20 ml-20 ">
                <li>Home</li>
                <li>About</li>
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
            <div className="flex m-auto w-1/2 bottom-0 h-[0.5px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>
        </div>
  )
}

export default Navbar