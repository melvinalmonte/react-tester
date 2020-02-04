import React from 'react'
import {Button, Form} from 'react-bootstrap'
import './Login.css'

export const LoginForm = (props) => {

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3 mx-auto'>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                          placeholder="Enter email"
                                          value={props.username}
                                          onChange={props.handleUser}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                          placeholder="Password"
                                          value={props.password}
                                          onChange={props.handlePass}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out"/>
                        </Form.Group>
                        <Button variant="primary"
                                onClick={props.handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>

    )
};