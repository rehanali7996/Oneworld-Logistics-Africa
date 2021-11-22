import React from 'react';
import { Container } from 'react-bootstrap';

export default function RoadtoSAComponent(){
    return(
            <Container fluid>
                <section className="d-flex align-items-center justify-content-start" style={{backgroundColor:"#f5f5f5", height:"30vh", display:"block"}}>
                    <div className="container">
                        <h1>Road freight to and from South Africa</h1>
                        <p><span><a href="/home" rel="noopener noreferrer" className="link_Click" style={{textDecoration:"none"}}>Home</a></span>/<span style={{color:"#ec3c82"}}>Road freight to and from South Africa</span></p>
                    </div>
                </section>
                <section>
                    <div className="container" style={{padding:"20px 0px 10px 0px"}} >
                        <article style={{padding:"20px 0px 0px 20px"}}>
                            <p> This service is for transportation of goods via Road to and from South Africa either on a Dedicated or Consolidated Load. </p>
                            <p>  Dedicated loads are offered on request and the consignment will depart once loading and all export formalities are completed. </p>
                            <p> For more details contact<a href="mailto:zmcustomerservice@ups.com" target="_blank" rel="noopener noreferrer">zmcustomerservice@ups.com</a></p>
                        </article>
                    </div>
                </section>
            </Container>
    )
}