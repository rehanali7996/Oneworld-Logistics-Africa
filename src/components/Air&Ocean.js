import React from 'react';
import { Container } from 'react-bootstrap';

export default function AirandOceanComponent(){
    return(
            <Container fluid>
                <section className="d-flex align-items-center justify-content-start" style={{backgroundColor:"#f5f5f5", height:"30vh", display:"block"}}>
                    <div className="container">
                        <h1>Air and Ocean Freight</h1>
                        <p><span><a href="/home" rel="noopener noreferrer" className="link_Click" style={{textDecoration:"none"}}>Home</a></span>/<span style={{color:"#ec3c82"}}>Air and Ocean Freight</span></p>
                    </div>
                </section>
                <section>
                    <div className="container" style={{padding:"20px 0px 10px 0px"}} >
                        <article style={{padding:"20px 0px 0px 20px"}}>
                            <p>  This service is offered for the transportation of large or heavy weight consignments/shipments that do not qualify to be shipped as Courier. One World offers both Air and Ocean Freight services on the extensive UPS Global network, at competitive pricing and transit times. One World has a dedicated Freight Team who have vast experience in this line of service.  </p>
                            <p>For Commercial and Personal Shipping contact <a href="mailto:freight@oneworld.co.zm" target="_blank" rel="noopener noreferrer">freight@oneworld.co.zm </a></p>
                        </article>
                    </div>
                </section>
            </Container>
    )
}