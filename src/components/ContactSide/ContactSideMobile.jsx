import React from 'react'
import { Container } from 'reactstrap'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
import Logo from '../../assets/Logo-01 (2).png'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ContactSide() {
  return (
    <div className='contact-side position-relative'>
        <div className='cover'></div>
        <div className='content-container'>
            <Container>
                <div className="content-center brand">
                    <div className='p-3 logo-img d-flex'><div><img src={Logo} alt='CPV' /></div>            
                    {/* <ul>
                        <li><a href='https://www.facebook.com/profile.php?id=100086578377553'><FacebookIcon /></a></li>
                        <li><a href="https://www.instagram.com/grupo_cpv/"><InstagramIcon /></a></li>
                        <li><a href="https://www.linkedin.com/company/grupocpv/"><LinkedInIcon /></a></li>
                    </ul> */}
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}
