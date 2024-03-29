import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
// import { Tween } from 'react-gsap';
import './Menu.css';
import './Footer.css';


class About extends Component {
  
    render() {
        return (
            <div id="outer-container" style={{ overflow: "hidden" }}>
                <Menu
                    right
                    customBurgerIcon={ <img src={require("../../assets/menu/thin_burger.png")} alt={""} /> }
                    customCrossIcon={ <img src={require("../../assets/menu/round_cross.png")} alt={""} /> }
                    pageWrapId={ "page-wrap" }
                    outerContainerId={ "outer-container" }
                    style={{ outline: "none" }}
                >
                    <ul style={{ outline: "none", listStyle: "none" }}>
                        <li><Link style={{color: '#fff'}} to="/">Home</Link></li>
                        <li><Link style={{color: '#666'}} to="/about">About</Link></li>
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
                        // backgroundColor: "#666"
                        // backgroundImage: "radial-gradient(circle, #e0f8f8, #d9f6f6, #d3f4f4, #ccf1f2, #c5eff0, #beecef, #b8eaef, #b1e7ef, #aae4f0, #a3e0f1, #9edcf3, #99d8f4)"
                        // backgroundImage: "radial-gradient(circle, #91fbff, #8af7fb, #82f3f8, #7af0f4, #72ecf1, #68e6ef, #5edfed, #54d9eb, #49cee9, #42c3e6, #40b7e1, #42acdc)"
                        // backgroundImage: "radial-gradient(circle, #09aaed, #09abf1, #0aadf4, #0baef8, #0eaffb, #05b4fd, #00b8fe, #00bdff, #03c6ff, #18ceff, #2dd6ff, #40deff)"
                    }}
                >
                    <img
                        src={require("../../assets/images/paper_white.jpg")}
                        alt={""}
                        style={{
                            position: "fixed",
                            textAlign: "center",
                            height: "100%",
                            width: "100%",
                            // height: "100vh",
                            // width: "100vw",
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
                        color: "#000",
                        textAlign: "center",
                        fontFamily: "Museo",
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
                    }}>
                        <img
                            // width={"42%"}
                            src={require("../../assets/images/favicon3_black.png")}
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
                        <h1 style={{ color: "#333" }}>About</h1>
                        <br></br>
                        <section 
                            style={{
                                // width:"100%",
                                position: "relative",
                                // color: "#000",\
                                // fontFamily: "Museo",
                                textAlign: "center",
                                // textAlignVertical: "center",
                                // display: "block",
                                // maxHeight: "80%",
                                maxWidth: 600,
                                width: "auto/9",
                                height: "auto",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                margin: "auto",
                                // display: "block",
                                // opacity: 1
                                backgroundColor: "rgba(200, 200, 200, 0.5)",
                                borderStyle: "groove",
                                borderWidth: "1px",
                                borderColor: "#999",
                                borderRadius: "8px",
                                padding: "10px",
                                color: "#000"
                                }}
                        >
                            <p>My name is Ruslan Pantaev and I grew up in Siberia and moved to NYC when I was six.
                            My grandpa is a composer in Ulan-Ude and one of my passions is music.
                            I studied Film Scoring at Berklee College of Music in Boston for two years.</p>
                            <p>While making music I got exposed to a lot of software and virtual instrument libraries.
                              Trying to figure out how it all worked, I got hooked on programming!</p>
                            <p>I enjoy working with the MERN stack (Mongo, Express, React, Node) for web dev.
                            For ai/machine learning experiments, I like python and TF. Unity and webGL (regl)
                            are also really fun!</p>
                            <p>In my spare time I play an 8-string Strandberg Boden guitar,
                            shoot 14.1 and 9-ball pool and play basketball.</p>
                        </section>
                        <br></br>
                        <br></br>
                    {/* </Tween>
                    <Tween
                        from={{ x: '0px', rotation: 0, scale: 0.01, opacity: 0 }}
                        to={{ x: '0px', rotation: 0, scale: 1, opacity: 0.8 }}
                        // stagger={1}
                        duration={3}
                        repeat={0}
                        yoyo={true}
                        position="+=0"
                        ease="Back.easeOut"
                    > */}
                        {/* <img
                            src={require("../../assets/images/homeMudHat.jpg")}
                            alt={""}
                            style={{
                                position: "relative",
                                textAlign: "center",
                                // maxHeight: "100%",
                                maxWidth: 600,
                                width: "90%",
                                height: "auto",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                margin: "auto",
                                // display: "block",
                                // opacity: 0.1
                            }}
                        /> */}
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

export default About;