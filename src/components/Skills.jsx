import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactLogo from '../assets/react.png'
import Java from '../assets/java.png'
import Python from '../assets/python.jpg'
import C from '../assets/c.png'
import Node from '../assets/node.png'

const Skills = () => {
	return (
	  <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
		{/* Container */}
		<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
			<div>
				<p className='text-4xl font-bold inline border-b-4 border-yellow-600 '>Skills</p>
				<p className='py-4'> These are the technologies I've worked with</p>
			</div>
  
			<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
				<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
					<p className='my-4'>HTML</p>
				</div>
				<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
					<p className='my-4'>CSS</p>
				</div>
				<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
					<p className='my-4'>JAVASCRIPT</p>
				</div>
				<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<img className='w-20 mx-auto' src={ReactLogo} alt="HTML icon" />
					<p className='my-4'>REACT</p>
				</div>
				<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<img className='w-20 mx-auto' src={Java} alt="HTML icon" />
					<p className='my-4'>JAVA</p>
				</div>
				<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<img className='w-20 mx-auto' src={Node} alt="HTML icon" />
					<p className='my-4'>NODE JS</p>
				</div>
				<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<img className='w-20 mx-auto' src={C} alt="HTML icon" />
					<p className='my-4'>C</p>
				</div>
				<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<img className='w-20 mx-auto' src={Python} alt="HTML icon" />
					<p className='my-4'>Python</p>
				</div>
			</div>
		</div>
	  </div>
	);
  };


export default Skills