import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Tween } from 'react-gsap';
import Unity, { UnityContent } from "react-unity-webgl";
import { Form, Button } from 'reactstrap';
import Iframe from 'react-iframe';
import ReactPlayer from 'react-player';
import Gist from 'react-gist';
import './Menu.css';
import './Footer.css';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.unityContent = new UnityContent(
          "/assets/unityWebGL/CodeControl_3_1/Build/CodeControl_3_1.json",
          "/assets/unityWebGL/CodeControl_3_1/Build/UnityLoader.js",
          { adjustOnWindowResize: true }
        );
        this.state = {
            loadCodeControl: false,
            codeControlBtnColor: 'success',
            codeControlText: 'Load Game'
        }
        this.toggleCodeControl = this.toggleCodeControl.bind(this)
    }

    toggleCodeControl(e) {
        this.setState(prevState => ({
            loadCodeControl: !prevState.loadCodeControl
        }))
        if (this.state.codeControlBtnColor === 'success') {
            this.setState({ codeControlBtnColor: 'danger' })
        }
        if (this.state.codeControlText === 'Load Game') {
            this.setState({ codeControlText: 'Exit Game (restart game progress)' })
        }
        if (this.state.codeControlBtnColor === 'danger') {
            window.location.reload();
        }
        e.preventDefault()
    }
  
    render() {
        // window.document.getElementById('root').muted = true;
        return (
            <div id="outer-container">
                <Menu
                    right
                    customBurgerIcon={ <img src={require("../../assets/menu/thin_burger.png")} alt={""} /> }
                    customCrossIcon={ <img src={require("../../assets/menu/round_cross.png")} alt={""} /> }
                    pageWrapId={ "page-wrap" }
                    outerContainerId={ "outer-container" }
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
                        overflow: "auto",
                        // width: "100vw",
                        height: "100vmax",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        margin: "auto",
                        position: "relative",
                        // backgroundColor: "#666"
                        backgroundImage: "radial-gradient(circle, #fcfcfc, #f3f1f4, #ede5ea, #e8d9dc, #e2cdcd)"
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
                            opacity: 0.08
                        }}
                    />
                    <div style={{
                        // width:"100%",
                        position: "absolute",
                        color: "#000",
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
                        </Tween>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1>Projects</h1>
                        <br></br>
                        <div style={{
                                position: "relative",
                                textAlign: "center",
                                width: "95%",
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
                            <section 
                                style={{
                                    // width:"100%",
                                    position: "relative",
                                    color: "#000",
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
                                    borderStyle: "solid",
                                    borderWidth: "1px",
                                    borderColor: "#999",
                                    borderRadius: "8px",
                                    padding: "10px",
                                    backgroundColor: "rgba(181, 183, 183, 0.1)"
                                }}
                            >
                                <h3>Title:</h3>
                                <p>Code Control: A Game for Teaching Introductory Programming</p>
                                <h3>Authors:</h3>
                                <p>(In alphabetical order): Kwan Holloway, Devorah Kletenik, Ruslan Pantaev, Deborah Sturm, and Mike Williams</p>
                                <h3>Abstract:</h3>
                                <p>Code Control is an educational serious game developed to help students 
                                    taking the Introductory Programming courses at CUNY colleges learn to program. 
                                    The game's storyline is about a spaceship that has lost control of its orbit and 
                                    is on a collision course with the sun. Ten scientists are trapped on the spaceship 
                                    and need to be found and escorted to escape pods. In order to do so, the player must 
                                    complete short programming challenges; for example, opening doors using conditional 
                                    statements, figuring out a path to take by specifying array elements, trying a number
                                    of keys using nested loops. The game has several levels corresponding to the basic 
                                    constructs taught and a cumulative final challenge. A debriefing stage at each level 
                                    teaches the player about the information that is covered on that level and the player 
                                    is always able to access the ``notes'' if they need a reminder.</p>
                                <p>Code Control was designed to be more like a "real game," and includes an extensive storyline, 
                                    sound effects, and rich graphics. The design allows for non-linear exploration of the game 
                                    world and incorporates power-ups such as double-jumps and speed-ups. Secret levels are used 
                                    to fill in parts of the storyline and give information about the antagonist and his motive.</p>
                                <p>Utilizing Code Control in conjunction with traditional instruction gives potentially struggling 
                                    students visual context for some functional topics covered in introductory CS coursework. 
                                    We also wanted to make this experience as engaging and fun as possible to further incentivize 
                                    player retention.</p>
                                <a
                                    href='https://github.com/Ruslan-Pantaev/CodeControl_clean'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#666" }}
                                >
                                    <h6 style={{
                                        color: "#666",
                                        width: "200px",
                                        textAlign: "center",
                                        borderStyle: "outset",
                                        borderWidth: "5px",
                                        borderColor: "#999",
                                        borderRadius: "8px",
                                        padding: "10px",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        margin: "auto"
                                    }}>Git Repo Link</h6>
                                </a>
                                <br></br>
                                <h3>Compatibility:</h3>
                                <p>Currently not supported on mobile platforms</p>
                                <p>Latest Stable Releases of FireFox and Chrome are recommended</p>
                            </section>
                            {/* <br></br>
                            <img
                                src={require("../../assets/images/codecontrol_browser_compatibility.png")}
                                alt={""}
                                style={{
                                    position: "relative",
                                    textAlign: "center",
                                    // maxHeight: "600px",
                                    // maxWidth: "960px",
                                    width: "70%",
                                    height: "auto",
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    margin: "auto"
                                }}
                            />
                            <br></br> */}
                            <br></br>
                            <br></br>
                            <Form onSubmit={this.toggleCodeControl}>
                                <Button
                                    color={this.state.codeControlBtnColor}
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
                                    {this.state.codeControlText}
                                </Button>
                            </Form>
                            <br></br>
                            <br></br>
                            <div style={{
                                    position: "relative",
                                    textAlign: "center",
                                    // maxWidth: "960px", //h:600
                                    width: "70%",
                                    height: "38vw",
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    margin: "auto",
                                    // display: "inline-block",
                                    borderStyle: "double",
                                    borderWidth: "5px",
                                    borderColor: "#999",
                                    borderRadius: "8px"
                                }}
                            >
                                {this.state.loadCodeControl === true && <Unity unityContent={this.unityContent} /> }
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{
                                    position: "relative",
                                    textAlign: "center",
                                    width: "95%",
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
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <a
                                    href='https://github.com/Ruslan-Pantaev/3d_regl_vis_env'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#666" }}
                                >
                                    <h6 style={{
                                        color: "#666",
                                        width: "200px",
                                        textAlign: "center",
                                        borderStyle: "outset",
                                        borderWidth: "5px",
                                        borderColor: "#999",
                                        borderRadius: "8px",
                                        padding: "10px",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        margin: "auto"
                                    }}>Git Repo Link</h6>
                                </a>
                                <br></br>
                                <br></br>
                                <Iframe url="https://ruslan-pantaev.github.io/3d_regl_vis_env/"
                                    width="70%"
                                    height="50vw"
                                    // id="myId"
                                    // className="myClassname"
                                    display="initial"
                                    position="relative"
                                    allowFullScreen/>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{
                                    position: "relative",
                                    textAlign: "center",
                                    width: "95%",
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
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <a
                                    href='https://github.com/Ruslan-Pantaev/RPmatrix'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#666" }}
                                >
                                    <h6 style={{
                                        color: "#666",
                                        width: "200px",
                                        textAlign: "center",
                                        borderStyle: "outset",
                                        borderWidth: "5px",
                                        borderColor: "#999",
                                        borderRadius: "8px",
                                        padding: "10px",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        margin: "auto"
                                    }}>Git Repo Link</h6>
                                </a>
                                <br></br>
                                <br></br>
                                <ReactPlayer
                                    url="https://youtu.be/FHL3sajrMYc"
                                    width="70%"
                                    height="35vw"
                                    controls
                                    style={{
                                        // position: "relative",
                                        textAlign: "center",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        margin: "auto"
                                    }}/>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{
                                    position: "relative",
                                    textAlign: "center",
                                    width: "95%",
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
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=7wmJ4Xb8Zrc"
                                    width="70%"
                                    height="35vw"
                                    controls
                                    style={{
                                        // position: "relative",
                                        textAlign: "center",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        margin: "auto"
                                    }}/>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                            <br></br>
                            <br></br>
                            {/* <div style={{
                                    position: "relative",
                                    textAlign: "center",
                                    width: "95%",
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
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=s37K4-Wfbzw"
                                    width="70%"
                                    height="35vw"
                                    controls
                                    style={{
                                        // position: "relative",
                                        textAlign: "center",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        margin: "auto"
                                    }}/>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                            <br></br>
                            <br></br> */}
                            <div style={{
                                    position: "relative",
                                    textAlign: "center",
                                    width: "95%",
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
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <div style={{
                                        maxWidth: "900px",
                                        minWidth: "200px",
                                        width: "70vw",
                                        height: "auto",
                                        textAlign: "center",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        margin: "auto"
                                    }}
                                >
                                    <Gist id='b02aeafbd8bfebf8d0be41584e6f5da0' />
                                </div>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                            <br></br>
                            <br></br>
                            {/* <div style={{
                                    position: "relative",
                                    textAlign: "center",
                                    width: "95%",
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
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <div style={{
                                        maxWidth: "900px",
                                        minWidth: "200px",
                                        width: "70vw",
                                        height: "auto",
                                        textAlign: "center",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        margin: "auto"
                                    }}
                                >
                                    <Gist id='1ee7161792a2f082edf648a0a71e23e5' />
                                </div>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{
                                    position: "relative",
                                    textAlign: "center",
                                    width: "95%",
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
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <div style={{
                                        maxWidth: "900px",
                                        minWidth: "200px",
                                        width: "70vw",
                                        height: "auto",
                                        textAlign: "center",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        margin: "auto"
                                    }}
                                >
                                    <Gist id='441e6464c95d50802bc9d818ef3ef466' />
                                </div>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                            <br></br>
                            <br></br> */}
                            <div style={{
                                    position: "relative",
                                    textAlign: "center",
                                    width: "95%",
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
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <section 
                                    style={{
                                        // width:"100%",
                                        position: "relative",
                                        color: "#000",
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
                                        borderStyle: "solid",
                                        borderWidth: "1px",
                                        borderColor: "#999",
                                        borderRadius: "8px",
                                        padding: "10px",
                                        backgroundColor: "rgba(181, 183, 183, 0.1)"
                                        }}
                                >
                                    <h3>Title:</h3>
                                    <p>arpiseaQ - The Walking City</p>
                                    <h3>Authors:</h3>
                                    <p>3d Visualization forked from Taylor Baldwin (git user rolyatmax)'s audiofabric repo.</p>
                                    <p>All music is written, mixed and engineered by Ruslan Pantaev under the arpiseaQ alias. 
                                        You can find "The Walking City" album on Spotify, Tidal and iTunes.</p>
                                    <br></br>
                                    <a
                                        href='https://github.com/Ruslan-Pantaev/audiofabric-walkingcity'
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "#666" }}
                                    >
                                        <h6 style={{
                                            color: "#666",
                                            width: "200px",
                                            textAlign: "center",
                                            borderStyle: "outset",
                                            borderWidth: "5px",
                                            borderColor: "#999",
                                            borderRadius: "8px",
                                            padding: "10px",
                                            top: 0,
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            margin: "auto"
                                        }}>Git Repo Link</h6>
                                    </a>
                                    <br></br>
                                    <br></br>
                                    <h3>Compatibility:</h3>
                                    <p>Latest Stable Releases of Safari and Chrome are recommended</p>
                                    <p>Currently not supported on mobile platforms</p>
                                </section>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <Iframe url="https://ruslan-pantaev.github.io/audiofabric-walkingcity/"
                                    width="70%"
                                    height="1165px"
                                    // id="myId"
                                    // className="myClassname"
                                    display="initial"
                                    position="relative"
                                    allowFullScreen/>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <footer className="footerClass">
                                <div id="footerLinks">
                                    <a href="https://github.com/Ruslan-Pantaev" target="_blank" rel="noopener noreferrer"> <img alt="gitHub" src={require("../../assets/socialMediaIcons/Github.png")} /></a>
                                    <a href="https://www.linkedin.com/in/ruslan-pantaev-482579b8" target="_blank"rel="noopener noreferrer"> <img alt="linkedin" src={require("../../assets/socialMediaIcons/Linkedin.png")} /></a> 
                                    <a href="https://www.instagram.com/arpiseaQ/" target="_blank"rel="noopener noreferrer"> <img alt="instagram" src={require("../../assets/socialMediaIcons/Instagram.png")} /></a> 
                                    <a href="https://baltosequoia.deviantart.com" target="_blank" rel="noopener noreferrer"> <img alt="deviantart" src={require("../../assets/socialMediaIcons/Deviantart.png")} /></a> 
                                    <a href="https://soundcloud.com/ruslanpantaev" target="_blank" rel="noopener noreferrer"> <img alt="soundcloud" src={require("../../assets/socialMediaIcons/Soundcloud.png")} /></a>
                                </div>
                                <br></br>
                                <p id="footerSig" style={{color: "#666"}}>Ruslan Pantaev &copy; 2019</p>
                            </footer>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;