import React, { useState, useEffect } from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { ArrowRight } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import NavbarTop from '../Shared/NavbarTop'
import servicebanner from '../../images/servicebanner.png'
import { Slide } from 'react-slideshow-image';
import logo1 from "../../images/o-code.jpg"
import logo2 from "../../images/pran.jpg"
import logo3 from "../../images/sailor.jpg"
import logo4 from "../../images/tagga-man.jpg"
import logo5 from "../../images/twelve.jpg"
import logo6 from "../../images/yellow.jpg"
import logo7 from "../../images/zurham.jpg"
import { Box, Grid } from '@mui/material';

const contents = [
    {
        title: "Experience",
        details: "During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries."
    },
    {
        title: "Quick Start",
        details: "During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries."
    },
    {
        title: "Transparency",
        details: "During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries."
    },
    {
        title: "Extensive Infrastructure",
        details: "During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries."
    },

    {
        title: "on-demand services",
        details: "During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries."
    },
    {
        title: "Flexibility",
        details: "During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries."
    },

]


const Service = () => {
    const width = window.innerWidth
    const [size, setSize] = useState(width);
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    useEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize)

        return () => window.removeEventListener("resize", updateSize)
    }, [size])
    return (
        <div>
            <NavbarTop />
            <div className='full_wrapper'style={{maxWidth:"2100px"}}>
            <div className='page-wrapper' >
                
                <div className='header-para-div'>
                <h1 className='text-center header-title' style={{marginBottom:"30px"}}>Web Application Testing</h1>
                    <p className='header-para text-center'>Bug Resistance offers software testing services for web solutions to thoroughly check their quality and, by that, contribute to their improved work and an enhanced customer experience.</p>
                    <div className='sticky__btn row'>
                        <span style={{ miWidth: '100px', maxWidth: "300px", marginTop: "30px" }}>
                            <a href='https://www.facebook.com/bugresistance' target={"_blank"} class="cmn-btn" style={{ textDecoration: "none", backgroundColor: "#F23460", color: "#ffffff", border: "2px solid #F23460" }}>Contact Us</a>
                        </span>
                    </div>
                </div>
                {/* Image Section */}
                <div className='banner_image_section'>
                    <img src={servicebanner} className="img-fluid banner_image" />
                </div>
                {/* Industries We work With */}
                <div className='slider_section'>
                    <h3 className='text-center header-title'>Industries We work With</h3>
                    <div className='slider_container' style={{ width: "80%", marginTop: "30px" }}>
                        <Slide slidesToScroll={1}
                            slidesToShow={size > 800 ? 4 : size > 500 ? 2 : 1}
                        >
                            <div className='client-logo'>
                                <img src={logo1} />
                            </div>
                            <div className='client-logo'>
                                <img src={logo2} />
                            </div>
                            <div className='client-logo'>
                                <img src={logo3} />
                            </div><div className='client-logo'>
                                <img src={logo4} />
                            </div><div className='client-logo'>
                                <img src={logo5} />
                            </div>
                            <div className='client-logo'>
                                <img src={logo6} />
                            </div>
                            <div className='client-logo'>
                                <img src={logo7} />
                            </div>
                        </Slide>
                    </div>

                </div>
                {/* Why Bug Resistance */}
                <div className='explanation_section'>
                    <h3 className='text-center header-title'>Why Bug Resistance?</h3>
                    <div className='accordian_body'>
                        <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                            {contents.map((c, i) => {
                                return <>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <Accordion
                                            style={{ border: "1px solid #5C2CC5", backgroundColor: "#F2F5F9" }}
                                            disableGutters={"true"} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
                                            <AccordionSummary
                                                expandIcon={<ArrowRight style={{ fontWeight: "700", fontSize: "2.2rem", color: "#3F3F3F" }} />}
                                                aria-controls="panel1bh-content"
                                                id={`panel${i}bh-header`}

                                            >

                                                <Typography sx={{ color: '#3F3F3F', border: "none", fontSize: "16px", fontWeight: "600", lineHeight: "24px" }}>{c.title}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography sx={{ lineHeight: "2rem" }}>
                                                    {c.details}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Grid>

                                </>
                            })}
                        </Grid>
                    </div>

                </div>

                {/* What We Test */}


                {/* How We Test Web Apps */}
                <div className='explanation_section'>
                    <h3 className='text-center header-title'>How We Test Web Apps?</h3>
                    <div className='test_web_body'>
                        <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>

                            <Grid item xs={12} sm={6} md={6}>
                                <div style={{ display: "flex" }}>
                                    <div className='border_line_purple'>
                                    </div>
                                    <div className='border_text_body'>
                                        <h6 className='border_text_title_purple'>Functional testing</h6>
                                        <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                    </div>
                                </div>

                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
                                <div style={{ display: "flex" }}>
                                    <div className='border_line_red'>
                                    </div>
                                    <div className='border_text_body'>
                                        <h6 className='border_text_title_red'>Functional testing</h6>
                                        <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                    </div>
                                </div>

                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
                                <div style={{ display: "flex" }}>
                                    <div className='border_line_red'>
                                    </div>
                                    <div className='border_text_body'>
                                        <h6 className='border_text_title_red'>Functional testing</h6>
                                        <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                    </div>
                                </div>

                            </Grid>


                            <Grid item xs={12} sm={6} md={6}>
                                <div style={{ display: "flex" }}>
                                    <div className='border_line_purple'>
                                    </div>
                                    <div className='border_text_body'>
                                        <h6 className='border_text_title_purple'>Functional testing</h6>
                                        <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                    </div>
                                </div>

                            </Grid>


                            <Grid item xs={12} sm={6} md={6}>
                                <div style={{ display: "flex" }}>
                                    <div className='border_line_purple'>
                                    </div>
                                    <div className='border_text_body'>
                                        <h6 className='border_text_title_purple'>Functional testing</h6>
                                        <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                    </div>
                                </div>

                            </Grid>


                            <Grid item xs={12} sm={6} md={6}>
                                <div style={{ display: "flex" }}>
                                    <div className='border_line_red'>
                                    </div>
                                    <div className='border_text_body'>
                                        <h6 className='border_text_title_red'>Functional testing</h6>
                                        <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                    </div>
                                </div>

                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
                                <div style={{ display: "flex" }}>
                                    <div className='border_line_red'>
                                    </div>
                                    <div className='border_text_body'>
                                        <h6 className='border_text_title_red'>Functional testing</h6>
                                        <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                    </div>
                                </div>

                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
                                <div style={{ display: "flex" }}>
                                    <div className='border_line_purple'>
                                    </div>
                                    <div className='border_text_body'>
                                        <h6 className='border_text_title_purple'>Functional testing</h6>
                                        <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                    </div>
                                </div>

                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
                                <div style={{ display: "flex" }}>
                                    <div className='border_line_purple'>
                                    </div>
                                    <div className='border_text_body'>
                                        <h6 className='border_text_title_purple'>Functional testing</h6>
                                        <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                    </div>
                                </div>

                            </Grid>


                            <Grid item xs={12} sm={6} md={6}>
                                <div style={{ display: "flex" }}>
                                    <div className='border_line_red'>
                                    </div>
                                    <div className='border_text_body'>
                                        <h6 className='border_text_title_red'>Functional testing</h6>
                                        <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                    </div>
                                </div>

                            </Grid>
                        </Grid>
                    </div>

                </div>

                {/* Stages Of Testing */}
                <div className='testing_stage'>
                    <h3 className='text-center header-title'>Stages Of Testing</h3>
                    <div className='test_web_body'>
                        <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                            <Grid item xs={12} sm={4} md={4} >
                                <Badge color="secondary" badgeContent={1} anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}className='badge_box'>
                                    <div className='stage_box_single'>
                                        <h6 className='text-center' style={{ color: "#F23460" }}>Requirement Analysis</h6>
                                    </div>
                                </Badge>

                            </Grid>
                            <Grid item xs={12} sm={4} md={4} >
                            <Badge color="secondary" badgeContent={2} anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}className='badge_box'>
                                    <div className='stage_box_single'>
                                        <h6 className='text-center' style={{ color: "#F23460" }}>Test Planning</h6>
                                    </div>
                                </Badge>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                            <Badge color="secondary" badgeContent={3} anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}className='badge_box'>
                                    <div className='stage_box_single'>
                                        <h6 className='text-center' style={{ color: "#F23460" }}>Development Of Test Doc</h6>
                                    </div>
                                </Badge>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                            <Badge color="secondary" badgeContent={4} anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}className='badge_box'>
                                    <div className='stage_box_single'>
                                        <h6 className='text-center' style={{ color: "#F23460" }}>Environment Setup</h6>
                                    </div>
                                </Badge>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                            <Badge color="secondary" badgeContent={5} anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}className='badge_box'>
                                    <div className='stage_box_single'>
                                        <h6 className='text-center' style={{ color: "#F23460" }}>Test Execution</h6>
                                    </div>
                                </Badge>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                            <Badge color="secondary" badgeContent={6} anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                className='badge_box'
                                >
                                    <div className='stage_box_single'>
                                        <h6 className='text-center' style={{ color: "#F23460" }}>Test Cycle Closer</h6>
                                    </div>
                                </Badge>
                            </Grid>



                        </Grid>
                    </div>
                </div>
                {/* <Badge badgeContent={4} color="secondary">
                    <MailIcon color="action" />
                </Badge> */}
            </div>
            </div>
            

        </div>
    )
}

export default Service