import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
} from "./ContactElements";

const Contact = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Return</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Contact me!</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput type="name" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Message</FormLabel>
              <FormInput type="message" required />
              <FormButton type="submit">Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
