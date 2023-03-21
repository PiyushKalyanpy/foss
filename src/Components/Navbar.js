import React from 'react'

function Navbar() {
  return (
    <div className="fixed justify-between h-20 w-full bg-green-900/10  backdrop-blur-lg items-center z-20 ">
          <div className="flex flex-col w-full h-full ">
            <div className="flex  justify-between w-full my-auto  ">
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
          </div>
            <div className="flex  m-auto w-1/2 bottom-0 h-[0.5px] bg-gradient-to-r from-transparent via-green-500 to-transparent" />
        </div>
  )
}

export default Navbar