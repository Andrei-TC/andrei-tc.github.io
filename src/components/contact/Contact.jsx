import { contactData } from "./contactData";
import { useState, useEffect } from "react";
import ContactElement from "./ContactElement";

const Contact = () => {
  const [contact, setContact] = useState();
  useEffect(() => {
    setContact(contactData);
  }, []);
  return (
    <div className="contact-container" id="contact">
      <h3>Contact me</h3>
      <div className="contact-grid grid">
        <ul className="contact-list-container flex">
          {contact &&
            contact.map((data) => (
              <ContactElement
                key={data.kind}
                icon={data.icon}
                kind={data.kind}
                contact={data.contact}
                link={data.link}
                btnText={data.btnText}
              />
            ))}
        </ul>
        <form
          action="https://formsubmit.co/57d7c935b48d20ec30b2f362c790b1a1"
          method="POST"
          className="contact-form flex"
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            aria-required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            aria-required
          />
          <textarea
            name="message"
            id="message"
            placeholder="Your message"
            aria-required
          ></textarea>
          <button className="btn contact-send-btn" type="submit">
            Send
          </button>
          <input type="hidden" name="_next" value="#home"></input>
          <input
            type="hidden"
            name="_subject"
            value="Portfolio message"
          ></input>
          <input type="hidden" name="_captcha" value="false"></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
