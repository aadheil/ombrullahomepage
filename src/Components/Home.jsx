import React from 'react'
import Menubar from './Menubar'
import './menubar.css'
import Sectiontwo from './Sectiontwo'
import Sectionthree from './Sectionthree'
import Sectionfour from './Sectionfour'
import Sectionfive from './Sectionfive'
import Sectionsixpetran from './Sectionsixpetran'
import Sectionseven from './Sectionseven'
import Sectioneight from './Sectioneight'
import Sectionnine from './Sectionnine'
import Sectionten from './Sectionten'
import Sectioneleven from './Sectioneleven'
import Footer from './Footer'
function Home() {
  return (
    <>
    <div className='background-part'>
        <Menubar/>
        <div className='containerr w-full flex ' style={{height:'100%'}}>
        <div className="flex flex-col lg:flex-row w-full lg:ms-20 ms-5 mt-10">
      {/* First Div */}
      <div className="flex-1">
        <div className='mt-20' style={{width:'52%'}}><h2 className="text-black font-bold leading-tight" style={{fontSize:'60px'}}>Mannual Inspection is <span className='font-semibold text-blue-700'>Slow &amp; Error- Prone</span></h2></div>
        <div><h2 className="text-slate-400 mt-5 text-lg">AI visual inspection, powered by computer vision, revolutionises the inspection process in manufacturing, enhancing precision and cost-effectiveness, all the while maintaining product excellence.</h2></div>
        <div className='flex flex-row mt-9'>
            <div><button className='bg-blue-600 text-white font-semibold hover:bg-transparent hover:text-blue-600 hover:border border-solid border-black' style={{borderRadius:'32px',height:'55px',width:'150px'}}>Schedule Call</button></div>
            <div className='ml-10' ><button className=' bg-blue-600 text-white font-semibold hover:bg-transparent hover:text-blue-600' style={{borderRadius:'32px',height:'55px',width:'55px'}}><i class="fa-solid fa-play fa-xl"></i></button></div>
            <div className='watchvedio ml-10'><button className='text-black hover:text-blue-600 font-semibold' style={{borderRadius:'32px',height:'55px',width:'100%'}}>Watch Vedio</button></div>

        </div>


      </div>

      {/* Second Div */}
      <div className="secdiv flex-1">
       <img src="https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp" alt="" style={{height:'480px',width:'580px',borderRadius:'67% 70% 86% 71%'}}/>
      </div>
    </div>
        </div>

        
    </div>
    <Sectiontwo/>
    <Sectionthree/>
    <Sectionfour/>
    <Sectionfive/>
    <Sectionsixpetran/>
    <Sectionseven/>
    <Sectioneight/>
    <Sectionnine/>
    <Sectionten/>
    <Sectioneleven/>
    <Footer/>
    </>
  )
}

export default Home