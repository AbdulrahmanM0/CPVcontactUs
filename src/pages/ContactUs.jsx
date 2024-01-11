import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Form from '../components/Form/Form'
import ContactSide from '../components/ContactSide/ContactSide'
import ContactSideMobile from '../components/ContactSide/ContactSideMobile'
import FooterSide from '../components/ContactSide/FooterMobile'
import { Alert, Button, Snackbar } from '@mui/material'
import Confirm from '../components/Confirm/Confirm'

export default function ContactUs() {
    const [mobieBuild,setMobileBuild] = useState(false)
    const [submited,setSubmited] = useState(false)
    
    useEffect(()=>{
        window.innerWidth <= 768 ? setMobileBuild(true) : setMobileBuild(false)
        window.onresize = () =>  window.innerWidth <= 768 ? setMobileBuild(true) : setMobileBuild(false)
    },[])

  return (
    <div className='page-card'>
        <Container>
            <div className='page-card-content rounded'>
            <Row>
                <Col bg={4} md={5} sm={0}>
                    <div className=' h-100'>
                        {!mobieBuild ?
                        <ContactSide />
                        :
                        <ContactSideMobile />
                        }
                    </div>
                </Col>
                <Col bg={8} md={7} sm={12}>
                    <div className='p-4'>
                    <div className='rounded p-4' style={{backgroundColor: '#f6f9ff'}}>
                    {!submited ?
                        <>
                            <small className='fw-bold text-secondary' style={{fontSize: '12px'}}>Tell Us about yourself .</small>
                            <Form setSubmited={setSubmited}/>
                        </>
                        :
                            <Confirm />
                        }
                    </div>
                    </div>
                </Col>
            </Row>
            </div>

            {mobieBuild &&
            <>
                <div className='m-5'></div>
                <div className='page-card-content rounded'>
                    <Row>
                        <Col>
                            <FooterSide />
                        </Col>
                    </Row>
                </div>
            </>
            }

        </Container>
            </div>
  )
}
