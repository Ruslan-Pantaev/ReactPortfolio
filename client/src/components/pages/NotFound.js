import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { Tween } from 'react-gsap';
import './Menu.css';
import './Footer.css';


class NotFound extends Component {
  
    render() {
        return (
            <div id="outer-container" style={{ overflow: "hidden" }}>
                <Menu
                    right
                    customBurgerIcon={ <img src={require("../../assets/menu/thin_burger_light.png")} alt={""} /> }
                    customCrossIcon={ <img src={require("../../assets/menu/round_cross.png")} alt={""} /> }
                    pageWrapId={ "page-wrap" }
                    outerContainerId={ "outer-container" }
                    style={{ outline: "none" }}
                >
                    <ul style={{ outline: "none", listStyle: "none" }}>
                        <li><Link style={{color: '#fff'}} to="/">Home</Link></li>
                        <li><Link style={{color: '#fff'}} to="/about">About</Link></li>
                        <li><Link style={{color: '#fff'}} to="/projects">Projects</Link></li>
                        <li><Link style={{color: '#fff'}} to="/contact">Contact</Link></li>
                    </ul>
                </Menu>
                <div
                    id="page-wrap"
                    style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "auto/9",
                        height: "100vh",
                        margin: "auto",
                        // backgroundImage: "radial-gradient(circle, #4f4f4f, #494949, #434343, #3d3d3d, #373737, #313131, #2c2c2c, #262626, #1f1f1f, #181818, #111111, #060606)"
                        // backgroundImage: "radial-gradient(circle, #000000, #0a0909, #121111, #181717, #1d1c1c, #242222, #2b2929, #323030, #3d3b3b, #484545, #535151, #5f5c5c)"
                    }}
                >
                    <img
                        src={require("../../assets/images/arch4.jpg")}
                        alt={""}
                        style={{
                            position: "fixed",
                            textAlign: "center",
                            // height: "calc(100vmax + 100vmax)",
                            height: "100vh",
                            width: "100vw",
                            top: 0,
                            bottom: 0,
                            left: -10,
                            right: 0,
                            margin: "auto",
                            // overflow: "auto",
                            // objectFit: "fill",
                            display: "inline-block",
                            opacity: 1
                        }}
                    />
                    <div style={{
                        // width:"100%",
                        position: "relative",
                        color: "#fff",
                        textAlign: "center",
                        // fontFamily: "monospace",
                        // textAlignVertical: "center",
                        // display: "block",
                        // maxHeight: "80%",
                        width: "auto/9",
                        height: "auto",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        margin: "auto",
                        // display: "block",
                        opacity: 1
                        }}
                    >
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
                                src={require("../../assets/images/favicon3_white.png")}
                                alt={""}
                                style={{
                                    position: "relative",
                                    textAlign: "center",
                                    // maxHeight: "100%",
                                    maxWidth: "800px",
                                    width: "100%",
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
                            <div style={{
                                position: "relative",
                                textAlign: "center",
                                overflow: "hidden",
                                width: "40%",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                margin: "auto",
                                borderStyle: "solid",
                                borderWidth: "1px",
                                borderColor: "#999",
                                borderRadius: "8px",
                                padding: "10px",
                                color: "red",
                                backgroundColor: "rgba(0, 0, 0, 0.75)"
                            }}
                        >
                              <h3>404</h3>
                              <p>oops, this page does not exist...</p>
                            </div>
                        </Tween>
                    </div>
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
                        <footer className="footerClass"
                            style={{
                                textAlign: "center",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                margin: "auto"
                            }}>
                            <div id="footerLinks">
                                <a href="https://github.com/Ruslan-Pantaev" target="_blank" rel="noopener noreferrer"> <img alt="gitHub" src={require("../../assets/socialMediaIcons/Github.png")} /></a>
                                <a href="https://www.linkedin.com/in/ruslan-pantaev-482579b8" target="_blank"rel="noopener noreferrer"> <img alt="linkedin" src={require("../../assets/socialMediaIcons/Linkedin.png")} /></a> 
                                <a href="https://www.instagram.com/ruslan_pantaev/" target="_blank"rel="noopener noreferrer"> <img alt="instagram" src={require("../../assets/socialMediaIcons/Instagram.png")} /></a> 
                                <a href="https://baltosequoia.deviantart.com" target="_blank" rel="noopener noreferrer"> <img alt="deviantart" src={require("../../assets/socialMediaIcons/Deviantart.png")} /></a> 
                                <a href="https://soundcloud.com/ruslanpantaev" target="_blank" rel="noopener noreferrer"> <img alt="soundcloud" src={require("../../assets/socialMediaIcons/Soundcloud.png")} /></a>
                            </div>
                            <br></br>
                            <p id="footerSig" style={{color: "#fff"}}>Ruslan Pantaev &copy; 2019</p>
                        </footer>
                        </Tween>
                    <br></br>
                    <br></br>
                </div>
            </div>
        );
    }
}

export default NotFound;