import React from 'react'
import { Container } from 'reactstrap'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function FooterSide() {
  return (
    <div className='contact-side position-relative'>
        <div className='cover'></div>
        <div className='content-container'>
            <Container>
                <div className='z-1 bannar mb-2' ><h1><span className='text-primary' >Contact Us </span> for <br/> a <span>Quality-Driven </span> <br/>Discussion.</h1></div>
                    <div className="d-flex text-white">
                        <div className='contact-icons container'>
                            <ul>
                                <li><a href="mailto:customercare@cpvarabia.com"><MailOutlineIcon /><span>Send an Email</span></a></li>
                                <li><a href="#" style={{cursor:'auto'}}><LocalPhoneIcon /><span>920034242 </span></a></li>
                                <li><a href="https://cpvarabia.com"><HomeIcon /><span>cpvarabia.com</span></a></li>
                            </ul>
                        </div>
                        {/* <div>
                            <ul>
                                <li><a className='light-link mb-3' href='https://www.facebook.com/profile.php?id=100086578377553'><FacebookIcon /></a></li>
                                <li><a className='light-link mb-2' href="https://www.instagram.com/grupo_cpv/"><InstagramIcon /></a></li>
                                <li><a className='light-link mb-2' href="https://www.linkedin.com/company/grupocpv/"><LinkedInIcon /></a></li>
                            </ul>
                        </div> */}
                    </div>
            </Container>
        </div>
    </div>
  )
}
