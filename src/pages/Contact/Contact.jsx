import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className="d-flex justify-content-center bg-new vh-100">
            <div className="contact mt-5">
                <h1 className="fw-bold text-center">Contact Me</h1>
                <Form className="text-center bg-gradient p-5 rounded-3 shadow">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="fw-bold">Your name</Form.Label>
                        <Form.Control type="text" placeholder="type your name please" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="fw-bold">Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="fw-bold">Your Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <button className="btn btn-outline-dark">Send</button>
                </Form>
            </div>
        </div>
    );
};

export default Contact;