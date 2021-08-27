import React, { useRef, useState } from "react";
import StartButton from '../StartButton/StartButton'
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";

// Signup form
const SignupForm = () => {

    const fullNameRef = useRef()
    const emailRef = useRef()
    const ageRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    // submit form logic
    // prevent form from refreshing each time
    async function handleSubmit(e) {
        e.preventDefault()

        // return error if password and confirmation does not match
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        // Sign up user using input values
        //  If error exists, prompt user

        try {
            setError('')
            setLoading(true)
            await signup(fullNameRef.current.value, emailRef.current.value, ageRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">
                        Sign Up
                    </h2>
                    {/* alert user if there's an error */}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="fullname">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" ref={fullNameRef} required />
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" ref={ageRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Log In
            </div>
        </>
    );
}

export default SignupForm;