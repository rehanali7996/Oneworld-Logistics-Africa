import React from 'react';
import { Container } from 'react-bootstrap';

    export default function AboutComponent(){
            return(
                <Container fluid>
                    <section className="d-flex align-items-center justify-content-start" style={{ backgroundColor: "#f5f5f5", height: "30vh", display: "block" }}>
                        <div className="container">
                            <h1>About Us</h1>
                            <p><span><a href="/home" className="link_Click" style={{ textDecoration: "none" }}>Home</a></span>/<span style={{ color: "#ec3c82" }}>About Us</span></p>
                        </div>
                    </section>
                    <section>
                        <div className="container" style={{ padding: "20px 0px 10px 0px" }}>
                            <article style={{ padding: "20px 0px 0px 20px" }}>
                                    <p> One World Logistics & Freight Zambia Ltd was established in Lusaka Zambia in September 2015 by a Team of highly experienced professionals with great passion for the courier industry and customer-centric service, with a view of meeting the logistics needs of businesses and consumers throughout Zambia.</p>
                                    <br/>
                                    <p> In its first year, One World established a strong country wide network in order to provide a superior Domestic courier service.During the same period the company set up a non-traditional service of shipping of Online Shopping from the UK, USA, India and South Africa, which has grown to become one of its most popular services.The company also offers Air freight, Ocean freight, Road freight to and from South Africa and customs clearances.</p>
                                    <br/>
                                    <p>From 1st June 2018, One World Zambia began it’s international operations as UPS Authorized Service Contractor as part of UPS international growth strategy. This has meant the repositioning of One World’s retail network as both a domestic and international courier & freight service provider. The unique collaboration combines One World’s strong domestic knowledge and coverage with over 109 years of UPS expertise and global reach.</p>
                                    <br/>
                                    <p>With over 454,000 employees worldwide, UPS is a leading express delivery provider. Through an integrated supply chain and worldwide network serving over 220 countries and territories, UPS oversees the successful daily delivery of more than 20 million packages and documents.</p>
                                    <br/>
                                    <p>One World Zambia is proud to passionately provide these shipping solutions to customers across Zambia and continue to strive towards being the preferred and innovative one stop service provider. </p>
                                    <br/>
                            </article>
                        </div>
                    </section>
                </Container>                               
            )
    }
