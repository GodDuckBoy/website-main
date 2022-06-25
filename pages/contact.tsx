import React from "react";
import ContactLink from "../components/ContactLink";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { contactInfo } from "../lib/content";

const Contact = () => {
  return (
    <div className="dark:bg-black">
      <Header title="Get in touch | Sea Tawinan" />
      <Nav name="contact" />
      <div className="flex flex-col min-h-screen">
        <h2 className="w-10/12 md:w-9/12 lg:w-8/12 mx-auto text-3xl md:text-5xl font-bold pt-36 dark:text-white">
          Get in Touch
        </h2>
        <div className="w-10/12 md:w-9/12 lg:w-8/12  mx-auto flex flex-col justify-center">
          <br />
          <div className="text-darkgrey dark:text-grey font-semibold mb-4 md:text-xl">
            {"PRIMARY"}
          </div>
          <div className="">
            {contactInfo.primary.map((item, index) => {
              return <ContactLink key={index} data={item} />;
            })}
          </div>
          <br />
          <div className="text-darkgrey dark:text-grey font-semibold mb-4 md:text-xl">
            {"SOCIAL"}
          </div>
          <div className="grid grid-cols-4 sm:flex sm:flex-row">
            {contactInfo.social.map((item, index) => {
              return <ContactLink key={index} data={item} />;
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
