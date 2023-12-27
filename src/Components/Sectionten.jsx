import React from 'react'
import './menubar.css'
function Sectionten() {
  return (
    <div className='sectionten flex flex-col h-full w-full justify-center items-center'>
        <div className='flex  mt-24 '>
            <i className="fa-solid fa-square text-blue-600 mt-1"></i><p className='ms-3 font-semibold'>BRANDS WE WORK WITH</p> <i className="fa-solid fa-square text-blue-600 mt-1 ms-3"></i></div>
            <div className='mt-6'><h2 className='font-semibold' style={{fontSize:'45px'}}>Trusted by Thousands of Businesses</h2></div>
            <div className='flex justify-evenly mt-5 w-full h-full' >
                <div >
                    <img src="https://www.ombrulla.com/_astro/unv.85d8fa6f_1oWCsP.webp" style={{width:'130px',height:'130px'}} alt="" />
                </div>
                <div><img src="https://www.ombrulla.com/_astro/dahua.d9dec1a0_1788pM.webp" style={{width:'130px',height:'130px'}} alt="" /></div>
                <div className=''><img src="https://www.ombrulla.com/_astro/nvidia.8ba96db4_Z1BLchq.webp" style={{width:'130px',height:'130px'}} alt="" /></div>

            </div>

            <div className='flex justify-evenly mt-14 w-full h-full' >
                <div >
                    <img src="https://www.ombrulla.com/_astro/amazon.8aa611f6_Zkubpr.webp" style={{width:'130px',height:'130px'}} alt="" />
                </div>
                <div><img src="https://www.ombrulla.com/_astro/hikvision.2a55c6c2_Z1UqjJV.webp" style={{width:'130px',height:'130px'}} alt="" /></div>
                <div className=''><img src="https://www.ombrulla.com/_astro/azure.3a96288f_ZDjkY6.webp" style={{width:'130px',height:'130px'}} alt="" /></div>

            </div>
    </div>
  )
}

export default Sectionten