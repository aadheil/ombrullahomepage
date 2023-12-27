import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sectionnine() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center bg-blue-950'>
         <div className='flex mt-5 lg:-ms-80'>
            <i className="fa-solid fa-square text-blue-500 mt-1"></i><h3 className='ms-3 text-white' style={{fontSize:'18px'}}>OUR TESTIMONIALS</h3></div>
        <div className='mt-1'><h3 className='font-semibold text-white' style={{fontSize:'38px'}}>What Customers Say About Us</h3></div>
        <div className='flex justify-center items-center mt-1' style={{width:'65%',height:'500px'}}>
    <Carousel>
    <Carousel.Item>
     <div className='flex flex-column ' style={{width:'100%'}}>
        <div className='bg-white flex flex-col rounded-t' style={{width:'100%',height:'300px'}}>
        <div className='mt-3 ms-2'><i class="fa-solid fa-quote-left fa-xl text-blue-900"></i></div>
        <div className='mt-3 p-2'><p className='text-slate-500'>Ombrulla's AI people tracking solution has impressively enhanced our ability to seamlessly monitor and manage foot traffic. The system's accuracy and real- time insights not only streamline operations but also elevate overall security measures.</p></div>
        </div>
        <div className='bg-slate-200 flex flex-row rounded-b' style={{width:'100%',height:'100px'}}>
          <div className='mt-2 ms-2'><img src="https://www.ombrulla.com/_astro/shipcom.ee1ba5d2_o18LH.webp" alt="" style={{height:'60px',width:'60px',borderRadius:'50%'}} /></div>
          <div className='flex flex-col ms-3 mt-2'>
            <div className='font-semibold'>Quresh Goga</div>
            <div className='text-blue-400'>Shipcom wireless</div>
          </div>
        </div>
     </div>
    </Carousel.Item>

    <Carousel.Item>
     <div className='flex flex-column ' style={{width:'100%'}}>
        <div className='bg-white flex flex-col rounded-t' style={{width:'100%',height:'300px'}}>
        <div className='mt-3 ms-2'><i class="fa-solid fa-quote-left fa-xl text-blue-900"></i></div>
        <div className='mt-3 p-2'><p className='text-slate-500'>ombrulla and Green Palm join forces on an AI visual inspection project for ship assessments, utilizing computer vision to detect damages and anomalies. The project's outcomes and the resulting benefits have exceeded our expectations, leaving us highly satisfied with the collaboration.</p></div>
        </div>
        <div className='bg-slate-200 flex flex-row rounded-b' style={{width:'100%',height:'100px'}}>
          <div className='mt-2 ms-2'><img src="https://www.ombrulla.com/_astro/green-palmes.41a0af47_Z1Mo497.webp" alt="" style={{height:'60px',width:'60px',borderRadius:'50%'}} /></div>
          <div className='flex flex-col ms-3 mt-2'>
            <div className='font-semibold'>Manoj Menon</div>
            <div className='text-blue-400'>Green Palm</div>
          </div>
        </div>
     </div>
    </Carousel.Item>

    <Carousel.Item>
     <div className='flex flex-column ' style={{width:'100%'}}>
        <div className='bg-white flex flex-col rounded-t' style={{width:'100%',height:'300px'}}>
        <div className='mt-3 ms-2'><i class="fa-solid fa-quote-left fa-xl text-blue-900"></i></div>
        <div className='mt-3 p-2'><p className='text-slate-500'>ombrulla demonstrates how AI could quickly extract value from our data and show significant economic benefits. Ombrulla comes highly recommended by us and we look forward to collaborating with them on future initiatives.</p></div>
        </div>
        <div className='bg-slate-200 flex flex-row rounded-b' style={{width:'100%',height:'100px'}}>
          <div className='mt-2 ms-2'><img src="https://www.ombrulla.com/_astro/planet-fitness.2b86950e_Z1XdacQ.webp" alt="" style={{height:'60px',width:'60px',borderRadius:'50%'}} /></div>
          <div className='flex flex-col ms-3 mt-2'>
            <div className='font-semibold'>Joseph</div>
            <div className='text-blue-400'>Planet Fitness</div>
          </div>
        </div>
     </div>
    </Carousel.Item>

    <Carousel.Item>
     <div className='flex flex-column ' style={{width:'100%'}}>
        <div className='bg-white flex flex-col rounded-t' style={{width:'100%',height:'300px'}}>
        <div className='mt-3 ms-2'><i class="fa-solid fa-quote-left fa-xl text-blue-900"></i></div>
        <div className='mt-3 p-2'><p className='text-slate-500'>ombrulla has exceeded our expectations; they are serious and consistent in their job. Ombrulla and their team of programmers have always been available to us. I would suggest this firm to anyone looking for restaurant data analytics solutions.</p></div>
        </div>
        <div className='bg-slate-200 flex flex-row rounded-b' style={{width:'100%',height:'100px'}}>
          <div className='mt-2 ms-2'><img src="https://www.ombrulla.com/_astro/wild-leaf.85d7f76f_Z1vakWD.webp" alt="" style={{height:'60px',width:'60px',borderRadius:'50%'}} /></div>
          <div className='flex flex-col ms-3 mt-2'>
            <div className='font-semibold'>Tony Michael</div>
            <div className='text-blue-400'>CEO, The Cotillion Hotels, New York, USA</div>
          </div>
        </div>
     </div>
    </Carousel.Item>

    <Carousel.Item>
     <div className='flex flex-column ' style={{width:'100%'}}>
        <div className='bg-white flex flex-col rounded-t' style={{width:'100%',height:'300px'}}>
        <div className='mt-3 ms-2'><i class="fa-solid fa-quote-left fa-xl text-blue-900"></i></div>
        <div className='mt-3 p-2'><p className='text-slate-500'>we would like to express our gratitude for the collaboration on the development of our Business Intelligence & Analytics solutions. Ombrulla and its analytics team performed admirably and we are pleased with the solution provided to us.</p></div>
        </div>
        <div className='bg-slate-200 flex flex-row rounded-b' style={{width:'100%',height:'100px'}}>
          <div className='mt-2 ms-2'><img src="https://www.ombrulla.com/_astro/best-western.d33d3fe0_Z2qgqbJ.webp" alt="" style={{height:'60px',width:'60px',borderRadius:'50%'}} /></div>
          <div className='flex flex-col ms-3 mt-2'>
            <div className='font-semibold'>David Thomas</div>
            <div className='text-blue-400'>Managing Director Best Western, Kansas, USA.</div>
          </div>
        </div>
     </div>
    </Carousel.Item>

    <Carousel.Item>
     <div className='flex flex-column ' style={{width:'100%'}}>
        <div className='bg-white flex flex-col rounded-t' style={{width:'100%',height:'300px'}}>
        <div className='mt-3 ms-2'><i class="fa-solid fa-quote-left fa-xl text-blue-900"></i></div>
        <div className='mt-3 p-2'><p className='text-slate-500'>Ombrulla's AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective.</p></div>
        </div>
        <div className='bg-slate-200 flex flex-row rounded-b' style={{width:'100%',height:'100px'}}>
          <div className='mt-2 ms-2'><img src="https://www.ombrulla.com/_astro/terranz-other.fe41f67d_Z1IrlCC.webp" alt="" style={{height:'60px',width:'60px',borderRadius:'50%'}} /></div>
          <div className='flex flex-col ms-3 mt-2'>
            <div className='font-semibold'>James Joseph</div>
            <div className='text-blue-400'>Managing Director, Terranz Dubai, UAE</div>
          </div>
        </div>
     </div>
    </Carousel.Item>

    <Carousel.Item>
     <div className='flex flex-column ' style={{width:'100%'}}>
        <div className='bg-white flex flex-col rounded-t' style={{width:'100%',height:'300px'}}>
        <div className='mt-3 ms-2'><i class="fa-solid fa-quote-left fa-xl text-blue-900"></i></div>
        <div className='mt-3 p-2'><p className='text-slate-500'>We are pleased to express our satisfaction with the collaboration with Ombrulla for the execution of scratch and damage detection in cars. We extend our heartfelt gratitude to Ombrulla for their invaluable support throughout this project.

