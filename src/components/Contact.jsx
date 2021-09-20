import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const form = useRef();

  const [send, setSend] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oa0261a",
        "template_2u1p4am",
        form.current,
        "user_3ttD62a5ywOaSFbmSLo8A"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact" id="contact">
      <div className="contactForm">
        <form ref={form} onSubmit={sendEmail}>
          <h2>Send me a message</h2>

          <div className="inputbox">
            <input
              type="text"
              name="firstName"
              required="required"
              // value={firstName}
              // onChange={(e) => setFirstName(e.target.value)}
            />
            <span>First Name</span>
          </div>
          <div className="inputbox">
            <input
              type="text"
              name="lastName"
              required="required"
              // value={lastName}
              // onChange={(e) => setLastName(e.target.value)}
            />
            <span>Last Name</span>
          </div>
          <div className="inputbox">
            <input
              type="text"
              name="email"
              required="required"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <span>Email</span>
          </div>
          <div className="inputbox">
            <textarea
              name="message"
              required="required"
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <span>Message</span>
          </div>
          <button type="submit">Send</button>
        </form>
        {send && (
          <div className="thnx">
            <h4>Thanks for sending a message</h4>
          </div>
        )}
      </div>
    </div>
  );
}
