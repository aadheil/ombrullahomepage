import React from 'react'

function Footer() {
  return (
    <div className='flex lg:flex-row flex-col w-full h-full bg-blue-950 mt-12 text-white justify-evenly'>
        <div className='part-1 flex flex-col mt-28  lg:mb-64  lg:ms-0 ms-3'>
           <div><h4 className='font-semibold'>About Us</h4></div>
           <div className='mt-5'><p>Ombrulla is an AI-driven company <br />specializing in extracting insights from <br />diverse data sources, including photos,<br /> videos, and data lakes. Our tailored <br />solutions help businesses make data- <br />driven decisions and improve their <br />bottom line through automation and <br />AI-powered analysis.</p></div>
           <div className='flex flex-row mt-5'>
            <i className="fa-brands fa-facebook me-3 fa-xl"></i>
            <i className="fa-brands fa-instagram me-3 fa-xl"></i>
            <i className="fa-brands fa-twitter me-3 fa-xl"></i>
            <i className="fa-brands fa-linkedin me-3 fa-xl"></i>
            <i className="fa-brands fa-youtube fa-xl"></i>
           </div>
        </div>

        <div className='part-2 flex-flex-col mt-28 lg:ms-0 ms-3'>
            <div>
             <h4 className='font-semibold'>Our Services</h4>
            </div>
            <div className='mt-4'><a>AI Infrastructure Inspection</a></div>
            <div className='mt-4'><a>AI Infrastructure Inspection</a></div>
            <div className='mt-4'><a>AI Infrastructure Inspection</a></div>
            <div className='mt-4'><a>AI Infrastructure Inspection</a></div>

        </div>

        <div className='part-3 flex-flex-col mt-28 lg:ms-0 ms-3'>
            <div>
             <h4 className='font-semibold'>Our Solutions</h4>
            </div>
            <div className='mt-4'><a>Asset Performance Management</a></div>
            <div className='mt-4'><a>Job Grading & Evaluation</a></div>
            <div className='mt-4'><a>Compensation Management</a></div>

        </div>

        <div className='part-4 flex-flex-col mt-28 lg:ms-0 ms-3'>
            <div>
             <h4 className='font-semibold'>Reach Us</h4>
            </div>
            <div className='mt-4'><p>United Kingdom, 53 Denton close<br />Redhill, Surrey, RH1 5LB<br />+44 787 999 3892</p></div>
            <div className='mt-4'><p>Germany, Schützenstraße 51A<br />Lübeck, 23558<br />+49 179 512 5812</p></div>
            <div className='mt-4'><p>India, No. 154/20, Royal Space<br />Third Floor TI, HSR Layout,<br />Bangalore, Karnataka<br />560102<br />+91 85900 56435</p></div>

        </div>

    </div>
  )
}

export default Footer