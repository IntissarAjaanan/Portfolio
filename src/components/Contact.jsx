import { useState } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactWrapper = styled.div`
  padding: 50px 20px;
  color: #A64D79;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: auto;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #a64d79;
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: #a64d79;
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #a64d79;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9a416b;
  }
`;

const SocialLinksWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const IconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: #3B1C32;
  font-size: 1.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FFF2F2; 
  }
`;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all the fields.");
      return;
    }

    emailjs.send("service_ynyy3yi", "template_4ihv0af", formData, "wvZTPgEHRpt0powBW")
      .then(result => {
        toast.success("Thank you! Your message has been successfully sent.");
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      })
      .catch(error => {
        toast.error("Something went wrong. Please try again later.");
      });
  };


  return (
    <>
      <ContactWrapper>
        <Title>Contact Me</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
        <SocialLinksWrapper>
          <IconLink href="https://github.com/IntissarAjaanan/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/intissarajaanan/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </IconLink>
        </SocialLinksWrapper>
      </ContactWrapper>
      <ToastContainer />
    </>
  );
};
