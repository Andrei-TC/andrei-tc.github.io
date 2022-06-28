import { contactData } from "./contactData";
import { useState, useEffect, useLayoutEffect } from "react";
import ContactElement from "./ContactElement";
import EmailSend from "./EmailSend";

const Contact = () => {
  const [contact, setContact] = useState();
  const [sentMessage, setSentMessage] = useState(false);
  useEffect(() => {
    setContact(contactData);
  }, []);
  useLayoutEffect(() => {
    setSentMessage(sentMessage);
  }, [sentMessage]);
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
          <button
            className="btn contact-send-btn"
            type="submit"
            onClick={() => setSentMessage(!sentMessage)}
          >
            Send
          </button>
          <input
            type="hidden"
            name="_subject"
            value="Portfolio message"
          ></input>
          <input
            type="hidden"
            name="_subject"
            value="https://andrei-tc.github.io/#contact"
          ></input>
          <input type="hidden" name="_captcha" value="false"></input>
        </form>
        {sentMessage && (
          <EmailSend
            setSentMessage={setSentMessage}
            sentMessage={sentMessage}
          />
        )}
      </div>
    </div>
  );
};

export default Contact;
