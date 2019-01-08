import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Tween } from 'react-gsap';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './Menu.css';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-87922163-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
      
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        // console.log(this.state.width)
        return (
            <div id="outer-container" style={{ overflow: "hidden" }}>
                <Menu
                    right
                    customBurgerIcon={ <img src={require("../../assets/menu/thin_burger_light.png")} alt={""} /> }
                    customCrossIcon={ <img src={require("../../assets/menu/round_cross.png")} alt={""} /> }
                    pageWrapId={ "page-wrap" }
                    outerContainerId={ "outer-container" }
                >
                    <ul style={{ outline: "none" }}>
                        <li><Link style={{color: '#fff'}} to="/">Home</Link></li>
                        <li><Link style={{color: '#aaeaff'}} to="/about">About</Link></li>
                        <li><Link style={{color: '#aaeaff'}} to="/cv">CV</Link></li>
                        <li><Link style={{color: '#aaeaff'}} to="/projects">Projects</Link></li>
                        <li><Link style={{color: '#aaeaff'}} to="/contact">Contact</Link></li>
                    </ul>
                </Menu>
                <div
                    id="page-wrap"
                    style={{
                        height:"100vh",
                        position: "relative",
                        // backgroundColor: "#666"
                        backgroundImage: "radial-gradient(circle, #bebebe, #a4a4a4, #8b8b8b, #737373, #5c5c5c, #4d4d4d, #3f3f3f, #313131, #272727, #1d1d1d, #141414, #060606)"
                    }}
                >
                    
                    <span style={{
                            // display: "inline-block",
                            // verticalAlign: "middle",
                            position: "absolute",
                            textAlign: "center",
                            // maxHeight: "40%",
                            // maxWidth: "40%",
                            width: "40%",
                            height: "40%",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            margin: "auto",
                            opacity: 1
                        }}>
                        {/* <Controls> */}
                        <Tween
                            wrapper={
                                <svg xmlns="http://www.w3.org/2000/svg"
                                width="100%" height="180%"
                                viewBox="0 0 800 1056"/>
                            }
                            from={{
                            svgDraw: 0, opacity: 0.5, y: '1000px'
                            }}
                            to={{
                            svgDraw: 1, opacity: 1, y: '0px'
                            }}
                            duration={8}
                        >
                            {/* not in use */}
                            {/* <path fill="#111111" stroke="#333333" stroke-width="250%" d="M41.40 0L41.40-49.61L34.56-49.61L34.56-28.87L14.40-28.87L14.40-49.61L7.56-49.61L7.56 0L14.40 0L14.40-23.26L34.56-23.26L34.56 0ZM82.58-44.14L83.38-49.61L56.52-49.61L56.52 0L83.95 0L83.95-5.47L63.36-5.47L63.36-22.46L80.06-22.46L80.06-27.94L63.36-27.94L63.36-44.14ZM121.82 0L122.62-5.98L102.24-5.98L102.24-49.61L95.40-49.61L95.40 0ZM158.04 0L158.83-5.98L138.46-5.98L138.46-49.61L131.62-49.61L131.62 0ZM203.76-24.77C203.76-41.62 195.34-50.47 183.17-50.47C171.00-50.47 162.58-41.26 162.58-24.70C162.58-7.85 171.00 0.86 183.17 0.86C195.34 0.86 203.76-8.21 203.76-24.77ZM196.49-24.77C196.49-10.22 191.23-4.75 183.17-4.75C175.32-4.75 169.85-10.15 169.85-24.70C169.85-39.24 175.10-44.86 183.17-44.86C191.23-44.86 196.49-39.31 196.49-24.77Z"/> */}
                            {/* <path fill="000000" stroke="#ffffff" stroke-width="1%" d="M 50 300 A 100 50 0 1 1 750 300 A 100 50 0 1 1 50 300" /> */}

                            {/* heart */}
                            {/* <path fill="#000000" stroke="#111" strokeWidth="1%" d="M 100 300 A 50 50 0 1 1 400 100 A 50 50 0 1 1 700 300 L 400 600 L 100 300" /> */}
                            <path fill="none" stroke="#ffffff" strokeWidth="1" d="M 100 300 A 50 50 0 1 1 400 100 A 50 50 0 1 1 700 300 L 400 600 L 100 300" />

                            {/* rp */}
                            <path fill="none" stroke="#be1a1a" strokeWidth="3" d="M 250 400 L 300 300 A 100 50 0 1 1 300 150 L 350 450 L 450 450 L 500 150 A 100 50 0 1 1 500 300" />
                        </Tween>
                        {/* </Controls> */}
                    </span>
                    <span style={{
                            // display: "inline-block",
                            // verticalAlign: "middle",
                            position: "absolute",
                            textAlign: "center",
                            // maxHeight: "40%",
                            // maxWidth: "40%",
                            width: "auto",
                            height: "auto",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            margin: "auto",
                            opacity: 1
                        }}>
                        {/* <Controls> */}
                        <Tween
                            wrapper={
                                <svg xmlns="http://www.w3.org/2000/svg"
                                width="100%" height="100%"
                                viewBox="0 0 820 620"/>
                            }
                            from={{
                            svgDraw: 1, opacity: 0.1
                            }}
                            to={{
                            svgDraw: 0, opacity: 1
                            }}
                            duration={7}
                        >
                            <path fill="none" stroke="#000" strokeWidth="300%" d="M 50 300 A 100 50 0 1 1 750 300 A 100 50 0 1 1 50 300" />
                        </Tween>
                        {/* </Controls> */}
                    </span>
                    
                    <Tween
                        from={{ x: '-2000px', rotation: 180, scale: 0.1, opacity: 0 }}
                        to={{ x: '0px', rotation: 0, scale: 1, opacity: 1 }}
                        // stagger={1}
                        duration={7}
                        repeat={0}
                        yoyo={true}
                        position="+=0"
                        ease="Back.easeOut"
                    >
                        <img
                            // width={"42%"}
                            src={require("../../assets/images/sphere3.png")}
                            alt={""}
                            style={{
                                position: "absolute",
                                textAlign: "center",
                                maxHeight: "90%",
                                maxWidth: "100%",
                                width: "80%",
                                height: "auto",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                margin: "auto",
                                opacity: 1
                            }}
                        />
                    </Tween>
                    
                    <Tween
                        from={{ x: '2000px', rotation: -45, scale: 0.1, opacity: 0 }}
                        to={{ x: '0px', rotation: 0, scale: 1, opacity: 1 }}
                        // stagger={1}
                        duration={7}
                        repeat={0}
                        yoyo={true}
                        position="+=0"
                        ease="Back.easeOut"
                    >
                    <span style = {{width:"100%", position: "absolute"}}>
                        <Particles
                            params={{
                                // fps_limit: 28,
                                particles: {
                                    color: {
                                        value: "#000"
                                    },
                                    number: {
                                        value: this.state.width/8 + this.state.height/12,
                                        density: {
                                            enable: false,
                                            // value_area: 10
                                        }
                                    },
                                    size: {
                                        value: 1
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
                                        distance: 65,
                                        opacity: 1,
                                        // color: "#be1a1a" //red
                                        color: "#09aaed" //blue
                                    }
                                },
                                interactivity: {
                                    events: {
                                        onhover: {
                                            enable: true,
                                            mode: "grab"
                                        }
                                    },
                                    modes: {
                                        bubble: {
                                            size: 20,
                                            distance: 120
                                        },
                                        repulse: {
                                            distance: 40
                                        },
                                        grab: {
                                            distance: 500
                                        }
                                    }
                                },
                                retina_detect: true
                            }}
                            height={"100vh"}
                        />
                    </span>
                    </Tween>
                    <Tween
                        from={{ y: '200px', rotation: 0, scale: 0.01, opacity: 0 }}
                        to={{ y: '0px', rotation: 0, scale: 1, opacity: 1 }}
                        // stagger={1}
                        duration={8}
                        repeat={0}
                        yoyo={true}
                        position="+=0"
                        ease="Back.easeOut"
                    >
                    <span style = {{width:"100%", position: "absolute"}}>
                        <Particles
                            params={{
                                // fps_limit: 28,
                                particles: {
                                    color: {
                                        value: "#111"
                                    },
                                    number: {
                                        value: this.state.width/15,
                                        density: {
                                            enable: false,
                                            // value_area: 10
                                        }
                                    },
                                    size: {
                                        value: 2
                                    },
                                    shape: {
                                        type: "image",
                                        image: {
                                            src: "/assets/images/3.svg",
                                            width: 50,
                                            height: 50
                                        }
                                    },
                                    line_linked: {
                                        enable: true,
                                        distance: 80,
                                        opacity: 0.3,
                                        color: "#ddd"
                                        // color: "#09aaed" //blue
                                        // color: "#be1a1a" //red
                                    },
                                    move: {
                                        speed: 2
                                    },
                                    opacity: {
                                        anim: {
                                            enable: true,
                                            opacity_min: 0.05,
                                            speed: 2,
                                            sync: false
                                        },
                                        value: 0.6
                                    }
                                },
                                polygon: {
                                    enable: true,
                                    scale: 1,
                                    type: "inline", // inside
                                    move: {
                                        radius: 100
                                    },
                                    url: "/assets/images/3.svg",
                                    inline: {
                                        arrangement: "random-point"//"equidistant"
                                    },
                                    draw: {
                                        enable: false,
                                        stroke: {
                                            color: "rgba(0,0,0,0.3)",
                                            width: 1
                                        }
                                    }
                                },
                                retina_detect: true,
                                interactivity: {
                                    events: {
                                        onhover: {
                                            enable: true,
                                            mode: "grab"
                                        },
                                        onclick: {
                                            enable: false,
                                            mode: "push"
                                        }
                                    },
                                    modes: {
                                        bubble: {
                                            size: 40,
                                            distance: 40,
                                            opacity: 0,
                                            // duration: 2
                                        },
                                        repulse: {
                                            distance: 40
                                        },
                                        grab: {
                                            line_linked: {
                                                opacity: 0.8
                                            },
                                            distance: 300
                                        }
                                    }
                                }
                            }}
                            height={"100vh"}
                        />
                    </span>
                    </Tween>
                    <Tween
                        from={{ x: '-2000px', rotation: 0, scale: 0.01, opacity: 0 }}
                        to={{ x: '0px', rotation: 0, scale: 1, opacity: 1 }}
                        // stagger={1}
                        duration={7}
                        repeat={0}
                        yoyo={true}
                        position="+=0"
                        ease="Back.easeOut"
                    >
                        <p
                            style={{
                                textAlign: "center",
                                color: "#999",
                                // fontFamily: "monospace",
                                position: "absolute",
                                bottom: 10,
                                width: "100%"
                                }}
                        >
                            Ruslan Pantaev &copy; 2019
                        </p>
                    </Tween>
                </div>
            </div>
        );
    }
}

export default Landing;
