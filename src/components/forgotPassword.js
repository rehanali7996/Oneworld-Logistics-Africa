import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaCaretRight } from 'react-icons/fa';
import { useFormik } from 'formik'; 
import './styles.css';


function ValidateFields(login_Fields){
        const errors={};
    
        if(!login_Fields.email){
            errors.email="Email Required";
        }
        else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(login_Fields.email)){
            errors.email="Invalid email address";
        }

        return errors;
    }

export default function ForgotPasswordComponent(){

        const formik = useFormik({
                initialValues:{
                        email:'',
                },
                onSubmit:values =>{
                        alert(JSON.stringify(values));
                },
                validate:ValidateFields
            });

        return(
                <Container fluid className="col-center">
                <div className="form_border">
                <Form onSubmit={formik.handleSubmit}>
                    <div className="m-3">
                       <center><h3>Forgot Password</h3></center>
                    </div>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label size="sm">Email Or Account Number</Form.Label>
                        <Form.Control type="email" placeholder="Email Or Account Number" id="email" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}  />
                        <p className="text-danger">{(formik.touched.email) && (formik.errors.email)? formik.errors.email:null}</p>
                    </Form.Group>

                    <Form.Group className="m-1">
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" className="btn-xxl">
                            Email Reset Link<FaCaretRight/>
                        </Button>
                    </div>
                    </Form.Group>
                </Form>
                </div>
        </Container>
        )
}