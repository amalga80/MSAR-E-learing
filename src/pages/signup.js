import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from "../containers/header";
import * as ROUTES from '../constants/routes'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Alert } from 'reactstrap';
import { Link } from "react-router-dom";
import '../global.css'
const by={background:"#000000bf"}

export default function Signup() {

        const history = useHistory();
        const { firebase } = useContext(FirebaseContext);
        const [firstName, setFirstName] = useState('')
        const [emailAddress, setEmailAddress] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');

        const isInValid = firstName === '' || password === "" || emailAddress === "";

        const handleSignup = (event) => {
                event.preventDefault();

        firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress, password)
        .then((result) =>
                        result.user
                        .updateProfile({
                                displayName: firstName,
                                photoURL : Math.floor(Math.random() * 5) + 1,
                        }).then(() => {
                                history.push(ROUTES.BROWSE)
                        })
                        
               )
               .catch((error) => {
                       setFirstName('')
                       setEmailAddress('')
                       setPassword('')
                       setError(error.message)
               })

        }



        return       ( 
        <>
                <HeaderContainer/>
                <section className="py-5 sectionBackground">
                <div className="container py-5">
                        <div  className="py-5 col-lg-5 col-md-8 col-10 px-2 d-flex flex-column  justify-content-center align-items-center m-auto" style={by}>
                                <h2 className="title">Sign Up</h2>
                                {error && <Alert  color="danger">{error}</Alert>}
                                <Form onSubmit={handleSignup} method="POST">
                                        <Input className="my-4"
                                                placeholder="First name"
                                                value={firstName}
                                                onChange={({ target }) => setFirstName(target.value)}
                                        />
                                        <Input className="my-4"
                                                placeholder="Email address"
                                                value={emailAddress}
                                                onChange={({ target }) => setEmailAddress(target.value)}
                                        />
                                        <Input className="my-4"
                                                type="password"
                                                value={password}
                                                autoComplete="off"
                                                placeholder="Password"
                                                onChange={({ target }) => setPassword(target.value)}
                                        />
                                        <button className="button-color" disabled={isInValid} type="submit">
                                                Sign Up
                                                </button>
                                </Form>
                                <p className="mt-2">
                                        Already a user? <Link to="/signin">Sign in now.</Link>
                                </p>
                                <FormText className=" mx-2 text-center">
                                        This page is protected by Google reCAPTCHA <br/>  to ensure you're not a bot. Learn more.
                                </FormText>
                        </div>
                </div>
                        </section>
        </>
        )
}