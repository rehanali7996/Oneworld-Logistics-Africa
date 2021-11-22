import React from 'react';
import { Container } from 'react-bootstrap';

export default function CustomsComponent(){
    return(
            <Container fluid>
                <section className="d-flex align-items-center justify-content-start" style={{backgroundColor:"#f5f5f5", height:"30vh", display:"block"}}>
                    <div className="container">
                        <h1>Customs Clearance</h1>
                        <p><span><a href="/home" rel="noopener noreferrer" className="link_Click" style={{textDecoration:"none"}}>Home</a></span>/<span style={{color:"#ec3c82"}}>Customs Clearance</span></p>
                    </div>
                </section>
                <section>
                    <div className="container" style={{padding:"20px 0px 10px 0px"}} >
                        <article style={{padding:"20px 0px 0px 20px"}}>
                            <p> One World offers a complete solution, including licensed Customs Clearing services at KKIA port.</p>
                            <p> One World will act as a clearing agent on behalf of the client and process relevant documentation with ZRA, advise the customer of any applicable Duties and Taxes and Clear the consignment with Customs for onward delivery. One World has an experienced and qualified customs clearing team.</p>
                            <p>This service is also available for <b>Repair and Return</b> International shipments. A repair and return shipment refers to goods that need to be sent out of the country for repairs or maintenance and will be returned to Zambia once this is done. One World will process a customs GRC registering the export prior to the parcels exit, Clear the goods at destination and deliver to the consignee. When the goods are ready for return, One World will collect the consignment and complete the necessary process for export to origin. On receipt of the consignment in Zambia, One World will Clear the consignment with ZRA (Customs) with the submission of the GRC and deliver the cleared goods back to the Sender. This is a repair and return round trip service. </p>
                            <p> For more details contact<a href="mailto:zmcustomerservice@ups.com" target="_blank" rel="noopener noreferrer">zmcustomerservice@ups.com</a></p>
                        </article>
                    </div>
                </section>
            </Container>
    )
}