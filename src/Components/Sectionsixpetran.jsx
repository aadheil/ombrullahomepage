import React from 'react'

function Sectionsixpetran() {
  return (
    <>
    <div  className='bg-blue-600 flex lg:flex-row flex-col h-full ' style={{width:'100%'}}>
        
        <div className='containerr w-full flex mt-24 mb-24' style={{height:'100%'}}>
        <div className="flex flex-col lg:flex-row w-full lg:ms-20 ms-5 mt-3">
      {/* First Div */}
      <div className="flex-1">
      
      <div><img src="https://www.ombrulla.com/_astro/petran-logo.99970d82_1t8FzR.webp" alt="" style={{width:'100px'}}/></div>
      <div className='text-white font-semibold mt-2'>PErformance -TRacking -ANalytics</div>
      <div><h3 className='font-semibold text-white ' style={{fontSize:'40px '}}>AI & IoT Enabled <br />Asset Performance Management</h3></div>
        <div><h2 className="text-white mt-5 text-lg">Petran offers an Asset Performance Management (APM) system that harnesses <br /> the power of artificial intelligence and the Internet of Things (IoT) to empower <br />data-driven decision-making and enable proactive maintenance strategies.</h2></div>
        <div className='flex flex-row mt-9'>
            <div><button className=' text-white font-semibold hover:text-black border border-solid border-white' style={{borderRadius:'32px',height:'55px',width:'150px'}}>Schedule Call</button></div>
            <div className='ml-10' ><button className=' text-white font-semibold  border border-solid border-white' style={{borderRadius:'32px',height:'55px',width:'55px'}}><i class="fa-solid fa-play fa-xl"></i></button></div>
            <div className='watchvedio ml-10'><button className='text-white hover:text-black font-semibold' style={{borderRadius:'32px',height:'55px',width:'100%'}}>Watch Vedio</button></div>

        </div>


      </div>

      {/* Second Div */}
      <div className="secdiv flex-1">
       <img src="https://www.ombrulla.com/_astro/asset-performance-management-software.82e2a11d_29kMe4.webp" alt="" style={{height:'400px',width:'600px'}}/>
      </div>
    </div>
        </div>

        
    </div>
    
    </>
  )
}

export default Sectionsixpetran