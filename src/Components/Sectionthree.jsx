import React from 'react'
import './sectionthree.css'
function Sectionthree() {
  return (
    <div className='sectionthree flex lg:flex-row flex-col lg:h-screen h-full' style={{width:'100%'}}>
        <div className='flex-col lg:ms-24 ms-5 mt-14'>
        <div className='flex '>
            <i className="fa-solid fa-square text-blue-600 mt-1"></i><h3 className='ms-3 font-semibold'>AI INFRASTRUCTURE INSPECTION</h3></div>
        
        <div className='mt-5'><h3 style={{fontSize:'50px'}}>Enhances Efficiency, Safety, and Cost-Effectiveness</h3></div>
        <div className='mt-4'>
            <ul className='square-list' style={{listStyleType:'disc',fontSize:'18px'}}>
            <li><span className='font-semibold'>Cutting-Edge Solution:</span> Ombrulla leverages AI, drones, and IoT technologies to <br /> transform infrastructure inspection.</li>
            <li className='mt-3'><span className='font-semibold'>Real-Time Insights:</span> Real-time insights enhance inspection efficiency, safety, and <br /> reduce conventional challenges.</li>
            <li className='mt-3'><span className='font-semibold'>Longevity and Cost-Effectiveness:</span> Ombrulla ensures the longevity and safety of <br /> critical infrastructure while offering a cost-effective solution.</li>
            <li className='mt-3'><span className='font-semibold'>Responsive Maintenance:</span>Enhances infrastructure management, increasing <br /> reliability and responsiveness, and reducing risks.</li>

            </ul></div>
            <div className='flex flex-row mt-5'>
            <div className=''><button className='bg-blue-600 text-white font-semibold hover:bg-transparent hover:text-blue-600 hover:border border-solid border-black' style={{borderRadius:'32px',height:'55px',width:'150px'}}>Schedule Call</button></div>
            <div className=' ml-10'><button className='text-black hover:text-blue-600 font-semibold' style={{borderRadius:'32px',height:'55px',width:'100%'}}>Read More<i class="fa-solid fa-arrow-right-long"></i></button></div>

            </div>
        </div>



        <div className='mt-14'>
            <div className='lg:me-20 lg:mt-8 mt-24 me-3 '><img src="https://www.ombrulla.com/_astro/ai-infrastructure-inspection.c8f30cbf_ZEO7he.webp" alt="" style={{width:'800px',height:'500px'}} className='rounded'/></div>
        </div>
    </div>
  )
}

export default Sectionthree