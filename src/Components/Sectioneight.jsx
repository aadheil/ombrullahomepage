import React, { useEffect, useState } from 'react'

function Sectioneight() {
    const[carousalfirst,setcarousalfirst]=useState(true)
    const[carousalsec,setcarousalsec]=useState(false)
    
    

    const chnagecarousal=()=>{
        if(carousalfirst){
            setcarousalfirst(false)
        }
        else{
            setcarousalfirst(true)
        }
        
    }

    setTimeout(chnagecarousal, 1500 );
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
        <div className='flex  mt-24 '>
            <i className="fa-solid fa-square text-blue-600 mt-1"></i><h3 className='ms-3 font-semibold'>OUR CUSTOMERS</h3> <i className="fa-solid fa-square text-blue-600 mt-1 ms-3"></i></div>
            <div className='mt-6'><h2 className='font-semibold' style={{fontSize:'45px'}}>They Trust Us</h2></div>

            <div className='mt-10 mb-20 flex flex-row justify-evenly' style={{width:'70%',height:'200px'}}>
                {carousalfirst?<>
                <div><img src="https://www.ombrulla.com/best-western.webp" alt="" className='mt-4 lg:w-28 w-12 lg:h-28 h-12'  /></div>
                <div><img src="https://www.ombrulla.com/dubai-festival-city.webp" alt="" className='mt-4 lg:w-28 w-12 lg:h-28 h-12'  /></div>
                <div><img src="https://www.ombrulla.com/wild-leaf.webp" alt="" className='mt-4 lg:w-28 w-12 lg:h-28 h-12'  /></div>
                <div><img src="https://www.ombrulla.com/emirates.webp" alt="" className='mt-4 lg:w-28 w-12 lg:h-28 h-12'  /></div>
                <div><img src="https://www.ombrulla.com/burger-king.webp" alt="" className='mt-4 lg:w-28 w-12 lg:h-28 h-12' /></div>
                </>
                :
                <>
                <div><img src="https://www.ombrulla.com/damac.webp" alt="" className='mt-4 lg:w-28 w-12 lg:h-28 h-12' /></div>
                <div><img src="https://www.ombrulla.com/planet-fitness.webp" alt="" className='mt-4 lg:w-28 w-12 lg:h-28 h-12' /></div>
                <div><img src="https://www.ombrulla.com/suja.webp" alt="" className='mt-4 lg:w-28 w-12 lg:h-28 h-12' /></div>
                <div><img src="https://www.ombrulla.com/azelit.webp" alt="" className='mt-4 lg:w-28 w-12 lg:h-28 h-12' /></div>

                </>}

            </div>
    </div>

  )
}

export default Sectioneight