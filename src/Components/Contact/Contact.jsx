import React, { useState } from "react";
import { Container } from "@mui/material";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  // Use React state instead of DOM manipulation
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
    interests: {
      webDesign: false,
      mvp: false,
      mobileApp: false,
      other: false,
    },
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      interests: {
        ...formData.interests,
        [name]: checked,
      },
    });
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  // Reusable input field component
  const FormField = ({
    label,
    name,
    value,
    onChange,
    placeholder = "Type here",
  }) => (
    <div className="w-full mb-6">
      <label className="block text-headColor font-semibold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="block w-full py-2 text-sm text-gray-300 bg-transparent border-0 border-b-2 border-[#363636] focus:outline-none focus:ring-0 focus:border-textColor/80 transition-colors"
        placeholder={placeholder}
      />
    </div>
  );

  const CheckboxField = ({ label, name, checked, onChange }) => (
    <label className="flex items-center cursor-pointer mb-2">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <div className="w-4 h-4 bg-[#363636] rounded-sm flex items-center justify-center">
        {checked && (
          <svg
            className="w-3 h-3 text-green-300 pointer-events-none"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <span className="ml-2 text-textColor text-sm font-light">{label}</span>
    </label>
  );

  return (
    <Container maxWidth="lg" className="h-screen h-dvh py-6 md:py-10">
      <section id="contact" className="mb-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-center text-headColor font-bold tracking-tighter mb-6">
          Contact Us
        </h1>

        <div className="border rounded border-[#262626ac] p-3 flex items-center md:float-right md:mt-[-40px] md:mr-4 lg:mr-8 mb-3">
          <p className="text-white flex flex-row items-center pr-2">
            Stay Connected
          </p>
          <div className="flex space-x-2 md:space-x-4">
            <FaFacebook className="text-buttonBgColor h-8 w-8 p-2 bg-gradient-to-b from-[#2E2E2E] to-black rounded hover:text-navlinkHoverColor cursor-pointer transition-colors duration-300" />
            <FaInstagram className="text-buttonBgColor h-8 w-8 p-2 bg-gradient-to-b from-[#2E2E2E] to-black rounded hover:text-navlinkHoverColor cursor-pointer transition-colors duration-300" />
            <FaLinkedin className="text-buttonBgColor h-8 w-8 p-2 bg-gradient-to-b from-[#2E2E2E] to-black rounded hover:text-navlinkHoverColor cursor-pointer transition-colors duration-300" />
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-[#2626267c] mb-8 clear-both" />

      <form onSubmit={handleSubmit} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#24242480] border border-[#262626] pt-4 pb-1 px-8 rounded-lg">
                <FormField
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="bg-[#24242480] border border-[#262626] pt-4 pb-1 px-8 rounded-lg">
                <FormField
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="w-full bg-[#24242480] border border-[#262626] py-4 px-8 rounded-lg">
              <h2 className="text-lg text-headColor font-bold mb-4">
                Why are you contacting us?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <CheckboxField
                  label="Web Design"
                  name="webDesign"
                  checked={formData.interests.webDesign}
                  onChange={handleCheckboxChange}
                />
                <CheckboxField
                  label="MVP"
                  name="mvp"
                  checked={formData.interests.mvp}
                  onChange={handleCheckboxChange}
                />
                <CheckboxField
                  label="Mobile App Development"
                  name="mobileApp"
                  checked={formData.interests.mobileApp}
                  onChange={handleCheckboxChange}
                />
                <CheckboxField
                  label="Other"
                  name="other"
                  checked={formData.interests.other}
                  onChange={handleCheckboxChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#24242480] border border-[#262626] pt-4 pb-1 px-8 rounded-lg">
                <FormField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="bg-[#24242480] border border-[#262626] pt-4 pb-1 px-8 rounded-lg">
                <FormField
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="bg-buttonBgColor hover:bg-[#009dda] text-white py-2 px-6 rounded w-full max-w-xs transition-colors duration-300 mt-8"
              >
                Submit
              </button>
              <p className="text-textColor text-xs mt-16">
                Operating Days{" "}
                <span className="bg-white bg-opacity-15 font-light rounded px-3 py-2 ml-2">
                  Monday to Friday
                </span>
              </p>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="h-[40%] flex flex-col justify-start gap-6 border-l-[6px] border-buttonBgColor pl-4">
              <div className="flex">
                <div className="flex flex-col bg-[#262626] bg-opacity-95 py-4 px-8 rounded-lg">
                  <div className="flex items-center">
                    <svg
                      className="w-8 h-8 text-buttonBgColor"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                      />
                    </svg>
                    <a
                      href="tel:+918688281821"
                      className="hover:underline text-textColor text-lg pl-3 font-outlet"
                    >
                      +91 8688281821
                    </a>
                  </div>
                  <div className="flex items-center mt-2">
                    <svg
                      className="w-8 h-8 text-buttonBgColor"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                      />
                    </svg>
                    <a
                      href="tel:+919502414128"
                      className="hover:underline text-textColor text-lg pl-3 font-outlet"
                    >
                      +91 9502414128
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="flex bg-[#262626] bg-opacity-95 py-4 px-8 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 text-buttonBgColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <a
                    href="mailto:contact@webortex.com"
                    className="hover:underline text-textColor pl-3 font-outlet"
                  >
                    contact@webortex.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default Contact;
