const EmailSend = ({ setSentMessage, sentMessage }) => {
  return (
    <div className="emailSend-container" id="wasSent">
      <p>Messenge sent!</p>
      <button onClick={() => setSentMessage(!sentMessage)}>
        <a href="#home">Top page</a>
      </button>
    </div>
  );
};

export default EmailSend;
