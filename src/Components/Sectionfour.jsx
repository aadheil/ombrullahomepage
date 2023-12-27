import React from 'react'
import './sectionthree.css'
function Sectionfour() {
  return (
    <div className=' flex lg:flex-row flex-col lg:h-screen h-full' style={{width:'100%'}}>

      <div className='mt-24'>
            <div className='lg:ms-24  mt-14 '><img src="https://www.ombrulla.com/_astro/ai-visual-inspection.7625d432_2nYhqo.webp" alt="" style={{width:'800px',height:'500px'}} className='rounded'/></div>
        </div>

        <div className='flex-col lg:ms-32 ms-5 lg:mt-24 mt-24 me-2 lg:me-12'>
        <div className='flex '>
            <i className="fa-solid fa-square text-blue-600 mt-1"></i><h3 className='ms-3 font-semibold'>AI VISUAL INSPECTION</h3></div>
        
        <div className='mt-5'><h3 style={{fontSize:'50px'}}>Improving Quality with Greater Precision</h3></div>
        <div className='mt-4'>
            <ul className='square-list' style={{listStyleType:'disc',fontSize:'18px'}}>
            <li><span className='font-semibold'>AI Defect Detection:</span> Utilizes computer vision and machine learning to identify <br /> and recognise defects during visual inspections autonomously.</li>
            <li className='mt-3'><span className='font-semibold'>Eagle-Eyed Vision:</span> AI algorithms can identify even the most subtle defects,<br /> including microscopic cracks, colour variations, and misalignments.</li>
            <li className='mt-3'><span className='font-semibold'>Informed Decision-Making:</span> Valuable data is extracted from images and videos,<br />empowering users to make informed, data-driven decisions.</li>
            <li className='mt-3'><span className='font-semibold'>Real-Time Insights:</span>AI defect detection provides immediate feedback, enabling<br /> proactive interventions and adjustments to production processes.</li>

            </ul></div>
            <div className='flex flex-row mt-5'>
            <div className=''><button className='bg-blue-600 text-white font-semibold hover:bg-transparent hover:text-blue-600 hover:border border-solid border-black' style={{borderRadius:'32px',height:'55px',width:'150px'}}>Schedule Call</button></div>
            <div className=' ml-10'><button className='text-black hover:text-blue-600 font-semibold' style={{borderRadius:'32px',height:'55px',width:'100%'}}>Read More<i class="fa-solid fa-arrow-right-long"></i></button></div>

            </div>
        </div>



       
    </div>
  )
}

export default Sectionfour
