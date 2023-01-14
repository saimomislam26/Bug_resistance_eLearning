import React from 'react'

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';

import student from '../images/student.png'
import invertedcomma from '../images/invertedcomma.png'
import CardSlider from './CardSlider';


const StudentBig = () => {
    return (
        // <div style={{ marginBottom: "80px", marginTop: "80px",marginLeft:"20px",height:"auto",border:"2px solid red" }}>
        <div style={{width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h3 class="title" style={{marginTop:"40px"}}>শিক্ষার্থীরা যা বলেন</h3>
            <Card className="student_card" sx={{ marginBottom: "50px",marginTop:"50px", height: "auto", marginLeft: '20px', width: "85%", maxWidth: "1300px" }}>
                <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ width: "100%", padding: "20px" }} >
                    <Grid sm={12} md={6} sx={{ paddingLeft: "20px" }}>
                        <img src={student} className='img-fluid' />
                    </Grid>
                    <Grid sm={12} md={6} sx={{ paddingLeft: "20px" }}>
                        <Typography sx={{ color: '#343b6d', fontSize: '20px', lineHeight: '1.6',marginTop:"10px" }} color="text.secondary" gutterBottom >আমি Non-CSE ব্যাকগ্রাউন্ড এর হয়েও বহুব্রীহি ক্যারিয়ার ট্র্যাক - কোর্স করে Frontend Developer হিসেবে নিজের ক্যারিয়ার গড়তে পেরেছি।</Typography>

                        <CardActions>
                            <Avatar src={student} />
                            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Box sx={{ marginLeft: "15px" }}>
                                    <Typography sx={{ color: '#343b6d', fontSize: '16px', lineHeight: '1.6', fontWeight: "700px" }}>Saimom</Typography>
                                    <Typography sx={{ color: '#343b6d', fontSize: '16px', lineHeight: '2', fontWeight: "400px" }}>Aust</Typography>
                                </Box>
                                <img src={invertedcomma} style={{ marginRight: "20px" }} />
                            </div>
                        </CardActions>
                    </Grid>

                </Grid>
            </Card>
            <CardSlider/>
        </div>


        // </div>
    )
}

export default StudentBig