import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
// import { Tween } from 'react-gsap';
import './Menu.css';
import './Footer.css';


class CV extends Component {
  
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
                        <li><Link style={{color: '#666'}} to="/cv">CV</Link></li>
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
                        height: "auto",
                        margin: "auto",
                        // backgroundImage: "radial-gradient(circle, #ffffff, #f7f7fa, #eeeef5, #e4e7f1, #d9dfec, #d1dced, #c8daee, #bed8ee, #b4daf3, #a8ddf6, #9be0f7, #8de3f7)"
                    }}
                >
                    <img
                        src={require("../../assets/images/paper_black.jpg")}
                        alt={""}
                        style={{
                            position: "fixed",
                            textAlign: "center",
                            overflow: "hidden",
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
                            opacity: 1
                        }}
                    />
                    <div style={{
                        // width:"100%",
                        position: "relative",
                        overflow: "hidden",
                        color: "#333",
                        textAlign: "center",
                        // fontFamily: "monospace",
                        // fontFamily: "Helvetica Neue",
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
                        {/* <Tween
                            from={{ y: '1000px', rotation: 0, scale: 0.01, opacity: 0 }}
                            to={{ y: '0px', rotation: 0, scale: 1, opacity: 1 }}
                            // stagger={1}
                            duration={3}
                            repeat={0}
                            yoyo={true}
                            position="+=0"
                            ease="Back.easeOut"
                        > */}
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
                        {/* </Tween> */}
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1 style={{ color: "white" }}>CV - Resume</h1>
                        <br></br>
                        <section 
                            style={{
                                // width:"100%",
                                position: "relative",
                                color: "#000",
                                textAlign: "center",
                                overflow: "hidden",
                                // textAlignVertical: "center",
                                // display: "block",
                                // maxHeight: "80%",
                                maxWidth: 1080,
                                width: "80%",
                                height: "auto",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                margin: "auto",
                                borderStyle: "solid",
                                borderWidth: "1px",
                                borderColor: "#999",
                                borderRadius: "8px",
                                padding: "10px"
                            }}
                        >
                            <img
                                src={require("../../assets/cv/RuslanPantaev_cv_2019-1-6.jpg")}
                                alt={""}
                                style={{
                                    // position: "relative",
                                    textAlign: "center",
                                    overflow: "hidden",
                                    // maxHeight: "100%",
                                    maxWidth: 1080,
                                    width: "100%",
                                    height: "auto",
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    margin: "auto",
                                    // display: "block",
                                    // opacity: 0.1
                                }}
                            />
                        </section>
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
                        <p id="footerSig" style={{color: "#333"}}>Ruslan Pantaev &copy; 2019</p>
                    </footer>
                    <br></br>
                    <br></br>
                </div>
            </div>
        );
    }
}

export default CV;