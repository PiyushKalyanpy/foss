import React from 'react';
import './HomePage.css';

function HomePage() {
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

            <div className='mt-40'>
                <h1>TechX Hackathon</h1>
                <h2 className='mb-10'>Innovate for good cause</h2>
                <a href=''><i className="fa-solid fa-arrow-down fa-xl pr-5"></i></a>
            </div>

        </div>
        
    </div>
  )
}

export default HomePage