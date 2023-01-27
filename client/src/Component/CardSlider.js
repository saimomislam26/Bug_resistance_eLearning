import React from 'react'
import Slider from "react-slick";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import student from '../images/student.png'
import invertedcomma from '../images/invertedcomma.png'
import xin from '../images/Xin Akib Siddiquee.jpg'
import saad from '../images/Saad Chowdhury.jpg'
import nafiz from '../images/Nafiz Khan.jpg'
import latif from '../images/Latifur Rahman.jpg'
import hijab from '../images/Hijab.jpg'

import { Avatar } from '@mui/material';

const CardSlider = () => {
    var settings = {
        className: "auto_slider",
        dotsClass: "slick-dots",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendDots: dots => (

            <ul style={{ margin: "0 0 -30px 0" }}> {dots} </ul>
        ),
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
            <div style={{ maxHeight: "80vh", maxWidth: "1300px", marginTop: "60px", width: "100%", }}>
                <Slider  {...settings} >
                    <Card className='student_cards' sx={{ backgroundColor: "#FFFFF", border: "2px solid whitesmoke" }}>
                        <CardContent>
                            <Typography sx={{ color: '#343b6d', fontSize: '20px', lineHeight: '1.6' }} color="text.secondary" gutterBottom>
                            আমার বাগ রেজিস্ট্যান্সের SQA লাইভ কোর্সের জার্নি সত্যি অসাধারণ । কারণ তাদের যে কোনো সময় যে কোনো প্রব্লেমে আমাকে সাপোর্ট করেছে। প্রাক্টিকালি তারা যে প্রজেক্ট গুলো আমাদের করিয়েছে সেগুলো বিভিন্ন কোম্পানীতে ইন্টারভিউ দেওয়ার সময় খুবই কাজে দিয়েছে। সবচেয়ে যে জিনিসটি আমার ভাল লেগেছে , সেটি হচ্ছে আমি যে কোনো কোম্পানীতে ইন্টারভিউ দেওয়ার আগের দিন আমাকে স্পেশালভাবে ক্লাস নিয়েছে। 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Avatar src={saad} />
                            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Box>
                                    <Typography sx={{ color: '#343b6d', fontSize: '16px', lineHeight: '1.6', fontWeight: "700px" }}>Saad Chowdhury::AUST  </Typography>
                                    <Typography sx={{ color: '#343b6d', fontSize: '16px', lineHeight: '2', fontWeight: "400px" }}>SQA Engineer, Trainee BJIT Ltd </Typography>
                                </Box>
                                <img src={invertedcomma} />
                            </div>
                        </CardActions>
                    </Card>
                    <Card className='student_cards' sx={{ backgroundColor: "#FFFFF", border: "2px solid whitesmoke" }}>
                        <CardContent>
                            <Typography sx={{ color: '#343b6d', fontSize: '20px', lineHeight: '1.6' }} color="text.secondary" gutterBottom>
                            এটা কোর্সে ম্যানুয়্যাল & অটোমেশন উভয় টপিকই কভার করবে। SQA এর জন্য সিভি অনেকেই তৈরী করতে পারে না, তাই ভাইয়ারা সিভি বানানোর পুরো গাইডলাইন দিয়ে থাকে। এই কোর্সে কুইজ এবং এসাইনমেন্ট ও প্রয়োজন অনুযায়ী এক্সট্রা ক্লাস তো থাকছেই। ক্লাসগুলো খুবই  ফ্রেন্ডলি ভাবে নেয়া হয় যাতে আপনি খুব সহজেই আপনার সমস্যা ও প্রশ্নগুলো করতে পারেন ।  সত্যি বলতে একটা সময়ে ভাইয়াদের পড়ানো মিস করবেন । 

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Avatar src={hijab} />
                            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Box>
                                    <Typography sx={{ color: '#343b6d', fontSize: '16px', lineHeight: '1.6', fontWeight: "700px" }}>Nura Solahin Esha::AIUB </Typography>
                                    <Typography sx={{ color: '#343b6d', fontSize: '16px', lineHeight: '2', fontWeight: "400px" }}>SQA Engineer,Silicon Orchard LTD</Typography>
                                </Box>
                                <img src={invertedcomma} />
                            </div>
                        </CardActions>
                    </Card>
                    <Card className='student_cards' sx={{ backgroundColor: "#FFFFF", border: "2px solid whitesmoke" }}>
                        <CardContent>
                            <Typography sx={{ color: '#343b6d', fontSize: '20px', lineHeight: '1.6' }} color="text.secondary" gutterBottom>
                            আমি অনেক কনফিউশন ছিলাম, SQA লাইভ কোর্সটিতে ভর্তি হব কিনা, কারণ অনলাইনে জিনিসপত্র আমি বুঝতে পারবো কিনা সেটা নিয়ে সন্দিহান ছিলাম। কিন্তু বাগ রেজিস্ট্যান্সের ইন্সট্রাকটররা এমনভাবে সাপোর্ট করেছে, আমার সব সময় মনে হয়েছে আমি অফলাইনে কোর্সটি করছি। সত্যি  আমি তাদের প্রতি অনেক কৃতজ্ঞতা প্রকাশ করছি, আমাকে সঠিকভাবে গাইড করার জন্য। তাই অনলাইনের জন্য এটি বেস্ট লাইভ কোর্স । 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Avatar src={nafiz} />
                            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Box>
                                    <Typography sx={{ color: '#343b6d', fontSize: '16px', lineHeight: '1.6', fontWeight: "700px" }}>Nafiz Khan::BUBT  </Typography>
                                    <Typography sx={{ color: '#343b6d', fontSize: '16px', lineHeight: '2', fontWeight: "400px" }}>Prediction learning Associated ltd</Typography>
                                </Box>
                                <img src={invertedcomma} />
                            </div>
                        </CardActions>
                    </Card>
                    <Card className='student_cards' sx={{ backgroundColor: "#FFFFF", border: "2px solid whitesmoke" }}>
                        <CardContent>
                            <Typography sx={{ color: '#343b6d', fontSize: '20px', lineHeight: '1.6' }} color="text.secondary" gutterBottom>
                                বাগ রেজিস্ট্যান্সের SQA লাইভ কোর্সে যতটুকু এক্সপেক্টেশন নিয়ে এসেছি, তার থেকে অনেক বেশি কিছু পেয়েছি। সম্পূর্ণ নতুন একটি জিনিস কিভাবে শিখবো সেটা নিয়ে অনেক দ্বিধাদ্বন্দতে ছিলাম, কিন্তু কোর্স শেষ করার পর মনে হয়েছে অনেক কিছু নতুন আঙ্গিকে জানতে পেরেছি । সবচেয়ে ভালো লেগেছে উদাহরণ ও গল্পগুলো, যা আমাদের জীবনের সাথে পুরোপুরি ভাবে বাস্তবিক শিক্ষা দেয়। বাগ রেজিস্ট্যান্সকে ধন্যবাদ জানাই কোর্সটি এত প্রাণবন্তভাবে সাজানোর জন্য।
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Avatar src={xin} />
                            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Box>
                                    <Typography sx={{ color: '#343b6d', fontSize: '16px', lineHeight: '1.6', fontWeight: "700px" }}>Xin Akib Siddiquee::IIUC </Typography>
                                    <Typography sx={{ color: '#343b6d', fontSize: '16px', lineHeight: '2', fontWeight: "400px" }}>Riseup Labs</Typography>
                                </Box>
                                <img src={invertedcomma} />
                            </div>
                        </CardActions>
                    </Card>
                    <Card className='student_cards' sx={{ backgroundColor: "#FFFFF", border: "2px solid whitesmoke" }}>
                        <CardContent>
                            <Typography sx={{ color: '#343b6d', fontSize: '20px', lineHeight: '1.6' }} color="text.secondary" gutterBottom>

                                সত্যি অসাধারণ ছিল তাদের কোর্সটি । তাদের পড়ানোর স্টাইল এবং আন্তরিকরার কোনো ঘাটতি ছিল না। আর জব এর ব্যাপারে ভাইরা অনেক হেল্পফুল । জব পাবার জন্য আপনাকে যেভাবে গাইড করা প্রয়োজন তারা সেভাবেই গাইড করবে & আপনার কোন পথে গেলে ভালো হবে সেসবের গাইডলাইনও পাবেন ভাইদের নক/ফোন দিলেই। কোনো কারণে ক্লাস মিস গেলেও ভাইয়ারা প্রতিনিয়ত খোজখবর নিতে থাকে যে মিস করা ক্লাস দেখেছি কিনা।

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Avatar src={hijab} />
                            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Box>
                                    <Typography sx={{ color: '#343b6d', fontSize: '16px', lineHeight: '1.6', fontWeight: "700px" }}>Tasnia Tahsin Nujhat:: CUET  </Typography>
                                    <Typography sx={{ color: '#343b6d', fontSize: '16px', lineHeight: '2', fontWeight: "400px" }}>Enosis Solutions Ltd</Typography>
                                </Box>
                                <img src={invertedcomma} />
                            </div>
                        </CardActions>
                    </Card>
                </Slider>

            </div>
        </>
    )
}

export default CardSlider