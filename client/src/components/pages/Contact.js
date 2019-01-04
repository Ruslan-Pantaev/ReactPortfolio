import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { Tween } from 'react-gsap';
import { Form, FormGroup, Input, Label, Button, Alert } from 'reactstrap';
import './Menu.css';
import './Footer.css';
import Axios from 'axios';


class Contact extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            message: '',
            alert: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onDismiss = this.onDismiss.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        this.setState({ alert: true })
        e.preventDefault()
        const { name, email, message } = this.state
        const form = await Axios.post('/api/form', {
            name,
            email,
            message
        })
    }

    onDismiss() {
        this.setState({ alert: false });
    }
  
    render() {
        return (
            <div id="outer-container">
                <Menu
                    right
                    customBurgerIcon={ <img src={require("../../assets/menu/thin_burger.png")} alt={""} /> }
                    customCrossIcon={ <img src={require("../../assets/menu/round_cross.png")} alt={""} /> }
                    pageWrapId={ "page-wrap" }
                    outerContainerId={ "outer-container" }
                >
                    <ul>
                        <li><Link style={{color: '#aaeaff'}} to="/">Home</Link></li>
                        <li><Link style={{color: '#aaeaff'}} to="/about">About</Link></li>
                        <li><Link style={{color: '#aaeaff'}} to="/projects">Projects</Link></li>
                        <li><Link style={{color: '#fff'}} to="/contact">Contact</Link></li>
                    </ul>
                </Menu>
                <div
                    id="page-wrap"
                    style={{
                        overflow: "auto",
                        height: "100vmax",
                        margin: "auto",
                        position: "relative",
                        backgroundImage: "radial-gradient(circle, #666666, #4c4c4c, #343434, #1d1d1d, #000000)"
                    }}
                >
                    <img
                        src={require("../../assets/images/wireframe2.png")}
                        alt={""}
                        style={{
                            position: "fixed",
                            textAlign: "center",
                            // height: "calc(100vmax + 100vmax)",
                            height: "100vh",
                            width: "100vw",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            margin: "auto",
                            // overflow: "auto",
                            // objectFit: "fill",
                            display: "inline-block",
                            opacity: 0.1
                        }}
                    />
                    <div style={{
                        // width:"100%",
                        position: "absolute",
                        color: "#fff",
                        textAlign: "center",
                        fontFamily: "monospace",
                        // textAlignVertical: "center",
                        // display: "block",
                        // maxHeight: "80%",
                        width: "auto/9",
                        height: "auto",
                        top: '150px',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        margin: "auto",
                        // display: "block",
                        opacity: 1
                        }}>
                        <Tween
                            from={{ y: '1000px', rotation: 0, scale: 0.01, opacity: 0 }}
                            to={{ y: '0px', rotation: 0, scale: 1, opacity: 1 }}
                            // stagger={1}
                            duration={3}
                            repeat={0}
                            yoyo={true}
                            position="+=0"
                            ease="Back.easeOut"
                        >
                            <img
                                // width={"42%"}
                                src={require("../../assets/images/favicon3.png")}
                                alt={""}
                                style={{
                                    position: "relative",
                                    textAlign: "center",
                                    // maxHeight: "100%",
                                    // maxWidth: "100%",
                                    width: "auto/9",
                                    height: "auto",
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    margin: "auto",
                                    // display: "block",
                                    // opacity: 1
                                }}
                            />
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h1>Contact</h1>
                            <br></br>
                            <br></br>
                            <Form
                                onSubmit={this.handleSubmit}
                                style={{
                                    // width:"100%",
                                    position: "relative",
                                    color: "#fff",
                                    textAlign: "center",
                                    maxWidth: "600px",
                                    width: "auto/9",
                                    height: "auto",
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    margin: "auto",
                                    // display: "block"
                                    }}>
                                <FormGroup>
                                    <Label for="name">Name:</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email:</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="message">Message:</Label>
                                    <Input
                                        type="textarea"
                                        name="message"
                                        onChange={this.handleChange} />
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                            <br></br>
                            <br></br>
                            <Alert
                                color="success"
                                isOpen={this.state.alert}
                                toggle={this.onDismiss}
                                fade={true}
                                style={{
                                    position: "relative",
                                    textAlign: "center",
                                    maxWidth: "600px",
                                    width: "auto/9",
                                    height: "auto",
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    margin: "auto",
                                    opacity: 1
                                }}
                            >
                                Email Sent
                            </Alert>
                            <br></br>
                            <br></br>
                        </Tween>
                        <Tween
                            from={{ y: '-1000px', rotation: 0, scale: 0.01, opacity: 0 }}
                            to={{ y: '0px', rotation: 0, scale: 1, opacity: 1 }}
                            // stagger={1}
                            duration={3}
                            repeat={0}
                            yoyo={true}
                            position="+=0"
                            ease="Back.easeOut"
                        >
                            <footer className="footerClass">
                                <div id="footerLinks">
                                    <a href="https://github.com/Ruslan-Pantaev" target="_blank" rel="noopener noreferrer"> <img alt="gitHub" src={require("../../assets/socialMediaIcons/Github.png")} /></a>
                                    <a href="https://www.linkedin.com/in/ruslan-pantaev-482579b8" target="_blank"rel="noopener noreferrer"> <img alt="linkedin" src={require("../../assets/socialMediaIcons/Linkedin.png")} /></a> 
                                    <a href="https://www.instagram.com/arpiseaQ/" target="_blank"rel="noopener noreferrer"> <img alt="instagram" src={require("../../assets/socialMediaIcons/Instagram.png")} /></a> 
                                    <a href="http://baltosequoia.deviantart.com" target="_blank" rel="noopener noreferrer"> <img alt="deviantart" src={require("../../assets/socialMediaIcons/Deviantart.png")} /></a> 
                                    <a href="https://soundcloud.com/ruslanpantaev" target="_blank" rel="noopener noreferrer"> <img alt="soundcloud" src={require("../../assets/socialMediaIcons/Soundcloud.png")} /></a>
                                </div>
                                <br></br>
                                <p id="footerSig" style={{color: "#ccc"}}>Ruslan Pantaev &copy; 2019</p>
                            </footer>
                            <br></br>
                            <br></br>
                        </Tween>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;