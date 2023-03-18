import React from 'react';
import './About.css';

function About() {
  return (
    <div>
      <h1 className='mb-20' style={{fontSize: "35px"}} >ABOUT US</h1>
      
      <div className='flex justify-between border-2 border-current about'>
          <div className=' border-2 border-current images'>
            <img className='under' src='https://media.istockphoto.com/id/1397345519/photo/friendly-alien-making-a-heart-hand-gesture.jpg?b=1&s=170667a&w=0&k=20&c=nM7daCh9Zu5QFGS-5GT3_KTjFtfE3Cq7-QLVmLAWmT4='></img>
            <img className='over' src='https://media.istockphoto.com/id/1397345519/photo/friendly-alien-making-a-heart-hand-gesture.jpg?b=1&s=170667a&w=0&k=20&c=nM7daCh9Zu5QFGS-5GT3_KTjFtfE3Cq7-QLVmLAWmT4='></img>          
          </div>

          <div className='border-2 border-current about-description'>
            <p className='text-left mb-10'>
              We are a dynamic team of technology enthusiasts, committed to providing a platform for innovation and collaboration. 
              Our hackathon brings together individuals from diverse backgrounds, united by a passion for technology and a drive to make a 
              positive impact on the world.
            </p>
            <p className='text-left'>
              At Tech X Hackathon, we believe that everyone has the potential to create innovative solutions to real-world problems. 
              Our goal is to provide a supportive and inclusive environment that encourages creativity, experimentation, and learning.
              We strive to make our hackathon accessible to individuals of all skill levels, from beginners to experts, and we provide 
              resources and mentorship to help participants develop their ideas and skills.
            </p>
          </div>
      </div>
    </div>
  )
}

export default About