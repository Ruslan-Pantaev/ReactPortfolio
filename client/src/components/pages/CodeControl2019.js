import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
// import { Link } from 'react-router-dom';
import Unity, { UnityContent } from "react-unity-webgl";
import ReactGA from 'react-ga';
import { Form, Button } from 'reactstrap';
import './Menu.css';
import './Footer.css';

// let unityContent = new UnityContent(
//     "/assets/unityWebGL/CodeControl_2019_2_0_2/Build/CodeControl_2019_2_0_2.json",
//     "/assets/unityWebGL/CodeControl_2019_2_0_2/Build/UnityLoader.js",
//     { adjustOnWindowResize: true }
// );

const B = (props) => <span style={{fontWeight: 'bold'}}>{props.children}</span>
const SPACING = (props) => <span style={{color: "green", fontWeight: 'bold'}}> | </span>

class CodeControl2019 extends Component {
    componentDidMount() {
        ReactGA.initialize('UA-87922163-1');
        ReactGA.pageview('/codecontrol2019');
    }

    constructor(props) {
      super(props);
   
      this.unityContent = new UnityContent(
        "/assets/unityWebGL/CodeControl_2019_2_0_2/Build/CodeControl_2019_2_0_2.json",
        "/assets/unityWebGL/CodeControl_2019_2_0_2/Build/UnityLoader.js",
        { adjustOnWindowResize: true }
      );
    }

    // toggleFullScreen(e) {
    //     unityContent.setFullscreen(true);
    //     e.preventDefault()
    // }
  
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
                    <ul style={{ outline: "none" }}>
                        <li><a style={{color: '#aaeaff'}} href="/">Home</a></li>
                        <li><a style={{color: '#aaeaff'}} href="/about">About</a></li>
                        <li><a style={{color: '#aaeaff'}} href="/cv">CV</a></li>
                        <li><a style={{color: '#fff'}} href="/projects">Projects</a></li>
                        <li><a style={{color: '#aaeaff'}} href="/contact">Contact</a></li>
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
                        backgroundImage: "radial-gradient(circle, #252424, #292828, #2d2c2c, #303031, #343435, #393939, #3d3d3e, #424242, #484848, #4e4e4e, #545454, #5a5a5a)"
                    }}
                >
                    <img
                        src={require("../../assets/images/wireframe.png")}
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
                            opacity: 0.08
                        }}
                    />
                    <div style={{
                        // width:"100%",
                        position: "relative",
                        overflow: "hidden",
                        color: "#999",
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
                                src={require("../../assets/images/favicon3.svg")}
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
                        <div
                          style={{
                            position: "relative",
                            textAlign: "center",
                            // maxHeight: "100%",
                            maxWidth: "600px",
                            width: "100%",
                            height: "auto",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            margin: "auto",
                            // display: "block",
                            // opacity: 1
                          }}>
                            <h1>Code Control 2019 rev2.0.2</h1>
                            <br></br>
                            <h5>***For best performance, use the latest stable version of Firefox.***</h5>
                            <p>Google Chrome was also tested to be working.</p>
                            <p>Safari, Opera, IE/Edge, etc are NOT supported.</p>
                            <p>Please do not refresh the page until the game loads.</p>
                            <br></br>
                            {/* <p>For better performance or if your browser is not compatible, download the game below:</p>
                            <a style={{color: "green"}} href="https://drive.google.com/open?id=1GZTsmEgCz3yeb4qMAjFSFwio7mvLuHdw" target="_blank" rel="noopener noreferrer">Download 64-bit OSX build</a>
                            <br></br>
                            <a style={{color: "green"}} href="https://drive.google.com/open?id=10i9_RapIzxdjmHNAl65duz3wx8XuMGzY" target="_blank" rel="noopener noreferrer">Download 64-bit Windows build</a>
                            <br></br>
                            <a style={{color: "green"}} href="https://drive.google.com/open?id=1be2VgqAJbaFVzO3FtcvRamONAgmx0r9y" target="_blank" rel="noopener noreferrer">Download 64-bit Linux build</a>
                            <br></br>
                            <br></br> */}
                            <h5>Controls</h5>
                            <p>w,a,s,d or arrow-keys to <B>move</B><SPACING></SPACING>spacebar to <B>jump</B><SPACING></SPACING>
                            {/* c to <B>crouch</B><SPACING></SPACING>hold left-shift to <B>walk slowly</B></p>
                            <p>g,h,j,k to make <B>hand signals</B><SPACING></SPACING>l to activate <B>flashlight</B><SPACING></SPACING>
                            left-ctrl+l to <B>dance</B>*/}
                            </p>
                            {/* <p>mouse-scroll to <B>zoom</B></p> */}
                            <br></br>
                            <h5>Game Play</h5>
                            <p>
                              Welcome to Code Control.  Allow me to quickly brief you on your objective.  This city needs you.
                              A data center power outage corrupted the Digital-ID-Tags worn by foster animals in the city, causing them to run loose.
                              Here is where your coding prowess and problem solving skills come into play.
                              Each Digital-ID-Tag will contain a coding challenge that you must solve to save the animal.
                              Once you solve a challenge, the animal will safely return to the foster animal shelter.
                              Watch out for the cars, they will decrease your stamina, however returning home via the subway will boost you back up!</p>
                
                              <p>1.  Once you're in the city, open the 'Challenge Picker' via the game play menu icon on the left and select your challenge.</p>
                              <p>2.  Find the animal (hint: it will be the one with the floating particles).</p>
                              <p>3.  Solve the challenge and repeat!</p>
                
                              <p>Now get out there and make a difference!</p>
                            </p>
                        </div>
                        <br></br>
                        <div id="gameContainer" style={{
                                position: "relative",
                                textAlign: "center",
                                overflow: "hidden",
                                // maxWidth: "960px", //h:600
                                width: "90%",
                                height: "40vw",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                margin: "auto",
                                // display: "inline-block",
                                borderStyle: "double",
                                borderWidth: "5px",
                                borderColor: "#333",
                                borderRadius: "8px"
                            }}
                        >
                            {/* <Unity unityContent={unityContent} /> */}
                            <Unity unityContent={this.unityContent} />;
                        </div>
                        <br></br>
                        {/* <Form onSubmit={this.toggleFullScreen}>
                            <Button
                                color={'success'}
                                style={{
                                    position: "relative",
                                    textAlign: "center",
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    margin: "auto"
                                }}
                            >
                                Full Screen
                            </Button>
                        </Form> */}
                    </div>
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
                            <a href="https://www.instagram.com/arpiseaQ/" target="_blank"rel="noopener noreferrer"> <img alt="instagram" src={require("../../assets/socialMediaIcons/Instagram.png")} /></a> 
                            <a href="https://baltosequoia.deviantart.com" target="_blank" rel="noopener noreferrer"> <img alt="deviantart" src={require("../../assets/socialMediaIcons/Deviantart.png")} /></a> 
                            <a href="https://soundcloud.com/ruslanpantaev" target="_blank" rel="noopener noreferrer"> <img alt="soundcloud" src={require("../../assets/socialMediaIcons/Soundcloud.png")} /></a>
                        </div>
                        <br></br>
                        <p id="footerSig" style={{color: "#999"}}>Ruslan Pantaev &copy; 2019</p>
                    </footer>
                    <br></br>
                    <br></br>
                </div>
            </div>
        );
    }
}

export default CodeControl2019;