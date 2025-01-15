import React from "react";
import { Container } from "@mui/material";
import {
  Email,
  Phone,
  Facebook,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import Webortexlogo2 from "../../assets/Webortexlogo2.png";
import bgVideo from "../../assets/bgcta.mp4";
import arrow from "../../assets/arrow.png";

const Footer = () => {
  return (
    <div className="bg-backgroundColor text-white">
      <Container maxWidth="xl" className="px-2 md:px-8 lg:px-24">
        <div className="flex flex-col items-center px-4 md:px-8 lg:px-12">
          <div className="relative w-full overflow-hidden p-4 sm:p-8 mb-10 sm:mb-20 rounded-lg sm:rounded-xl lg:rounded-3xl">
            <video
              className="absolute top-0 left-0 w-full h-full"
              style={{ objectFit: "cover", mixBlendMode: "hard-light" }}
              src={bgVideo}
              autoPlay
              loop
              muted
            />
            <div className="relative z-10 text-center">
              <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
                <h2 className="font-outlet text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2">
                  Become part of Webortex
                </h2>
              </div>
              <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 mx-auto">
                <p className="font-outlet font-normal text-sm sm:text-md lg:text-lg mb-6 sm:mb-12">
                  Jump on a membership and start requesting designs right away!
                </p>
              </div>
              <button
                className="bg-white text-backgroundColor text-sm sm:text-md md:text-lg lg:text-xl font-outlet font-medium text-[14px] md:text-[16px] leading-[26px] py-2 sm:py-3 md:py-4 px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 rounded-md hover:bg-white/80 transition-colors duration-300 flex items-center justify-center mx-auto capitalize"
                onClick={() => (window.location.href = "/contact")}
              >
                join
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 ml-2 sm:ml-3 md:ml-4"
                />
              </button>
            </div>
          </div>
        </div>
      </Container>
      <div className="w-full bg-[#0A0E10] py-8">
        <Container maxWidth="xl">
          <div className="flex flex-col md:flex-row justify-center text-center md:justify-between w-full mb-8 md:items-start gap-y-3 md:gap-y-0">
            <div className="flex flex-col justify-center text-center md:text-left w-full md:w-1/2 lg:w-1/3">
              <img
                src={Webortexlogo2}
                alt="Webortex Logo"
                className="mb-3 md:mb-4 mx-auto md:mx-0 md:ml-[30px]"
                style={{ width: "60%" }}
              />
              <p className="font-outlet text-center md:text-left mb-4 md:ml-12 md:text-left font-light text-[14px] md:text-[14px] md:text-[16px] leading-[26px]">
                the leading digital agency based in India, working with top-tier
                clients from start-ups to enterprises.
              </p>
            </div>
            <div className="justify-items-center md:justify-items-start md:items-start md:mr-10 font-outlet font-light text-[14px] md:text-[16px] leading-[26px]">
              <div className="items-center mb-2 md:mb-4">
                <Email className="md:mr-2" />
                <a
                  href="mailto:contact@webortex.com"
                  className="hover:underline"
                >
                  contact@webortex.com
                </a>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="md:mr-2" />
                <a href="tel:+918688281821" className="hover:underline">
                  +91 8688281821
                </a>
              </div>
              <div className="flex space-x-2 md:space-x-4">
                <Facebook className="text-dimgray hover:text-navlinkHoverColor cursor-pointer transition-colors duration-300" />
                <Instagram className="text-dimgray hover:text-navlinkHoverColor cursor-pointer transition-colors duration-300" />
                <LinkedIn className="text-dimgray hover:text-navlinkHoverColor cursor-pointer transition-colors duration-300" />
              </div>
            </div>
          </div>
          <div className="w-fulls border-t border-gray-500 mb-4 "></div>
          <div className="flex flex-col md:flex-row justify-between w-full items-center font-outlet font-normal text-[14px] md:text-[16px] leading-[26px] gap-y-4 md:gap-y-0 text-center mt-8 md:mt-0">
            <div className="flex md:ml-8 flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5">
              <a
                href="#"
                className="hover:text-navlinkHoverColor cursor-pointer"
              >
                Services
              </a>
              <a
                href="#"
                className="hover:text-navlinkHoverColor cursor-pointer"
              >
                Works
              </a>
              <a
                href="#"
                className="hover:text-navlinkHoverColor cursor-pointer"
              >
                Pricing
              </a>
              <a
                href="#"
                className="hover:text-navlinkHoverColor cursor-pointer"
              >
                FAQ
              </a>
              <a
                href="#"
                className="hover:text-navlinkHoverColor cursor-pointer"
              >
                Contact
              </a>
            </div>
            <div className="text-center md:text-right mt-4 md:mr-5 md:mt-0">
              <p>webortex © 2025 - All Right Reserved</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
