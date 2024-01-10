import React from 'react'
import { Container } from 'reactstrap'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from '../../assets/Logo-01 (2).png'


export default function ContactSide() {
  return (
    <div className='contact-side position-relative'>
        <div className='cover'></div>
        <div className='content-container'>
            <Container>
                <div className="content-center brand">
                    <div className='p-3 logo-img'><img src={Logo} alt='CPV' /></div>
                    <div className='z-1 bannar mb-5' ><h1>Let Us discuss on <br/> something <span className='text-primary'>together</span>.</h1></div>
                    <div className="d-none d-sm-block text-white">
                        <div className='contact-icons container'>
                            <ul>
                                <li><a href="mailto:customercare@cpvarabia.com"><MailOutlineIcon /><span>Send an Email</span></a></li>
                                <li><a href="#" style={{cursor:'auto'}}><LocalPhoneIcon /><span>+966920034242 </span></a></li>
                                <li><a href="https://cpvglobal.com/en/home-english/"><HomeIcon /><span>Our Home Page</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </Container>
        </div>
        <div className='social-icons'>
            <ul>
                <li><a href='https://www.facebook.com/profile.php?id=100086578377553'><FacebookIcon /></a></li>
                <li><a href="https://www.instagram.com/grupo_cpv/"><InstagramIcon /></a></li>
                <li><a href="https://www.linkedin.com/company/grupocpv/"><LinkedInIcon /></a></li>
            </ul>
        </div>
    </div>
  )
}
