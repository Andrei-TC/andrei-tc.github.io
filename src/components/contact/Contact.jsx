import { contactData } from "./contactData";
import { useState, useEffect } from "react";
import ContactElement from "./ContactElement";

const Contact = () => {
  const [contact, setContact] = useState([]);
  const [sentMessage, setSentMessage] = useState(false);
  const [alreadySent, setAlreadySent] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [emailValid, setEmailValid] = useState({
    email: "",
    emailValid: false,
  });
  const [textValid, setTextValid] = useState({
    text: "",
    textValid: false,
  });

  function handleLocalStorageSent() {
    setAlreadySent(true);
    localStorage.setItem("emailSent", alreadySent);
  }
  function handleChangeEmail(e) {
    const newEmailValid = e.target.value ? true : false;
    setEmailValid({
      email: e.target.value,
      emailValid: newEmailValid,
    });
    let re = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    if (re.test(e.target.value)) {
      if ((textValid.textValid && emailValid.emailValid) === true) {
        setDisableSubmit(false);
      }
    } else return;
  }
  function handleChangeText(e) {
    let newtextValid = e.target.value ? true : false;

    setTextValid({
      text: e.target.value,
      textValid: newtextValid,
    });
    if ((textValid.textValid && emailValid.emailValid) === true) {
      setDisableSubmit(false);
    }
  }

  useEffect(() => {
    setSentMessage(sentMessage);
    setContact(contactData);
    if (localStorage.getItem("emailSent", alreadySent)) {
      setAlreadySent(true);
    } else setAlreadySent(false);
  }, [sentMessage, alreadySent]);

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
            placeholder={!textValid.textValid ? "*Your name" : "Your name"}
            value={textValid.text}
            className={!textValid.textValid ? "required" : ""}
            onChange={(e) => handleChangeText(e)}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder={!emailValid.emailValid ? "*Your email" : "Your email"}
            value={emailValid.email}
            className={!emailValid.emailValid ? "required" : ""}
            onChange={(e) => handleChangeEmail(e)}
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder={alreadySent ? "Send another message" : "Your message"}
          ></textarea>
          <button
            className={
              sentMessage
                ? "btn contact-send-btn btn-progress"
                : "btn contact-send-btn"
            }
            type="submit"
            onClick={() => {
              setSentMessage(!sentMessage);
              handleLocalStorageSent();
            }}
            disabled={disableSubmit}
          >
            {sentMessage
              ? "In progress..."
              : alreadySent
              ? "Send again"
              : "Send"}
          </button>
          <input
            type="hidden"
            name="_subject"
            value="Portfolio message"
          ></input>
          <input
            type="hidden"
            name="_next"
            value="https://andrei-tc.github.io/#contact"
          ></input>
          <input type="hidden" name="_captcha" value="false"></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
