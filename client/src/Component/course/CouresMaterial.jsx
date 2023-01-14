import React from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import { Link } from 'react-router-dom';


const contents = [
    {
        icon: <VideocamIcon />,
        text: "40+ Hours Video"
    },
    {
        icon:  <VideocamIcon />,
        text: "91 Students"
    },
    {
        icon:  <VideocamIcon />,
        text: "Mentor Support"
    }, 
    {
        icon:  <VideocamIcon />,
        text: "14 Real-Life Projects"
    }, 
    {
        icon:  <VideocamIcon />,
        text: "Code Review & Feedback"
    }, 
    {
        icon:  <VideocamIcon />,
        text: "Beginner to Pro"
    },
     {
        icon:  <VideocamIcon />,
        text: "Quizzes & Assignments"
    }, 
    {
        icon:  <VideocamIcon />,
        text: "Professional Certificate"
    }, 
    {
        icon:  <VideocamIcon />,
        text: "Duration 4 Months"
    }, 
    {
        icon:  <VideocamIcon />,
        text: "2 Years of Content Access"
    }

]
const CouresMaterial = (props) => {
    
    return (
        <div className='sticky__sidebar' >
            <div className='sticky__sidebar__wrapper'>
                <h3>এই কোর্সের ভেতরে যা যা রয়েছে</h3>
                <div className='sticky__syllabus__content'>
                            {contents.map((content, ind) => {
                                return (
                                    <div key={ind} className="sticky__content_div" >
                                        <span className='sticky__icon' style={{color: "#F23460"}}>{content.icon}</span>
                                        <span className='sticky__content'>{content.text}</span>
                                    </div>
                                )
                            })}
                </div>
                <div className='coures__pricing'>
                    <div>
                    <span>কোর্সের মূল্য</span>
                    <span className='course__amount'>৳ ৬,০০০</span>
                    
                    </div>
                    <hr style={{border: "1px solid #5C2CC5"}} />
                    <div>
                    <span>প্রথম ইন্সটলমেন্ট</span>
                    <span className='course__amount_installment' style={{fontWeight: "700 !important"}}>৳ ৪,০০০</span>
                    </div>


                </div>
                <div className='sticky__btn row'>
                    <span>
                    <Link to='' class="cmn-btn" style={{ textDecoration: "none", backgroundColor: "#F23460", color: "#ffffff", border: "2px solid #F23460"}}>এখনই ভর্তি হোন</Link>
                    </span>
                    <span >
                    <Link to='' class="cmn-btn" style={{ textDecoration: "none", backgroundColor: "transparent",border: "2px solid #F23460", color: "#ffffff" }} role={"button"}>ডাউনলোড সিলেবাস</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CouresMaterial;