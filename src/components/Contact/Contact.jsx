import React, { useState } from "react";
import emailjs from "emailjs-com";

const isValidEmail = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message && isValidEmail(email)) {
      const serviceId = process.env.REACT_APP_SERVICE_ID;
      const templateId = process.env.REACT_APP_TEMPLATE_ID;
      const userId = process.env.REACT_APP_USER_ID;
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div id="contact-form">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={submit}>Send Message</button>
      <span className={emailSent ? "visible" : null}>
        "Thank you for your message, we will be in touch in no time!"
      </span>
    </div>
  );
};

export default Contact;

// import React from "react";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
// import {
//   Container,
//   FormWrap,
//   FormContent,
//   Form,
//   FormH1,
//   FormLabel,
//   FormInput,
//   FormButton,
// } from "./ContactElements";

// const Contact = () => {
//   return (
//     <>
//       <Navbar />
//       <Container>
//         <FormWrap>
//           <FormContent>
//             <Form action="#">
//               <FormH1>Contact me!</FormH1>
//               <FormLabel htmlFor="for">Name</FormLabel>
//               <FormInput type="name" required />
//               <FormLabel htmlFor="for">Email</FormLabel>
//               <FormInput type="email" required />
//               <FormLabel htmlFor="for">Message</FormLabel>
//               <FormInput type="message" required />
//               <FormButton type="submit">Submit</FormButton>
//             </Form>
//           </FormContent>
//         </FormWrap>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default Contact;
