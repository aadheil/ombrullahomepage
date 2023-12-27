import React from 'react'
import './sectionthree.css'
function Sectionfive() {
  return (
    <div className='sectionthree flex lg:flex-row flex-col lg:h-screen h-full' style={{width:'100%'}}>
        <div className='flex-col lg:ms-24 ms-5 mt-20'>
        <div className='flex '>
            <i className="fa-solid fa-square text-blue-600 mt-1"></i><h3 className='ms-3 font-semibold'>AI DATA ANALYTICS</h3></div>
        
        <div className='mt-5'><h3 style={{fontSize:'50px'}}>Empowers Businesses to Make Insightful Decisions</h3></div>
        <div className='mt-4'>
            <ul className='square-list' style={{listStyleType:'disc',fontSize:'18px'}}>
            <li><span className='font-semibold'>Actionable Insights:</span>AI data analysis enhances decisions, personalizes customer <br /> experiences and improve operations.</li>
            <li className='mt-3'><span className='font-semibold'>Increased Customer Loyalty:</span> AI predictive analytics for personalized <br /> recommendations & increased customer loyalty.</li>
            <li className='mt-3'><span className='font-semibold'>Quality Assurance:</span> AI analytics identifies and mitigates potential issues, ensuring<br />the quality and reliability of products and services.
           </li>
            <li className='mt-3'><span className='font-semibold'>Efficiency and Responsiveness:</span>Customers benefit from increased efficiency, <br /> improved product quality, and more responsive interactions with businesses.</li>

            </ul></div>
            <div className='flex flex-row mt-5'>
            <div className=''><button className='bg-blue-600 text-white font-semibold hover:bg-transparent hover:text-blue-600 hover:border border-solid border-black' style={{borderRadius:'32px',height:'55px',width:'150px'}}>Schedule Call</button></div>
            <div className=' ml-10'><button className='text-black hover:text-blue-600 font-semibold' style={{borderRadius:'32px',height:'55px',width:'100%'}}>Read More<i class="fa-solid fa-arrow-right-long"></i></button></div>

            </div>
        </div>



        <div className='mt-20'>
            <div className='lg:me-20 lg:mt-8 mt-24 me-3 '><img src="https://www.ombrulla.com/_astro/ai-data-analytics.ef51a904_1g36GR.webp" alt="" style={{width:'800px',height:'500px'}} className='rounded'/></div>
        </div>
    </div>
  )
}

export default Sectionfive