import React from 'react';
import { Container } from 'react-bootstrap';

export default function FAQComponent(){
    return(
            <Container fluid>
                <section className="d-flex align-items-center justify-content-start" style={{backgroundColor:"#f5f5f5", height:"30vh", display:"block"}}>
                    <div className="container">
                        <h1>Shop and Ship Frequently asked questions</h1>
                        <p><span><a href="/home" rel="noopener noreferrer" className="link_Click" style={{textDecoration:"none"}}>Home</a></span>/<span style={{color:"#ec3c82"}}>FAQs</span></p>
                    </div>
                </section>
                <section>
                    <div className="container" style={{padding:"20px 0px 10px 0px"}} >
                        <article style={{padding:"20px 0px 0px 20px"}}>
                        <div>
                            <h3> How do I contact One World Zambia? </h3>
                            <p> Please see our Branches, Agents and Contact details tab. </p>
                        </div>
                        <div>
                            <h3> Where are your offices in Zambia? </h3>
                            <p> Our branch and agent locations are listed on our Branches, Agents and Contact Details Tab. </p>
                        </div>
                        <div>
                            <h3> How do I register with One World Zambia to use the Shop and Ship Service? </h3>
                            <p> Visit our website <a href="www.oneworld.co.zm">www.oneworld.co.zm</a> and click on the “Register” button. You will be prompted to fill out a simple details form, once completed correctly, you will be successfully registered and an account number emailed to you. </p>
                        </div>
                        <div>
                            <h3> How will I know my parcel is ready for collection in Zambia? </h3>
                            <p> If you have registered with us, you will receive a “Ready to collect” email notification.<br/> If you haven’t yet registered with us, you will receive an SMS notification. </p>
                        </div>
                        <div>
                            <h3> Where is my parcel? </h3>
                            <p> If you are registered with us, you will be able to track your parcels, once you have logged into your account. <br/> If you haven’t yet registered with us, kindly email us on <a href="mailto:onlineshipments@oneworld.co.zm">onlineshipments@oneworld.co.zm </a> with the details of the parcel you are expecting, be sure to include the seller’s tracking number, date delivered and the name on the parcel.</p>
                        </div>
                        <div>
                            <h3> Are you able to consolidate parcels? </h3>
                            <p>For security reasons we do not consolidate parcels but instead we forward them as received from your seller.</p>
                        </div>
                        <div>
                            <h3> Can I bring in perfumes? </h3>
                            <p> We do ship perfumes from the UK only, at an additional surcharge. Perfumes are limited to 3 bottles per parcel. For larger quantities please contact us for further details. </p>
                        </div>
                        <div>
                            <h3> What is the volumetric weight and will I be charged for this? </h3>
                            <p> This is where the amount of space a parcel occupies on the aircraft is larger than the actual weight. You will be charged on the higher of either volumetric weight or actual weight. See our rate sheet for the formula to calculate volumetric weight. If unsure, please email us with actual weight and packed dimensions of your parcel, so that we can help you with an estimation. </p>
                        </div>
                        <div>
                            <h3> How do I calculate transit time? </h3>
                            <p> Transit time is calculated from the day your shipment is delivered to our international offices to the time it is ready to collect in Zambia. Please note that transit times are subject to airline and customs delays. </p>
                        </div>
                        <div>
                            <h3> Is Insurance for my parcel mandatory? </h3>
                            <p> We encourage customers to take out insurance especially for high value items, as One World’s liability in all situations is limited. </p>
                        </div>
                        </article>
                    </div>
                </section>
            </Container>
    )
}