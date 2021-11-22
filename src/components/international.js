import React from 'react';
import { Container } from 'react-bootstrap';

export default function InternationalComponent(){
    return(
            <Container fluid>
                <section className="d-flex align-items-center justify-content-start" style={{backgroundColor:"#f5f5f5", height:"30vh", display:"block"}}>
                    <div className="container">
                        <h1>International Courier – UPS</h1>
                        <p><span><a href="/home" rel="noopener noreferrer" className="link_Click" style={{textDecoration:"none"}}>Home</a></span>/<span style={{color:"#ec3c82"}}>International Courier – UPS</span></p>
                    </div>
                </section>
                <section>
                    <div className="container" style={{padding:"20px 0px 10px 0px"}} >
                        <article style={{padding:"20px 0px 0px 20px"}}>
                            <p>As an Authorized Service Contractor for UPS (United Parcel Services), One World provides an International Courier service, both of import and export of documents and non-documents of up to 30kgs per piece, to and from 220 countries worldwide.</p>
                            <p> UPS is the world’s oldest courier company, and was founded in 1907 in Seattle USA. Here are some UPS facts as of 2019: </p>
                            <p>
                                <table>
                                    <tr>
                                        <td><span><b>Global revenue of</b></span></td>
                                        <td><span><b>USD 74bn</b></span></td>
                                    </tr>
                                    <tr>
                                        <td><span><b>Global Employees</b></span></td>
                                        <td><span><b>495,000</b></span></td>
                                    </tr>
                                    <tr>
                                        <td><span><b>Global Volumes</b></span></td>
                                        <td><span><b>5.5bn packages and documents</b></span></td>
                                    </tr>
                                    <tr>
                                        <td><span><b>Global Daily Volumes</b></span></td>
                                        <td><span><b>21.9m packages and documents</b></span></td>
                                    </tr>
                                    <tr>
                                        <td><span><b>Global Operating facilities</b></span></td>
                                        <td><span><b>More than 1800</b></span></td>
                                    </tr>
                                    <tr>
                                        <td><span><b>Global Delivery Fleet</b></span></td>
                                        <td><span><b>About 125,000 package cars, vans, tractors, motorcycles, including more than 10,300 alternative fuel and advanced technology vehicles</b></span></td>
                                    </tr>
                                    <tr>
                                        <td><span><b>Global UPS aircrafts</b></span></td>
                                        <td><span><b>572</b></span></td>
                                    </tr>
                                    <tr>
                                        <td><span><b>Airports Served</b></span></td>
                                        <td><span><b>US – 401; International – 406</b></span></td>
                                    </tr>
                                </table>
                            </p>
                            <p> With advanced real time tracking systems, a dedicated and experienced team, and a customer centric proactive approach, the Zambia team passionately provides a world class service to the market. </p>
                            <p> For Commercial Shipping contact  <a href="mailto:sales@oneworld.co.zm" rel="noopener noreferrer">sales@oneworld.co.zm </a></p>
                            <p> For Personal Shipping contact  <a href="mailto:zmcustomerservice@ups.com" target="_blank" rel="noopener noreferrer">zmcustomerservice@ups.com</a> </p>
                        </article>
                    </div>
                </section>
            </Container>
    )
}