import React, { useState } from 'react';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';



// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ContactForm() {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const [heading, setHeading] = useState('Functional Component');

    return (
        <div className="registerDiv">
            <div className="overlay">
                <Card className="registerCard" >
                    <Container className="registerContainer" component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className="registerPaper">

                            <form className="registerForm" noValidate>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    label="First Name"
                                    autoFocus
                                    type="text"
                                    name="first_name"
                                    value
                                    required
                                    onChange
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    label="Last Name"
                                    autoFocus
                                    type="text"
                                    name="last_name"
                                    value
                                    required
                                    onChange
                                />



                                <center>

                                    <Button
                                        type="logbutton"
                                        className="loginButton"
                                        color="primary"
                                    >
                                        Login
                      </Button>

                                </center>
                            </form>
                        </div>
                    </Container>
                </Card>
            </div >
        </div>
    );
}
// end RegisterForm



export default ContactForm;
