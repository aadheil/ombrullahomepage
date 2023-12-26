import React, { useState } from 'react'
import './menubar.css'
function Menubar() {
    const [isMouseHoverServices, setisMouseHoverServices] = useState(false);
    const [isMouseHoverProducts, setisMouseHoverProducts] = useState(false);
    const [isSmallScreen,setisSmallScreen]=useState(false)
   
    const handlesmalscreenbutton=(e)=>{
        e.preventDefault()
        setisSmallScreen(true)
    }

    const handlesmalscreenbuttonClose=(e)=>{
        e.preventDefault()
        setisSmallScreen(false)
    }


  return (
    <>
    <div className='tot flex justify-between'>
            <div className='lg:ms-20 '><img src="https://www.ombrulla.com/logo.svg" alt="" style={{width:'140px',height:'60px'}} /></div>
            <div className='menuItems flex mt-6'>
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
            <div className='icon-for-small-screens flex mt-5 me-5'>
               { !isSmallScreen?<button onClick={e=>handlesmalscreenbutton(e)}><i className="fa-solid fa-bars fa-2x text-blue-700"></i></button>
               :
               <button onClick={e=>handlesmalscreenbuttonClose(e)}><i className="fa-solid fa-xmark fa-2x text-blue-700"></i></button>
               }
            </div>
        </div>

    {/* content to be display on hovering on service , products */}
        {isMouseHoverServices&&<div className=" flex justify-end me-96">
        <div className="modalcontento bg-white shadow text-black p-2 flex flex-col">
       <p className='mt-2 mb-2 font-bold'> AI Visual Inspection</p>
       <hr />
       <p className='mt-2 mb-2 font-bold'> AI InfraStructure Inspection </p>
       <hr />
       <p className='mt-2 mb-2 font-bold'> AI People Tracking </p>
       <hr />
       <p className='mt-2 mb-2 font-bold'> AI Data Analytics </p>
        </div>
      </div>}

      {isMouseHoverProducts&&<div className=" flex justify-end me-80">
        <div className="modalcontente bg-white shadow text-black p-2 flex flex-col">
       <p className='mt-2 mb-2 font-bold'> Asset Performance Management</p>
       
       
        </div>
      </div>}

{/* Menubar for small screens */}
    {isSmallScreen&&<div className='smalScreenMenubar bg-white shadow' style={{width:'75%',height:'100%',zIndex:'10'}}>
        <div><h1>hello</h1></div>
    </div>}

    </>
  )
}

export default Menubar