import React, { useState } from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import "./ContactForm.css";



// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ContactForm() {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const [contactInfo, setContactInfo] = useState('Contact Info');

    return (

        <Card className="contactCard" >

            <Container className="contactContainer" component="main" maxWidth="xs">
                <CssBaseline />
                <div className="contactPaper">

                    <form className="contactForm" noValidate>

                        <TextField
                            className="textField"
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="First Name"

                            type="text"
                            name="first_name"

                            required
                            onChange
                        />
                        <TextField
                            id="outlined-basic" label="Outlined" variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Last Name"

                            type="text"
                            name="last_name"

                            required
                            onChange
                        />
                        <TextField
                            id="outlined-basic" label="Outlined" variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Last Name"

                            type="text"
                            name="last_name"

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


    );
}
// end RegisterForm



export default ContactForm;
