import React from 'react'

import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';

import student from '../images/student.png'
import invertedcomma from '../images/invertedcomma.png'


const StudentBig = () => {
    return (
        // <div style={{ marginBottom: "80px", marginTop: "80px",marginLeft:"20px",height:"auto",border:"2px solid red" }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ marginBottom: "50px", marginTop: "200px", height: "auto",marginLeft:'20px',width:"93%" }}>
            <Grid sm={12} md={6} sx={{ padding: "30px 60px 10px 60px" }}>
                <img src={student} className='img-fluid' />
            </Grid>
            <Grid sm={12} md={6} >
                <Typography sx={{ color: '#343b6d', fontSize: '20px', lineHeight: '1.6', }} color="text.secondary" gutterBottom >আমি Non-CSE ব্যাকগ্রাউন্ড এর হয়েও বহুব্রীহি ক্যারিয়ার ট্র্যাক - কোর্স করে Frontend Developer হিসেবে নিজের ক্যারিয়ার গড়তে পেরেছি।</Typography>

                <CardActions>
                    <Avatar src={student} />
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Box sx={{marginLeft:"15px"}}>
                            <Typography sx={{ color: '#343b6d', fontSize: '16px', lineHeight: '1.6', fontWeight: "700px" }}>Saimom</Typography>
                            <Typography sx={{ color: '#343b6d', fontSize: '16px', lineHeight: '2', fontWeight: "400px" }}>Aust</Typography>
                        </Box>
                        <img src={invertedcomma} style={{marginRight:"20px"}}/>
                    </div>
                </CardActions>
            </Grid>

        </Grid>
        // </div>
    )
}

export default StudentBig