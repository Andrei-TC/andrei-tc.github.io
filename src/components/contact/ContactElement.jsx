const ContactElement = ({ icon, kind, contact, link, btnText }) => {
  return (
    <li className="contact-item flex">
      <img src={icon} alt={kind} />
      <h4>{kind}</h4>
      <code>{contact}</code>
      <a href={link} className="btn" target="_blank" rel="noreferrer">
        {btnText}
      </a>
    </li>
  );
};

export default ContactElement;
