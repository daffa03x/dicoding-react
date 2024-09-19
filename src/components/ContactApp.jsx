import React from "react";
import ContactList from "./ContactList";
import { getData } from "../data";

function ContactApp() {
  const contacts = getData();

  return (
    <div className="contact-app">
      <ContactList contacts={contacts} />
    </div>
  );
}

export default ContactApp;
