import React, { useState } from 'react'
function Menubar() {
    const [isMouseHoverServices, setisMouseHoverServices] = useState(false);
    const [isMouseHoverProducts, setisMouseHoverProducts] = useState(false);

  return (
    <>
    <div className='flex justify-between'>
            <div className='ms-20 '><img src="https://www.ombrulla.com/logo.svg" alt="" style={{width:'140px',height:'60px'}} /></div>
            <div className='flex mt-6 '>
                <div className='font-bold hover:text-blue-700'>Home</div>
                
                <div className='services ms-8 font-bold  hover:text-blue-700'
                 onMouseEnter={() => setisMouseHoverServices(true)}
                 onMouseLeave={() => setisMouseHoverServices(false)}> Services<i className="fa-solid fa-chevron-down ms-1" ></i>
                    </div>

                <div className='products ms-8 font-bold hover:text-blue-700'
                 onMouseEnter={() => setisMouseHoverProducts(true)}
                 onMouseLeave={() => setisMouseHoverProducts(false)}>
                    Product<i className="fa-solid fa-chevron-down ms-1"></i></div>
                <div className='ms-8 font-bold hover:text-blue-700'>About</div>
                <div className='ms-8 font-bold hover:text-blue-700'>Blog</div>
                <div className='ms-8 me-32 font-bold hover:text-blue-700'>Contact</div>
            </div>
        </div>

        {isMouseHoverServices&&<div className="flex justify-end p-4 me-96">
        <div className="bg-white shadow text-black p-2 flex flex-col">
       <p className='mt-2 mb-2 font-bold'> AI Visual Inspection</p>
       <hr />
       <p className='mt-2 mb-2 font-bold'> AI InfraStructure Inspection </p>
       <hr />
       <p className='mt-2 mb-2 font-bold'> AI People Tracking </p>
       <hr />
       <p className='mt-2 mb-2 font-bold'> AI Data Analytics </p>
        </div>
      </div>}

      {isMouseHoverProducts&&<div className="flex justify-end p-4 me-80">
        <div className="bg-white shadow text-black p-2 flex flex-col">
       <p className='mt-2 mb-2 font-bold'> Asset Performance Management</p>
       
       
        </div>
      </div>}


    </>
  )
}

export default Menubar