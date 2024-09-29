import { useState } from "react";
import axios from "axios";

function ContactForm(props) {
  const [input1, input2, input3, input4, input5, input6, setInput] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input1,
      input2,
      input3,
      input4,
      input5,
      input6,
    });

    //TODO:axios call to post input data into a database
    const { data } = axios.post(
      "https://httpbin.org/post",
      {
        firstName: [input1],
        lastName: [input2],
        email: [input3],
        company: [input4],
        companyAddress: [input5],
        message: [input6],
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={input1}
          name="text"
          className="contact-input"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          value={input2}
          name="text"
          className="contact-input"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Email"
          value={input3}
          name="text"
          className="contact-input"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Company"
          value={input4}
          name="text"
          className="contact-input"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Company Address"
          value={input5}
          name="text"
          className="contact-input"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Message"
          value={input6}
          name="text"
          className="contact-input"
          onChange={handleChange}
        ></input>
        <button className="contact-button">Contact Me</button>
      </form>
    </div>
  );
}

export default ContactForm;
