import React from 'react';
import { Container } from 'react-bootstrap';

export default function DomesticComponent(){
    return(
            <Container fluid>
                <section className="d-flex align-items-center justify-content-start" style={{backgroundColor:"#f5f5f5", height:"30vh", display:"block"}}>
                    <div className="container">
                        <h1>Domestic Courier Service</h1>
                        <p><span><a href="/home" rel="noopener noreferrer" className="link_Click" style={{textDecoration:"none"}}>Home</a></span>/<span style={{color:"#ec3c82"}}>Domestic Courier Service</span></p>
                    </div>
                </section>
                <section>
                    <div className="container" style={{padding:"20px 0px 10px 0px"}} >
                        <article style={{padding:"20px 0px 0px 20px"}}>
                            <p>The One World Domestic Courier Service is offered for Local City and Inter-City shipping of documents and non-documents through out Zambia. One World provides this service through its branch offices and authorized agent offices in all major cities/towns in Zambia, within a transit time of 24-48 hours for delivery along line of rail, and 72 hours for outlying areas. One World prides itself in having a strong country wide network, providing a safe, reliable and affordable express service, and country wide distribution services.</p>
                            <p> One World offers this service to Corporate Customers on credit basis, and to Individual customers on cash basis. The dedicated Operations and Customer Services teams work tirelessly to ensure on time deliveries and customer centric service. </p>
                            <p> For Commercial Shipping contact <a href="mailto:sales@oneworld.co.zm" target="_blank" rel="noopener noreferrer">sales@oneworld.co.zm</a> </p>
                            <p> For Personal Shipping contact  <a href="mailto:zmcustomerservice@ups.com" target="_blank" rel="noopener noreferrer">zmcustomerservice@ups.com</a> </p>
                        </article>
                    </div>
                </section>
            </Container>
    )
}