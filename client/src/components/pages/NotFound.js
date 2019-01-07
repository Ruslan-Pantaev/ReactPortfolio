import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { Tween } from 'react-gsap';
import './Menu.css';
import './Footer.css';


class NotFound extends Component {
  
    render() {
        return (
            <div id="outer-container">
                <Menu
                    right
                    customBurgerIcon={ <img src={require("../../assets/menu/thin_burger_light.png")} alt={""} /> }
                    customCrossIcon={ <img src={require("../../assets/menu/round_cross.png")} alt={""} /> }
                    pageWrapId={ "page-wrap" }
                    outerContainerId={ "outer-container" }
                >
                    <ul style={{ outline: "none" }}>
                        <li><Link style={{color: '#aaeaff'}} to="/">Home</Link></li>
                        <li><Link style={{color: '#aaeaff'}} to="/about">About</Link></li>
                        <li><Link style={{color: '#aaeaff'}} to="/cv">CV</Link></li>
                        <li><Link style={{color: '#aaeaff'}} to="/projects">Projects</Link></li>
                        <li><Link style={{color: '#aaeaff'}} to="/contact">Contact</Link></li>
                    </ul>
                </Menu>
                <div
                    id="page-wrap"
                    style={{
                        overflow: "auto",
                        height: "100vmax",
                        margin: "auto",
                        position: "relative",
                        backgroundImage: "radial-gradient(circle, #4f4f4f, #494949, #434343, #3d3d3d, #373737, #313131, #2c2c2c, #262626, #1f1f1f, #181818, #111111, #060606)"
                        // backgroundImage: "radial-gradient(circle, #000000, #0a0909, #121111, #181717, #1d1c1c, #242222, #2b2929, #323030, #3d3b3b, #484545, #535151, #5f5c5c)"
                    }}
                >
                    <img
                        src={require("../../assets/images/wireframe.png")}
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
                        // fontFamily: "monospace",
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
                            <h3>404</h3>
                            <p>oops, this page doesn't exist...</p>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
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
                                    <a href="https://baltosequoia.deviantart.com" target="_blank" rel="noopener noreferrer"> <img alt="deviantart" src={require("../../assets/socialMediaIcons/Deviantart.png")} /></a> 
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

export default NotFound;