import React from 'react'
import Slider from "react-slick";
import StudentBig from './StudentBig';
import StudentSay from './StudentSay';

const CardSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };
    return (
        <>

        
            <div style={{ minHeight: '60vh',maxHeight:"80vh",marginLeft:"40px" }}>
            {/* <StudentBig/> */}
                <Slider {...settings}>
                    <div className='student_card' style={{ marginRight: "30px" }}>
                        <StudentSay />
                    </div>
                    <div className='student_card' style={{ marginRight: "30px" }}>
                        <StudentSay />
                    </div>
                    <div className='student_card' style={{ marginRight: "30px" }}>
                        <StudentSay />
                    </div>
                </Slider>
            </div>

        </>
    )
}

export default CardSlider