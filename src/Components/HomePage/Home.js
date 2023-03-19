import React from 'react';
import './Home.css';
// import bg1 from '../../Images/bg';
function Home() {
  return (
    <div className='mt-5'>
        <div>
            <div className='flex justify-between'>
                <ul className='flex space-x-20 ml-20'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Swag</li>
                    <li>Sponsor</li>
                    <li>Team</li>
                </ul>
                <div className='mr-10'>
                    <a href=''><i className="fa-brands fa-twitter fa-xl pr-5"></i></a>
                    <a href=''><i className="fa-brands fa-discord fa-xl pr-5"></i></a>
                    <a href=''><i className="fa-brands fa-linkedin fa-xl pr-5"></i></a>

                </div>
            </div>

            <div className=' flex flex-col items-center justify-center h-screen'>
                <h1 style={{fontSize: "50px"}} >TechX Hackathon</h1>
                <h2 style={{fontSize: "25px"}} className='mb-10'>Innovate for good cause</h2>
                <img src='../../Images/bg.svg' alt="Your SVG" />
                <div className='flex mb-20'>
                    <button className='rounded-none mr-10 border-2 p-2'>Register Now <i className="fa-solid fa-arrow-right fa-l pl-2 pr-2"></i></button>
                    <button className='rounded-none border-2 p-2'> <a href=''><i className="fa-brands fa-discord fa-l pr-5"></i></a>Join Discord</button>
                </div>
                <a href=''><i className="fa-solid fa-arrow-down fa-xl pr-5"></i></a>
            </div>

        </div>
        
    </div>
  )
}

export default Home;