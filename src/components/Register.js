import React from 'react';
import { Form, Button, ButtonGroup, ButtonToolbar, Container, Row, Col } from 'react-bootstrap'; 
import { useFormik } from 'formik'; 
import './styles.css';
import PasswordStrengthMeter from './passwordMeter';

function ValidateFields(register_Fields){
    const errors={};

    if(!register_Fields.email){
        errors.email="Email Required";
    }
    else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(register_Fields.email)){
        errors.email="Invalid email address";
    }

    if(!register_Fields.password){
            errors.password="Password Required";
    }
    else if(!/[^A-Za-z][0-9][A-Za-z]/.test(register_Fields.password)){
            errors.password="Pattern Mismatch";
    }
    else if(register_Fields.password.length<6){
            errors.password="Password must have more than 6 alphanumeric char"
    }

    if(!register_Fields.Confirm_Password){
            errors.Confirm_Password="Confirm Password Required"
    }
    else if(register_Fields.Confirm_Password!==register_Fields.password){
            errors.Confirm_Password="Passwords must match"
    }
    
    return errors;
}

export default function RegisterComponent(){

    const formik=useFormik({
        initialValues:{
            email:'',
            password:'',
            Confirm_Password:'',
            corp_User:false
        },
        onSubmit:values =>{
            alert(JSON.stringify(values));
        },
        validate:ValidateFields
        })
        

    return(
        <Container className="col-center">
             <div className="form_border">
                <Form onSubmit={formik.handleSubmit}>
                    <div className="m-3">
                       <center><h3>CREATE AN ACCOUNT WITH US</h3></center>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label size="sm">EMAIL*</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                        <p className="text-danger">{(formik.touched.email) && (formik.errors.email)? formik.errors.email:null}</p>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label size="sm">PASSWORD*</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                        <p className="text-danger">{(formik.touched.password) && (formik.errors.password)? formik.errors.password:null}</p>
                    </Form.Group>

                    <Row style={{marginTop:"-12px",marginBottom:"10px"}}>
                        <Col md="auto"><Form.Text>Password Strength</Form.Text></Col>
                        <Col><PasswordStrengthMeter password={formik.values.password}/></Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label>CONFIRM PASSWORD*</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" name="Confirm_Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Confirm_Password} />
                        <p className="text-danger">{(formik.touched.Confirm_Password) && (formik.errors.Confirm_Password)? formik.errors.Confirm_Password:null}</p>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Is a Corporate User ?" name="corp_User" onChange={formik.handleChange} value={formik.values.corp_User} />
                    </Form.Group>

                    <Form.Group className="m-1">
                        <ButtonToolbar className="row">
                            <ButtonGroup className="col">
                                <Button variant="primary" type="submit" className="btn-form">
                                    Continue
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup className="col">   
                                <Button variant="light" type="reset" className="btn-form">
                                    Cancel
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Form.Group>
                </Form>
            </div>
        </Container>
    )       
}