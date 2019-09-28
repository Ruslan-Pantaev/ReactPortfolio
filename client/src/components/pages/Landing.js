import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import Particles from 'react-particles-js';
import { Tween } from 'react-gsap';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import Gist from 'react-gist';
import './Menu.css';


// import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button, Alert } from 'reactstrap';
import './Footer.css';
import Axios from 'axios';


class Landing extends Component {
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
      await Axios.post('/api/form', {
          name,
          email,
          message
      })
  }

  onDismiss() {
      this.setState({ alert: false });
      // setTimeout(() => {
          window.location.reload()
      // }, 1000);
  }

    // constructor(props) {
    //     super(props);
    //     // this.state = { width: 0, height: 0 };
    //     // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    // }
      
    // componentDidMount() {
    //     this.updateWindowDimensions();
    //     window.addEventListener('resize', this.updateWindowDimensions);
    // }
    
    // componentWillUnmount() {
    //     window.removeEventListener('resize', this.updateWindowDimensions);
    // }
    
    // updateWindowDimensions() {
    //     this.setState({ width: window.innerWidth, height: window.innerHeight });
    // }

    // renderMenu() {
    //   if (this.state.width < 600) {
    //     return (
    //       <Menu
    //         right
    //         customBurgerIcon={ <img src={require("../../assets/menu/thin_burger_light.png")} alt={""} /> }
    //         customCrossIcon={ <img src={require("../../assets/menu/round_cross.png")} alt={""} /> }
    //         pageWrapId={ "page-wrap" }
    //         outerContainerId={ "outer-container" }
    //         style={{ outline: "none" }}
    //       >
    //           {/* <ul style={{ outline: "none", listStyle: "none" }}>
    //               <li><a style={{color: '#666'}} href="/">Home</a></li>
    //               <li><a style={{color: '#fff'}} href="/about">About</a></li>
    //               <li><a style={{color: '#fff'}} href="/projects">Projects</a></li>
    //               <li><a style={{color: '#fff'}} href="/contact">Contact</a></li>
    //           </ul> */}

    //           <ul style={{ outline: "none", listStyle: "none" }}>
    //               <li><Link style={{color: '#666'}} to="/">Home</Link></li>
    //               <li><Link style={{color: '#fff'}} to="/about">About</Link></li>
    //               <li><Link style={{color: '#fff'}} to="/projects">Projects</Link></li>
    //               <li><Link style={{color: '#fff'}} to="/contact">Contact</Link></li>
    //           </ul>
    //       </Menu>
    //     );
    //   } else {
    //     return (
    //       <div style={{ display: "inlineBlock", padding: "10px", outline: "none", position: "fixed", zIndex: 10, left: "50%", transform: "translateX(-50%)" }}>
    //         <Link style={{ color: '#000', marginRight: "20px" }} to="/">Home</Link>
    //         <Link style={{ color: '#666', marginRight: "20px"}} to="/about">About</Link>
    //         <Link style={{ color: '#666', marginRight: "20px"}} to="/projects">Projects</Link>
    //         <Link style={{ color: '#666', marginRight: "0px"}} to="/contact">Contact</Link>
    //       </div>
    //     );
    //   }
    // }

    render() {
        // console.log(this.state.width)
        

        return (
          // <StickyContainer>
          //   <Sticky>
          //     <div style={{ height: "100vh", backgroundColor: "666" }}>
          //       <p>Landing</p>
          //     </div>
          //   </Sticky>

          //   <Sticky>
          //     <div style={{ height: "100vh", backgroundColor: "blue" }}>
          //       <p>About</p>
          //     </div>
          //   </Sticky>
          // </StickyContainer>
          // <div>
          
          <div>
          
            <div style={{ height: "100vh", backgroundColor: "rgba(200, 200, 200, 0)", position: "relative" }}>
            <img
                src={require("../../assets/images/arch4.jpg")}
                // src={require("../../assets/images/arch4.jpg")}
                alt={""}
                style={{
                    position: "fixed",
                    overflow: "hidden",
                    textAlign: "center",
                    // height: "calc(100vmax + 100vmax)",
                    height: "100vh",
                    width: "100vw",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    // objectFit: "fill",
                    // display: "inline-block",
                    opacity: 1,
                    // zIndex: -1
                }}
            />
              <span style={{
                  position: "absolute",
                  textAlign: "center",
                  width: "60%",
                  height: "auto",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  margin: "auto",
                  opacity: 1
              }}>
                <Tween
                    wrapper={
                        <svg xmlns="http://www.w3.org/2000/svg"
                        width="100%" height="100%"
                        viewBox="0 0 800 600"/>
                    }
                    from={{
                    svgDraw: 0
                    }}
                    to={{
                    svgDraw: 1
                    }}
                    duration={7}
                >
                    {/* rp */}
                    <path fill="none" stroke="#eee" /*"#be1a1a"*/ strokeWidth="3" d="M 250 400 L 300 300 A 100 50 0 1 1 300 150 L 350 450 L 450 450 L 500 150 A 100 50 0 1 1 500 300" />
                </Tween>
              </span>
              <span style = {{ width:"100%", position: "absolute" }}>
                <Particles
                  params={{
                      // fps_limit: 28,
                      particles: {
                          color: {
                              value: "#ccc"
                          },
                          number: {
                              // value: this.state.width/40 + this.state.height/60,
                              value: 20,
                              density: {
                                  enable: false,
                                  // value_area: 10
                              }
                          },
                          size: {
                              value: 3
                          },
                          move: {
                              enable: true,
                              direction: "right",
                              random: true,
                              straight: true,
                              speed: 2,
                              out_mode: "out"
                          },
                          line_linked: {
                              enable: true,
                              distance: 160,
                              opacity: 1,
                              color: "#fff"
                              // color: "#be1a1a" //red
                              // color: "#09aaed" //blue
                          }
                      },
                      interactivity: {
                          events: {
                              onhover: {
                                  enable: true,
                                  mode: "bubble"
                              },
                              onclick: {
                                  enable: true,
                                  mode: "repulse"
                              }
                          },
                          modes: {
                              bubble: {
                                  size: 5,
                                  distance: 100,
                                  opacity: 0.8,
                                  duration: 5
                              },
                              repulse: {
                                  distance: 100,
                                  duration: 0.5
                              },
                              grab: {
                                  line_linked: {
                                      opacity: 0.8
                                  },
                                  distance: 300
                              }
                          }
                      },
                      retina_detect: true
                    }}
                    height={"100vh"}
                  />
              </span>
            </div>

            {/* ABOUT */}
            <div style={{ height: "auto", backgroundColor: "rgba(200, 200, 200, 0.2)", position: "relative" }}>
              {/* <img
                  src={require("../../assets/images/water1.JPG")}
                  // src={require("../../assets/images/arch4.jpg")}
                  alt={""}
                  style={{
                      position: "absolute",
                      overflow: "hidden",
                      textAlign: "center",
                      // height: "calc(100vmax + 100vmax)",
                      height: "100vh",
                      width: "100vw",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      margin: "auto",
                      // objectFit: "fill",
                      // display: "inline-block",
                      opacity: 1,
                      // zIndex: 1
                  }}
              /> */}
                    <br></br>
                    <br></br>
                    <h1 style={{ textAlign: "center", color: "#fff" }}>About</h1>
                    <br></br>
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
                            // backgroundColor: "rgba(200, 200, 200, 1)",
                            backgroundColor: "#777",
                            borderStyle: "groove",
                            borderWidth: "1px",
                            borderColor: "#999",
                            borderRadius: "8px",
                            padding: "10px",
                            color: "#fff",
                            opacity: 0.9
                            }}
                    >
                        <p>I am a dedicated and collaborative Full-Stack Software Engineer with successful experience architecting, building and deploying projects on time and according to specifications. I enjoy the challenge of solving problems while collaborating with and learning from team members. Independently, I exercise continuous integration and automated testing.</p>
                    </section>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>

                {/* PROJECTS */}
                <div
                    id="page-wrap"
                    style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "auto/9",
                        height: "auto",
                        margin: "auto",
                        backgroundColor: "#ddd"
                        // backgroundColor: "rgba(100, 100, 100, 1)"
                        // backgroundImage: "radial-gradient(circle, rgba(2,0,36,1) 3%, rgba(0,212,255,1) 31%, rgba(9,9,121,1) 74%)"
                    }}
                >
                  {/* <img
                        src={require("../../assets/images/arch2.jpg")}
                        // src={require("../../assets/images/arch4.jpg")}
                        alt={""}
                        style={{
                            position: "fixed",
                            overflow: "hidden",
                            textAlign: "center",
                            // height: "calc(100vmax + 100vmax)",
                            height: "100vh",
                            width: "100vw",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            margin: "auto",
                            // objectFit: "fill",
                            // display: "inline-block",
                            opacity: 1,
                            zIndex: -10
                        }}
                    /> */}
                    <div style={{
                        // width:"100%",
                        position: "relative",
                        color: "#000",
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
                        {/* <img
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
                        <br></br>
                        <br></br> */}
                        <br></br>
                        <br></br>
                        <h1>Projects</h1>
                        <br></br>
                        <br></br>
                        <div style={{
                                position: "relative",
                                textAlign: "center",
                                overflow: "hidden",
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
                                    backgroundColor: "rgba(200, 200, 200, 0.8)",
                                    // backgroundColor: "rgba(181, 183, 183, 0.1)"
                                }}
                            >
                                <h3>Title:</h3>
                                <p>Code Control 2019 3D Beta: A Game for Teaching Introductory Programming</p>
                                <h3>Authors:</h3>
                                <p>Inspired by Kwan Holloway's and Mike Williams' original Code Control project</p>
                                <p>(In alphabetical order): Devorah Kletenik, Ruslan Pantaev (Lead Developer) and Deborah Sturm</p>
                                {/* <a
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
                                </a> */}
                                <br></br>
                                <h3>Compatibility:</h3>
                                <p>Currently not supported on mobile platforms</p>
                                <p>Requires Latest Stable Release of Google Chrome or Firefox and webGL 2.0 compliant GPUs</p>
                                <br></br>
                                <br></br>
                                <a href="/codecontrol2019" target="_blank" rel="noopener noreferrer">
                                    <h3 style={{
                                        color: "#000",
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
                                    }}>
                                        Launch Code Control 2019 3D
                                    </h3>
                                </a>
                                <br></br>
                                <br></br>
                            </section>
                        </div>
                        {/* <br></br>
                        <br></br>
                        <div style={{
                                position: "relative",
                                textAlign: "center",
                                overflow: "hidden",
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
                        > */}
                            {/* <section 
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
                                <p>Code Control 2D: A Game for Teaching Introductory Programming</p>
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
                                <br></br>
                                <br></br>
                                <a href="/codecontrol" target="_blank" rel="noopener noreferrer">
                                    <h3 style={{
                                        color: "#000",
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
                                    }}>
                                        Launch Code Control 2D
                                    </h3>
                                </a>
                                <br></br>
                                <br></br>
                            </section> */}
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
                        {/* </div> */}
                        <br></br>
                        <br></br>
                        <div style={{
                                position: "relative",
                                textAlign: "center",
                                overflow: "hidden",
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
                                    // height: "auto",
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
                                height="750px"
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
                        {/* <br></br>
                        <br></br>
                        <div style={{
                                position: "relative",
                                textAlign: "center",
                                overflow: "hidden",
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
                        </div> */}
                        {/* <br></br>
                        <br></br>
                        <div style={{
                                position: "relative",
                                textAlign: "center",
                                overflow: "hidden",
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
                                url="https://youtube.com/watch?v=7wmJ4Xb8Zrc"
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
                        </div> */}
                        <br></br>
                        <br></br>
                        <div style={{
                                position: "relative",
                                textAlign: "center",
                                overflow: "hidden",
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
                                    overflow: "hidden",
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
                        <div style={{
                                position: "relative",
                                textAlign: "center",
                                overflow: "hidden",
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
                                    overflow: "hidden",
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
                                    backgroundColor: "rgba(200, 200, 200, 0.8)",
                                    // backgroundColor: "rgba(181, 183, 183, 0.1)"
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
                                    href="https://ruslan-pantaev.github.io/audiofabric-walkingcity/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#666" }}
                                >
                                    <h6 style={{
                                        color: "#000",
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
                                    }}>See it in action here</h6>
                                </a>
                                <br></br>
                                <br></br>
                                <h3>Compatibility:</h3>
                                <p>Latest Stable Releases of Safari and Chrome are recommended</p>
                                <p>Currently not supported on mobile platforms</p>
                            </section>
                            {/* <br></br>
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
                            <br></br> */}
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                  </div>


                {/* CONTACT */}
                <div
                    id="page-wrap"
                    style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "auto/9",
                        height: "auto",
                        margin: "auto",
                        // backgroundImage: "radial-gradient(circle, #666666, #4c4c4c, #343434, #1d1d1d, #000000)"
                        backgroundColor: "rgba(200, 200, 200, 0)"
                    }}
                >
                    <img
                        src={require("../../assets/images/paper_black.jpg")}
                        // src={require("../../assets/images/arch4.jpg")}
                        alt={""}
                        style={{
                            position: "absolute",
                            overflow: "hidden",
                            textAlign: "center",
                            // height: "calc(100vmax + 100vmax)",
                            height: "100%",
                            width: "100%",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            margin: "auto",
                            // objectFit: "fill",
                            // display: "inline-block",
                            opacity: 1,
                            // zIndex: 1
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
                            <Button color="info">Submit</Button>
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
                            <a href="https://www.instagram.com/ruslan_pantaev/" target="_blank"rel="noopener noreferrer"> <img alt="instagram" src={require("../../assets/socialMediaIcons/Instagram.png")} /></a> 
                            <a href="https://baltosequoia.deviantart.com" target="_blank" rel="noopener noreferrer"> <img alt="deviantart" src={require("../../assets/socialMediaIcons/Deviantart.png")} /></a> 
                            <a href="https://soundcloud.com/ruslanpantaev" target="_blank" rel="noopener noreferrer"> <img alt="soundcloud" src={require("../../assets/socialMediaIcons/Soundcloud.png")} /></a>
                        </div>
                        <br></br>
                        <p id="footerSig" style={{color: "#fff"}}>Ruslan Pantaev &copy; 2019</p>
                    </footer>
                    <br></br>
                    <br></br>
                </div>
            </div>
        );
    }
}

export default Landing;
