import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import swal from 'sweetalert';
import "./ContactForm.css";




class ContactForm extends Component {

    state = {
        first_name: '',
        last_name: '',
        email: '',
        message: ''

    };

    onContactChange = (input) => (event) => {
        console.log(event.target.value)
        this.setState({
            [input]: (event.target.value),
        }, () => { console.log(this.state) });
    };

    onClick = (event) => {
        event.preventDefault();
        console.log(this.state);
        swal("Thanks!", "I will respond as soon as I can.", "success", {
            button: "OK",
        });
        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            message: ''
        })
    };// end onClick

    render() {
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
                                value={this.state.first_name}
                                required
                                onChange={this.onContactChange('first_name')}
                            />
                            <TextField
                                className="textField"
                                id="outlined-basic" label="Outlined" variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Last Name"

                                type="text"
                                name="last_name"
                                value={this.state.last_name}
                                required
                                onChange={this.onContactChange('last_name')}
                            />
                            <TextField
                                className="textField"
                                id="outlined-basic" label="Outlined" variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Email"
                                value={this.state.email}
                                type="text"
                                name="email"

                                required
                                onChange={this.onContactChange('email')}
                            />
                            <TextField
                                className="textField"
                                id="outlined-multiline-static" label="Outlined" variant="outlined"
                                multiline
                                rows={4}
                                margin="normal"
                                fullWidth
                                label="Message"
                                value={this.state.message}
                                type="text"
                                name="mesage"

                                required
                                onChange={this.onContactChange('message')}
                            />



                            <center>

                                <Button
                                    type="submit"
                                    className="loginButton"
                                    color="primary"
                                    onClick={this.onClick}
                                >
                                    Send Message
                      </Button>

                            </center>
                        </form>
                    </div>
                </Container>
            </Card>


        );
    }
}
// end RegisterForm



export default ContactForm;
