import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
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

    if(!login_Fields.password){
            errors.password="Password Required";
    }
    
    return errors;
}

export default function LoginComponent(){
        const history=useHistory();
        function handleClick(){
            history.push("/register");
        }

        const formik = useFormik({
            initialValues:{
                    email:'',
                    password:''
            },
            onSubmit:values =>{
                    alert(JSON.stringify(values));
            },
            validate:ValidateFields
        });


    return(
        <Container className="col-center">
            <div className="login_border">
                <Form onSubmit={formik.handleSubmit}>
                    <div className="m-3">
                       <center><h3>LOGIN</h3></center>
                    </div>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label size="sm">Email Or Account Number</Form.Label>
                        <Form.Control type="email" placeholder="Email Or Account Number" id="email" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}  />
                        <p className="text-danger">{(formik.touched.email) && (formik.errors.email)? formik.errors.email:null}</p>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label size="sm">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} />
                        <p className="text-danger">{(formik.touched.password) && (formik.errors.password)? formik.errors.password:null}</p>
                    </Form.Group>
                    <Form.Group className="m-1">
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" className="btn-form">
                            Login<FaCaretRight/>
                        </Button>
                    </div>
                    <Form.Text className="m-1">
                        Forgot your Password? <Link to="/forgotPass">Click Here</Link>
                    </Form.Text>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <h4>First Time User?</h4>
                    <div className="d-grid gap-2">
                        <Button variant="primary" onClick={handleClick} className="btn-form">
                            Online Registeration<FaCaretRight/>
                        </Button>
                    </div>
                    </Form.Group>
                </Form>
            </div>
        </Container>
    )       
}