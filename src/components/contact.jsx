import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c86xblt",
        "template_7vg5heb",
        formRef.current,
        "1GjMFQg2BT7ju7DYh"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={formRef} onSubmit={sendEmail}>
        <label htmlFor="user_name">Enter your name</label>
        <input type="text" id="user_name" name="user_name" placeholder="Your Name" required />
        
        <label htmlFor="user_email">Enter your mail ID</label>
        <input type="email" id="user_email" name="user_email" placeholder="Your Email" required />
        
        <label htmlFor="message">Enter your message</label>
        <textarea id="message" name="message" placeholder="Your Message" required />
        
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 800px; /* Increased the width */
  margin: 40px auto 0; /* Added top margin for space */
  background-color: white;
  padding: 40px; /* Increased the padding */
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(217, 23, 109, 0.8); /* Outer glow effect */
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 30px rgba(217, 23, 109, 0.8); /* Increased glow effect on hover */
  }

  form {
    display: flex;
    flex-direction: column;
    font-size: 16px;

    label {
      margin-top: 1rem;
    }

    input,
    textarea {
      width: 100%;
      padding: 10px; /* Increased padding for input and textarea */
      margin-top: 0.5rem;
      border: 2px solid rgb(220, 220, 220); /* Changed border to 2px */
      border-radius: 5px;
      outline: none;
      transition: all 0.3s ease-in-out;

      &:focus {
        border: 2px solid #d9176d; /* Changed focus color to pink */
        box-shadow: 0 0 10px #d9176d; /* Added inner glow effect */
      }
    }

    textarea {
      resize: vertical;
      max-height: 300px; /* Increased max height */
      min-height: 150px; /* Increased min height */
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #d9176d; /* Changed background color to pink */
      color: white;
      border: none;
      border-radius: 5px;
      height: 50px; /* Increased height */
      font-size: 18px; /* Increased font size */
      transition: all 0.3s ease-in-out;

      &:hover {
        background: #ff69b4; /* Light pink color on hover */
        box-shadow: 0 0 20px #ff69b4; /* Glowing effect on hover */
      }
    }
  }
`;
