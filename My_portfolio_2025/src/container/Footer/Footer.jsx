import React, { useState } from "react";
import { images } from "../../constants/index";
import { AppWrap, MotionWrap } from "../../wrapper/index";
import { client } from "../../client";
import { ToastContainer, toast } from 'react-toastify';

import "./Footer.scss";
function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    if(name==="" || email==="" || message==="")
    {
      event.preventDefault();
      toast.error("Please fill all the field!!!!")
    }
    else{

      client.create(contact).then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      });
    }
  };
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:rosansenapati46@gmail.com" className="p-text">
            rosansenapati46@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+91-7735113188" className="p-text">
            +91-7735113188
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex ">
            <input
              type="text"
              className="p-text"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex ">
            <input
              type="email"
              className="p-text"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank You for getting in touch</h3>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
