import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm'

test("renders App without crashing", () => {
  render(<App />);
});

const breakMyApp = ()=> {
  throw new Error('Error has been created')
}

test('input field works', ()=> {
  render(<ContactForm/>)

  const firstName = screen.getByLabelText(/First Name*/i)
  const lastName = screen.getByLabelText(/Last Name*/i)
  const email = screen.getByLabelText(/email*/i)
  const message = screen.getByLabelText(/message*/i)
  
  expect(firstName).toBeTruthy()
  expect(lastName).toBeTruthy()
  expect(email).toBeTruthy()
  expect(message).toBeTruthy()

  fireEvent.change(firstName, {target: { value:'Nam'}})
  fireEvent.change(lastName, {target: { value:'Woo'}})
  fireEvent.change(email, {target: { value:'email@email.com'}})
  fireEvent.change(message, {target: { value:'ramdom things here'}})

  const form = screen.getByText(/FORM/i)
  expect(form).toBeTruthy()
  fireEvent.click(form)

})
