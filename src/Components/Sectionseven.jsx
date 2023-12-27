import React from 'react'

function Sectionseven() {
  return (
    <div className='flex lg:flex-row flex-col h-full w-full justify-evenly mb-10'>
        <div className='mt-24 flex flex-col lg:ms-8 ms-3 mb-10'>
        <div className='flex '>
            <i className="fa-solid fa-square text-blue-600 mt-1"></i><p className='ms-3 font-semibold'>PRODUCTS</p></div>
            <div className='mt-5'><h1 className='font-semibold' style={{fontSize:'45px'}}>Our HR Tools</h1></div>
            <div className='mt-6'><p className='text-slate-500'>Our job grading and evaluation tool, combined with the <br />compensation management tool, is a highly effective SaaS- <br />based solution. It greatly assists HR consultants and <br /> managers in carrying out their roles with efficiency and <br />precision.</p></div>
        </div>
        <div className='mt-24 bg-slate-100 flex flex-col rounded items-center h-full' style={{width:'410px'}}>
            <div className='mt-8'><h2 className='' style={{fontSize:'25px'}}>Job Grading and Evaluation</h2></div>
            <div><p className='mt-5 text-slate-500'>Job evaluation assesses and ranks job roles in <br />an organization based on responsibilities and <br /> skills, often for compensation and structuring <br />purposes.</p></div>
            <div className='mt-12'><img src="https://www.ombrulla.com/_astro/job-profiler.bfa7dd2f_Z10oyMd.webp" alt="" style={{width:'220px'}}/></div>
            <div className='mb-12 mt-10'><button className='text-black hover:text-blue-600 '>Free Trial<i class="fa-solid fa-arrow-right-long  text-blue-600"></i></button></div>
        </div>

        <div className='mt-24 bg-slate-100 flex flex-col rounded items-center h-full' style={{width:'410px'}}>
            <div className='mt-8'><h2 className='' style={{fontSize:'25px'}}>Job Grading and Evaluation</h2></div>
            <div><p className='mt-5 text-slate-500'>Job evaluation assesses and ranks job roles in <br />an organization based on responsibilities and <br /> skills, often for compensation and structuring <br />purposes.</p></div>
            <div className='mt-12'><img src="https://www.ombrulla.com/_astro/Comp360.5e1e772f_23KQc0.webp" alt="" style={{width:'220px'}}/></div>
            <div className='mb-12 mt-10'><button className='text-black hover:text-blue-600 '>Book For Demo<i class="fa-solid fa-arrow-right-long text-blue-600"></i></button></div>
        </div>
    </div>
  )
}

export default Sectionseven