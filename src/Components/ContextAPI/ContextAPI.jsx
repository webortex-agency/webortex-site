import React, { Component } from "react";

import gnana from "../../assets/Founders/Gnana.svg";
import sisi from "../../assets/Founders/Sisindri.svg";
import tharun from "../../assets/Founders/Tharun.svg";
import jaya from "../../assets/Founders/jayadeep.svg";
import ashok from "../../assets/Founders/Ashok.svg";
import sandeep from "../../assets/Founders/Sandeep.svg";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    navItems: [
      {
        id: 1,
        text: "Services",
        path: "#services",
        type: "section",
      },
      {
        id: 2,
        text: "Works",
        path: "#works",
        type: "section",
      },
      {
        id: 3,
        text: "Pricing",
        path: "#pricing",
        type: "section",
      },
      {
        id: 4,
        text: "Recruiting",
        path: "/recruiting",
        type: "page",
      },
    ],
    founders: [
      {
        id: 1,
        image: gnana,
        name: "K Gnana Sekhar",
        title: "CEO of webortex",
        quote:
          "As we stand on the threshold of a new chapter, I am filled with immense pride and excitement. Our journey has been marked by dedication, innovation, and a relentless pursuit of excellence.",
        src: "https://youtube.com",
      },
      {
        id: 2,
        image: sisi,
        name: "Sisindri Singamsetti",
        title: "COO of webortex",
        quote:
          "A passionate web developer and the co-founder of Webortex. With expertise in frontend and backend technologies like React, Tailwind CSS, Node.js, and Express.js, I focus on creating innovative, user-friendly solutions. My goal is to bridge the gap between education and industry by mentoring aspiring developers through real-time projects. Dedicated to learning and growth, I strive to deliver impactful digital experiences.",
        src: "https://www.sisindrisingamsetti.com",
      },
      {
        id: 3,
        image: tharun,
        name: "A Tharun",
        title: "CPO of webortex",
        quote:
          "Technology is the driving force behind our success, enabling us to create innovative solutions that transform businesses.",
        src: "https://x.com",
      },
      {
        id: 4,
        image: jaya,
        name: "P Jayadeep Reddy",
        title: "CTO of webortex",
        quote:
          "Technology is the driving force behind our success, enabling us to create innovative solutions that transform businesses.",
        src: "https://instagram.com",
      },
      {
        id: 5,
        image: ashok,
        name: "P Ashok",
        title: "CIO of webortex",
        quote:
          "Technology is the driving force behind our success, enabling us to create innovative solutions that transform businesses.",
        src: "https://linkedin.com",
      },
      {
        id: 6,
        image: sandeep,
        name: "K Sai Sandeep",
        title: "CLO of webortex",
        quote:
          "Technology is the driving force behind our success, enabling us to create innovative solutions that transform businesses.",
        src: "https://linkedin.com",
      },
    ],
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
