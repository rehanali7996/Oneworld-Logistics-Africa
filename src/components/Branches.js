import React from 'react';
import { Card, CardGroup, Row, Col, Container } from 'react-bootstrap';

export default function BranchesComponent(){
    return(
            <Container fluid>
                <section className="d-flex align-items-center justify-content-start" style={{backgroundColor:"#f5f5f5", height:"30vh", display:"block"}}>
                    <div className="container">
                        <h1>Branches and Agents Across Zambia</h1>
                        <p><span><a href="/home" rel="noopener noreferrer" className="link_Click" style={{textDecoration:"none"}}>Home</a></span>/<span style={{color:"#ec3c82"}}>Branches and Agents Across Zambia</span></p>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <h3 style={{margin:"20px",color:"#ec3c82"}}>BRANCHES</h3>
                        <div className="">
                        <CardGroup>
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                        <Card.Title>Lusaka (Head office)</Card.Title>
                                        <Card.Text>
                                            <p>1164 Nkanchibaya Road, off Addis Ababa drive, Rhodes Park, Lusaka.</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>Tel: +260966 333 222/ +260211 387700</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>Email: <a href="mailto:online@oneworld.co.zm">online@oneworld.co.zm</a>/ <a href="info@oneworld.co.zm">info@oneworld.co.zm </a></p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p> For Shop and Ship contact +260966 333 222 Or email <a href="mailto:onlineshipments@oneworld.co.zm">onlineshipments@oneworld.co.zm</a><br/> For Courier and Freight contact +260211 387700 Or email <a href="mailto:zmcustomerservice@ups.com">zmcustomerservice@ups.com</a></p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p> Website: <a href="www.oneworld.co.zm">www.oneworld.co.zm</a><br/><a href="www.ups.com">www.ups.com</a></p>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{minHeight:"23.5rem"}}>
                                        <Card.Body>
                                        <Card.Title>Ndola</Card.Title>
                                        <Card.Text>
                                            <p>Shop #12, Rekay’s Mall, Ndola</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p> Tel: Lyson 0963 228279</p>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{minHeight:"23.5rem"}}>
                                        <Card.Body>
                                        <Card.Title>Kitwe</Card.Title>
                                        <Card.Text>
                                                <p>Plot 15, Corner of President and Chibote Avenue,Parklands, Kitwe</p>
                                        </Card.Text>
                                        <Card.Text>
                                                <p>Tel: Barnabas 0957052393</p>
                                        </Card.Text>
                                        <Card.Text>
                                                <p>Email: <a href="mailto:bchisha@oneworld.co.zm">bchisha@oneworld.co.zm </a></p>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </CardGroup>
                        </div>
                        <h3 style={{margin:"20px",color:"#ec3c82"}}>AGENTS</h3>
                        <div className="">
                        <Row>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                        <Card.Title>Kasama</Card.Title>
                                        <Card.Text>
                                            <p>Puma filling station, Plot No. 1312, Independence Avenue, Kasama</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>Tel: 0966 250182</p>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                        <Card.Title>Mansa</Card.Title>
                                        <Card.Text>
                                            <p>Christian Book Shop Complex, Room 5, Along Cathedral Road</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>Tel: 0955 480994 / 0965 480994/ 0978005314</p>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                        <Card.Title>Choma</Card.Title>
                                        <Card.Text>
                                            <p>Neco Building, Opp. Choma Hotel, Livingstone Road</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>Tel: 0968 208094</p>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                        <Card.Title>Kabwe</Card.Title>
                                        <Card.Text>
                                            <p>Total Filling Station, Plot 50, Independence Way</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>Tel: 0977 394857</p>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                        <Card.Title>Mongu</Card.Title>
                                        <Card.Text>
                                            <p>Plot 640, Goldman Insurance Building, Independence Ave, Opp. Puma Filling Station</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>Tel: 0979 969557</p>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                        <Card.Title>Solwezi</Card.Title>
                                        <Card.Text>
                                            <p>Auto Nest Spares, Plot L/36637, Independence Avenue</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>Tel: 0965 424010/0964 080009/ 0978 701470</p>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                        <Card.Title>Livingstone</Card.Title>
                                        <Card.Text>
                                            <p>National Building Society, Room 3, Permanent House, Mosi o Tunya Road</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>Tel: 0966 333738</p>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                        <Card.Title>Chipata</Card.Title>
                                        <Card.Text>
                                            <p>Litness Agro Flora service, situated at plot 2188 near mad max, Church Road </p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>Tel: 0955 816345</p>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                        <Card.Title>Monze</Card.Title>
                                        <Card.Text>
                                            <p>Napsa, Room 10 old wing along Livingstone Road</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>Tel: 0976 930521</p>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div> 
                        <div className="m-4"><b>Note: We deliver to all other towns countrywide</b></div>                      
                    </div>
                </section>
            </Container>
    )
}