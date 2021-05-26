import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";
import { HeaderContainer } from "../containers/header";
import "../global.css";
const by = { background: "#000000bf" };

export default function Signin() {
        const history = useHistory();
        const { firebase } = useContext(FirebaseContext);
        const [emailAddress, setEmailAddress] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState("");

        const isInValid = password === "" || emailAddress === "";
        const handleSignIn = (event) => {
                event.preventDefault();

                firebase
                        .auth()
                        .signInWithEmailAndPassword(emailAddress, password)
                        .then(() => {
                                history.push(ROUTES.BROWSE);
                        })
                        .catch((error) => {
                                setEmailAddress("");
                                setPassword("");
                                setError(error.message);
                        });
        };
        return (
                <>
                        <HeaderContainer />
                        <section className="py-5 sectionBackground">
                                <div className="container py-5">
                                        <div
                                                className="py-5 col-lg-5 col-md-8 col-10 px-2 d-flex flex-column  justify-content-center align-items-center m-auto"
                                                style={by}
                                        >
                                                <h2 className="title">Sign In</h2>
                                                {error && <Alert color="danger">{error}</Alert>}
                                                <Form onSubmit={handleSignIn} method="POST">
                                                        <Input
                                                                className="my-4  inputBackground "
                                                                placeholder="Email address"
                                                                value={emailAddress}
                                                                onChange={({ target }) => setEmailAddress(target.value)}
                                                        />
                                                        <Input
                                                                className="my-4"
                                                                type="password"
                                                                value={password}
                                                                autoComplete="off"
                                                                placeholder="Password"
                                                                onChange={({ target }) => setPassword(target.value)}
                                                        />
                                                        <button
                                                                disabled={isInValid}
                                                                type="submit"
                                                                className="button-color "
                                                        >
                                                                Sign In{" "}
                                                        </button>
                                                </Form>
                                                <p className="mt-2">
                                                        New to MSAR? <Link to="/signup">Sign up now.</Link>
                                                </p>
                                                <FormText className=" text-center">
                                                        This page is protected by Google reCAPTCHA <br />
              to ensure you're not a bot. Learn more.
            </FormText>
                                        </div>
                                </div>
                        </section>
                </>
        );
}
