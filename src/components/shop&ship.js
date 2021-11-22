import React from 'react';
import { Container } from 'react-bootstrap';

export default function ShopandShipComponent(){
    return(
            <Container fluid>
                <section className="d-flex align-items-center justify-content-start" style={{backgroundColor:"#f5f5f5", height:"30vh", display:"block"}}>
                    <div className="container">
                        <h1>Shop and Ship (Online)</h1>
                        <p><span><a href="/home" rel="noopener noreferrer" className="link_Click" style={{textDecoration:"none"}}>Home</a></span>/<span style={{color:"#ec3c82"}}>Shop and Ship</span></p>
                    </div>
                </section>
                <section>
                    <div className="container" style={{padding:"20px 0px 10px 0px"}} >
                        <article style={{padding:"20px 0px 0px 20px"}}>
                            <p>This unique service allows you to drop off or Shop Online in the UK, USA, South Africa and India and have your parcels delivered to Zambia.</p>
                            <p>How to use the Shop and Ship (Online) Service:</p>
                            <ul>
                                <li>Register with us on our website <a href="https://oneworld.co.zm/register" target="_blank" rel="noopener noreferrer"> www.oneworld.co.zm/register</a></li>
                                <li>You will receive an email confirmation of your registration, along with your unique One World Account Number, and International Office Addresses, rates, terms and conditions.</li>
                                <li>Shop from your favorite online stores.</li>
                                <li>Checkout using our relevant International Delivery Address. Be sure to include your Full Name, One World Account Number, Zambian mobile number and C/O One World Zambia, in the address. 
                                    <ul>
                                        <li>Your Name-OneWorld Account Number-Your Zambian Mobile Number</li>
                                        <li>C/O OneWorld Zambia</li>
                                        <li>Street Address</li>
                                        <li>City</li>
                                        <li>County/State</li>
                                        <li>Postal/Zip Code</li>
                                        <li>Country</li>
                                        <li>Our International office telephone number</li>
                                    </ul>
                                </li>
                                <li>Kindly send us an email notification of your purchase confirmation on <a  href="mailto:onlineshipments@oneworld.co.zm" rel="noopener noreferrer">onlineshipments@oneworld.co.zm. </a></li>
                                <li>You will be able to track your shipments by logging into your account on our website, once your purchases have been delivered to us by the relevant online store.</li>
                                <li>Email notifications with tracking status information will also be available to you, and allow you to know once your shipment is ready to collect at your preferred collection City/town in Zambia.</li>
                                <li>Shipments could be subject to Zambian Customs Duties and Taxes.</li>
                                <li>Make payment for your shipping, and collect your parcel.</li>
                                <li>SMILE! WE BRING THE WORLD TO YOU!</li>
                            </ul>
                            <p>Welcome to the Wonderful World of Online Shopping!</p>
                            <p> For further details, kindly contact <a href="mailto:onlineshipments@oneworld.co.zm" rel="noopener noreferrer">onlineshipments@oneworld.co.zm.</a></p>
                        </article>
                    </div>
                </section>
            </Container>
    )
}