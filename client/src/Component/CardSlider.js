import React from 'react'
import Slider from "react-slick";
import StudentBig from './StudentBig';
import StudentSay from './StudentSay';

const CardSlider = () => {
    var settings = {
        className:"auto_slider",
        dotsClass:"slick-dots",
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

        {/* <div style={{dispaly:"flex",width:"100vw",justifyContent:"center",alignItems:"center",border:"2px solid red"}}> */}
        <div style={{ maxHeight:"80vh",width:"85%",maxWidth:"1300px",marginBottom:"40px" }}>
            {/* <StudentBig/> */}
                <Slider  {...settings} >
                    {/* <div className='slider_body' style={{border:"2px solid red"}}> */}
                        <StudentSay />
                    {/* </div> */}
                    {/* <div className='slider_body'  > */}
                        <StudentSay />
                    {/* </div> */}
                    {/* <div className='slider_body'  > */}
                        <StudentSay />
                    {/* </div> */}
                </Slider>
            {/* </div> */}
        </div>
           

        </>
    )
}

export default CardSlider