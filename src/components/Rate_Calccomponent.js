import React, {useState} from 'react';
import { Form, Button, ButtonGroup, ButtonToolbar, Container, Row, Col } from 'react-bootstrap';
import './styles.css';

export default function RateComponent(){     
    //selected is the state variable that will hold the currently selected value from dropdown
    const [selected,setSelected]=useState("");
    //function that will set the different values selected in the dropdown to the state variable selected
    const handleSelectChange= (event) => {
        setSelected(event.target.value);
    };
    
    const country=["South Africa","Kenya","Rawanda","Kagili","Masaimara"];

    const deliveryCountry=["Lusaka","Out Of Lusaka"];

    //variable to store different values of the array depending on the selected value of the dropdown
    var typeSelected=null;
    //This will be used to create set of options that user will see 
    var options=null;
    var deliveryoptions=null;

    if(selected==="Shop and Ship (Online)"){
        typeSelected=country;
    }
    else if(selected==="Domestic Courier"){
        typeSelected=null;
    }

    // If shop & ship online is selected,it will create an iterable options based on the array country.If Domestic is selected then type
  //  selected will be null and no iterable options will be created. iterable options means dropdown

    if(typeSelected){
        options=typeSelected.map((el) => (
            <option key={el}>{el}</option>
        ));
        deliveryoptions=deliveryCountry.map((el) => (
            <option key={el}>{el}</option>
        ))
    } 

    return(
        <Container className="col-center">
            <h3 style={{margin:"20px",color:"#ec3c82"}}>RATE CALCULATOR</h3>
             <div>
             <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Service Type*</Form.Label>
                        {/* Binding the handleSelectChange method to onChange event handler. This method will be triggered everytime different option is selected */}
                        <Form.Control as="Select" onChange={handleSelectChange} >
                            <option value="Shop and Ship (Online)">Shop and Ship (Online)</option>
                            <option value="Domestic Courier">Domestic Courier</option>
                        </Form.Control>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>From Country*</Form.Label>
                        <Form.Control as="Select" >
                            { 
                                /*We are using the options variable here to display selected array (country) if Shop & ship online */
                                options
                            }
                        </Form.Control>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>To*</Form.Label>
                        <Form.Control as="Select" >
                            {
                                deliveryoptions
                            }
                        </Form.Control>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Actual Weight(KG)</Form.Label>
                        <Form.Control type="number" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Volumetric Weight(KG)</Form.Label>
                        <Form.Control type="number" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="m-1">
                        <ButtonToolbar className="row">
                            <ButtonGroup className="col">
                                <Button variant="primary" type="submit" className="btn-form">
                                    Calculate
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup className="col">   
                                <Button variant="primary" type="reset" className="btn-form">
                                    Reset
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Form.Group>
                </Form>
            </div>
        </Container>
    )       
}

