import React, { useState } from 'react'
import './menubar.css'
function Menubar() {
    const [isMouseHoverServices, setisMouseHoverServices] = useState(false);
    const [isMouseHoverProducts, setisMouseHoverProducts] = useState(false);
    const [isSmallScreen,setisSmallScreen]=useState(false)
    const[isServiceOpen,setisServiceOpen]=useState(false)
    const[isproductopen,setisproductopen]=useState(false)
    const handlesmalscreenbutton=(e)=>{
        e.preventDefault()
        setisSmallScreen(true)
    }

    const handlesmalscreenbuttonClose=(e)=>{
        e.preventDefault()
        setisSmallScreen(false)
    }

const handleplusForServices=()=>{
    setisServiceOpen(true)
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
            <div className='icon-for-small-screens flex mt-2 me-5'>
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
    {isSmallScreen&&<div className='smalScreenMenubar bg-white shadow' style={{width:'65%',height:'100%',zIndex:'10'}}>
        <div className='mt-8 ms-12 mb-5 hover:text-blue-600'><a>Home</a></div>
        <hr />
        <div className='flex flex-row mt-8 ms-12 mb-5'>
        <div className='hover:text-blue-600'><a >Services</a></div>
        {!isServiceOpen?<div className='bg-blue-600 ms-10 text-center' style={{borderRadius:'50%',height:'30px',width:'30px'}}><i className="fa-solid fa-plus text-white" onClick={handleplusForServices}></i></div>
        :
        <div className='bg-blue-600 ms-10 text-center' style={{borderRadius:'50%',height:'30px',width:'30px'}}><i className="fa-solid fa-minus text-white" onClick={e=>setisServiceOpen(false)}></i></div>
        }

        </div>
       {isServiceOpen&& <>
            <div className='mt-8 ms-16 mb-5 hover:text-blue-600'><a >AI Visual Inspection</a></div>
            <hr />
            <div className='mt-8 ms-16 mb-5 hover:text-blue-600'><a >AI Infrastructure Inspection</a></div>
            <hr />
            <div className='mt-8 ms-16 mb-5 hover:text-blue-600'><a >AI People Tracking</a></div>
            <hr />
            <div className='mt-8 ms-16 mb-5 hover:text-blue-600'><a >AI Data Analytics</a></div>
            <hr />
        </>}
        
        {/* products */}
        <div className='flex flex-row mt-12 ms-12 mb-5'>
        <div className='hover:text-blue-600'><a >Product</a></div>
        {!isproductopen?<div className='bg-blue-600 ms-10 text-center' style={{borderRadius:'50%',height:'30px',width:'30px'}}><i className="fa-solid fa-plus text-white" onClick={e=>setisproductopen(true)}></i></div>
        :
        <div className='bg-blue-600 ms-10 text-center' style={{borderRadius:'50%',height:'30px',width:'30px'}}><i className="fa-solid fa-minus text-white" onClick={e=>setisproductopen(false)}></i></div>
        }

        </div>
       {isproductopen&& <>
            <div className='mt-8 ms-16 mb-5 hover:text-blue-600'><a>Asset Performance Management</a></div>
            
            
        </>}
        <hr />
        <div className='mt-8 ms-12 mb-5 hover:text-blue-600'><a>About</a></div>
        <hr />
        <div className='mt-8 ms-12 mb-5 hover:text-blue-600'><a >Blog</a></div>
        <hr />
        <div className='mt-8 ms-12 mb-5 hover:text-blue-600'><a >Contact</a></div>



    </div>}

    </>
  )
}

export default Menubar