</p></div>
        </div>
        <div className='bg-slate-200 flex flex-row rounded-b' style={{width:'100%',height:'100px'}}>
          <div className='mt-2 ms-2'><img src="https://www.ombrulla.com/_astro/azelit.c51d4d1e_ZFoIpv.webp" alt="" style={{height:'60px',width:'60px',borderRadius:'50%'}} /></div>
          <div className='flex flex-col ms-3 mt-2'>
            <div className='font-semibold'>Vinod MN</div>
            <div className='text-blue-400'>Managing Director, AZEL IT Solutions</div>
          </div>
        </div>
     </div>
    </Carousel.Item>

    <Carousel.Item>
     <div className='flex flex-column ' style={{width:'100%'}}>
        <div className='bg-white flex flex-col rounded-t' style={{width:'100%',height:'300px'}}>
        <div className='mt-3 ms-2'><i class="fa-solid fa-quote-left fa-xl text-blue-900"></i></div>
        <div className='mt-3 p-2'><p className='text-slate-500'>ombrulla's AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective.

</p></div>
        </div>
        <div className='bg-slate-200 flex flex-row rounded-b' style={{width:'100%',height:'100px'}}>
          <div className='mt-2 ms-2'><img src="https://www.ombrulla.com/_astro/terranz-other.fe41f67d_Z1IrlCC.webp" alt="" style={{height:'60px',width:'60px',borderRadius:'50%'}} /></div>
          <div className='flex flex-col ms-3 mt-2'>
            <div className='font-semibold'>Joseph</div>
            <div className='text-blue-400'>Terranz Dubai, UAE</div>
          </div>
        </div>
     </div>
    </Carousel.Item>
  </Carousel>
  </div>
  </div>
  )
}

export default Sectionnine