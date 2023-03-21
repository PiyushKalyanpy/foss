import React from 'react'
import logo from '../Images/logo.png'
function Contact() {
  return (
    <div className='m-auto py-16 px-24'>
      <h1 className='mb-10  w-fit p-2 bg-gradient-to-r  border-l-4 border-green-500 mx-auto from-green-800/70 px-4 font-bold ' style={{fontSize: "35px"}} >CONTACT US</h1>
      <div className="flex mb-10  m-auto w-1/2 bottom-0 h-[0.5px] bg-gradient-to-r from-transparent via-green-500 to-transparent" />
      <div className='w-full flex justify-between'> {/*outer main */}

        <div> {/*logo one */}
          <div className='flex justify-between w-80'>
            <img src={logo} className='w-24' />
            <h1 className='mt-8 text-3xl font-semibold'>CODEV CLUB</h1>
          </div>
          
          <p className='w-72 text-left mt-10 text-gray-400'>Department of Computer Science and Engineering Graphic Era Hill University, Dehradun</p>
          <div className='flex mt-5 w-52 justify-between'>
            <a href="">
              <i className="fa-solid fa-envelope fa-xl"></i>
            </a>

            gehucodev@gmail.com
          </div>
        </div>

        <div> {/*about*/}
          <h1 className='text-left text-3xl mb-10 font-semibold'>About</h1>
          <ul className='text-left text-lg'>
            <li>Season 01</li>
            <li>Upcoming events</li>
            <li>know the team</li>
            <li>Code of conduct</li>
          </ul>
        </div>

        <div> {/*explore */}
        <h1 className='text-left text-3xl mb-10 font-semibold'>Explore</h1>
          <ul className='text-left text-lg'>
            <li>Season 01</li>
            <li>Upcoming events</li>
            <li>know the team</li>
            <li>Code of conduct</li>
          </ul>
        </div>

        <div> {/*follow us on */}
          <h1 className='text-left text-3xl mb-10 font-semibold'>Follow us on</h1>
          <div className=" text-left">
                <a href="">
                  <i className="fa-brands border-2 rounded-full fa-instagram fa-2x mr-5 p-3"></i>
                </a>
                <a href="">
                  <i className="fa-brands border-2 rounded-full fa-linkedin fa-2x p-3"></i>
                </a>
              </div>
        </div>

      </div>
    </div>
  )
}

export default Contact