import { useState } from "react";
import ContactForm from "./ContactForm";
import Contact from "./Contact";

function ContactMe() {
  const [contact, setContact] = useState([]);

  // Function to add a Contact Me list item
  const addContactMe = (item) => {
    console.log("File: Contact.js ~ line 10 ~ addContactMe ~ item", item);
    // Check to see if the item text is empty
    if (!item.text) {
      return;
    }

    // Add the new Contact Me list item to the existing array of objects
    const newContact = [item, ...contact];
    console.log(newContact);

    // Call setContact to update state with our new set of Contact Me list items
    setContact(newContact);
  };

  // Function to mark Contact Me list item as complete
  const Contact = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedContact = contact.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedContact);
    setContact(updatedContact);
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <ContactForm onSubmit={addContactMe} />
      <Contact
        contact={contact}
        completeContact={completeContact}
        removeContact={removeContact}
      ></Contact>
    </div>
  );
}

export default Contact;
