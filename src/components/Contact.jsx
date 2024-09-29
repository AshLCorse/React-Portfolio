import { useState } from "react";
import ContactForm from "./ContactForm";

function Contact(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  console.log(props.contact);

  const submitUpdate = (value) => {
    props.editContactMe(edit.id, value);
    setEdit({ id: null, value: "" });
  };

  if (edit.id) {
    return <ContactForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.contact.map((item, i) => (
    <div>
      <div key={item.id} onClick={() => props.completeContactMe(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        {console.log(item)}
        <p
          onClick={() =>
            setEdit({
              id: item.id,
              value: item.text,
            })
          }
        >
          {" "}
          ✏️
        </p>
        <p onClick={() => props.removeContactMe(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Contact;
