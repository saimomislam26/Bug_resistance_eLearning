import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import student from '../images/student.png'
import invertedcomma from '../images/invertedcomma.png'
import { Avatar } from '@mui/material';
const StudentSay = () => {

  return (
    <>
    
      <div style={{display:"flex",marginRight:"30px"}}>
        <Card sx={{ minWidth: 200, maxWidth: 600, backgroundColor: "#FFFFF" ,border:"2px solid whitesmoke" }}>
          <CardContent>
            <Typography sx={{ color: '#343b6d',fontSize: '20px',lineHeight: '1.6' }} color="text.secondary" gutterBottom>
              বহুব্রীহি - আমার কাছে একটা ভালোবাসার নাম। আমি বহুব্রীহি থেকে অ্যান্ড্রয়েড এ্যাপ ডেভেলপমেন্ট সহ প্রিমিয়াম ১১টি কোর্স করেছি। অপেক্ষায় আছি ফুল স্টাক ডিজিটাল মার্কেটিং কোর্সটি করার জন্য। আশা করি ভবিষ্যতেও বহুব্রীহি টীম বিভিন্ন বিষয়ের উপর এমন উন্নতমানের কোর্স আমাদের জন্য পাবলিশ করবে।
            </Typography>
          </CardContent>
          <CardActions>
            <Avatar src={student} />
            <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Box>
              <Typography sx={{ color:'#343b6d',fontSize: '20px',lineHeight: '1.6',fontWeight:"700px" }}>Saimom</Typography>
              <Typography sx={{ color:'#343b6d',fontSize: '20px',lineHeight: '2',fontWeight:"400px" }}>Aust</Typography>
            </Box>
            <img src={invertedcomma}/>
            </div>           
          </CardActions>
        </Card>

        {/* Second Card */}
        {/* <Card sx={{ minWidth: 275, maxWidth: 475, backgroundColor: "#FAFBAA" }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              বহুব্রীহি - আমার কাছে একটা ভালোবাসার নাম। আমি বহুব্রীহি থেকে অ্যান্ড্রয়েড এ্যাপ ডেভেলপমেন্ট সহ প্রিমিয়াম ১১টি কোর্স করেছি। অপেক্ষায় আছি ফুল স্টাক ডিজিটাল মার্কেটিং কোর্সটি করার জন্য। আশা করি ভবিষ্যতেও বহুব্রীহি টীম বিভিন্ন বিষয়ের উপর এমন উন্নতমানের কোর্স আমাদের জন্য পাবলিশ করবে।
            </Typography>
          </CardContent>
          <CardActions>
            <Avatar src={student} />
            <div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
            <Box>
              <Typography>Saimom</Typography>
              <Typography>Aust</Typography>
            </Box>
            <img src={invertedcomma}/>
            </div>           
          </CardActions>
        </Card> */}

        {/* Third Card */}

        {/* <Card sx={{ minWidth: 275, maxWidth: 475, backgroundColor: "#FAFBAA" }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              বহুব্রীহি - আমার কাছে একটা ভালোবাসার নাম। আমি বহুব্রীহি থেকে অ্যান্ড্রয়েড এ্যাপ ডেভেলপমেন্ট সহ প্রিমিয়াম ১১টি কোর্স করেছি। অপেক্ষায় আছি ফুল স্টাক ডিজিটাল মার্কেটিং কোর্সটি করার জন্য। আশা করি ভবিষ্যতেও বহুব্রীহি টীম বিভিন্ন বিষয়ের উপর এমন উন্নতমানের কোর্স আমাদের জন্য পাবলিশ করবে।
            </Typography>
          </CardContent>
          <CardActions>
            <Avatar src={student} />
            <div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
            <Box>
              <Typography>Saimom</Typography>
              <Typography>Aust</Typography>
            </Box>
            <img src={invertedcomma}/>
            </div>           
          </CardActions>
        </Card> */}
      </div>

    </>

  )
}

export default StudentSay