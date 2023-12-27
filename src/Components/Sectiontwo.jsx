import React from 'react'
import './sectiontwo.css'
function Sectiontwo() {
  return (
    <div className='flex justify-center items-center' style={{width:'100%',height:'100vh'}}>
        <div className='backgroundsectwo bg-slate-400' style={{width:'90%',height:'80%',borderRadius:'3%'}}>
            <div className='flex flex-col justify-center lg:ms-80 ms-5' style={{height:'100%',width:'100%'}}>
                <div className='flex'><i className="fa-solid fa-square text-blue-600 mt-1"></i><h3 className='ms-3 font-semibold'>The Best AI Service Provider</h3></div>
                <div className='mt-5' style={{fontSize:'50px'}}><h1 className='font-semibold'>Crafting Tomorrow's World with </h1><h1 className='font-semibold text-blue-600'>AI Excellence</h1></div>
                <div className='mt-4'><p className='text-slate-500'>The majority of customers lack data-driven insights and automation. Using AI, Ombrulla assist <br /> clients in extracting data from diverse sources such as photos, videos, and data lakes, which <br /> can assist businesses in making data-driven insights and improving their bottom line.</p></div>
                <div className='mt-4 flex flex-row'>
                <div className='' ><button className=' bg-blue-600 text-white font-semibold hover:bg-transparent hover:text-blue-600' style={{borderRadius:'32px',height:'55px',width:'55px'}}><i class="fa-solid fa-play fa-xl"></i></button></div>
                <div className=' ml-10'><button className='text-black hover:text-blue-600 font-semibold' style={{borderRadius:'32px',height:'55px',width:'100%'}}>Watch Corporate Vedio</button></div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Sectiontwo