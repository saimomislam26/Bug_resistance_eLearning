import React from 'react'
import { Link } from 'react-router-dom'

const BottomSticky = () => {
  return (
    <div className="sticky__bottom">
                 <div className='coures__pricing priceing' >
                 মূল্য:<span style={{display: "contents"}} >৳ ৬,০০০</span>
                </div>
                    <div className="coures__pricing admission_now">
                    <Link to='' role={"button"}><span>এখনই ভর্তি হোন</span></Link>
                    </div>
                    <div className="coures__pricing download__syllabus">
                    <Link to='' role={"button"}> <span>ডাউনলোড সিলেবাস</span></Link>
                    </div>
                </div> 
  )
}

export default BottomSticky