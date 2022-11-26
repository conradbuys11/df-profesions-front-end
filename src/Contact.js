import "./Contact.css";

const Contact = (props) => {
  return (
    <div className="Contact navbar-margin">
      <h2 className="header-lrg">Thanks For Visiting!</h2>
      <p className="text-lrg">
        Have any questions, comments, concerns, bugs, or incorrect information
        to report? I'd love to hear them! Feel free to contact me at any of the
        following locations!{" "}
        <span className="text-lrg-ital">
          (Please be as specific as possible with your message!)
        </span>
      </p>
      <p className="text-med">
        <span className="text-med-bold">Discord:</span> Conic#5198 |{" "}
        <span className="text-med-bold">Email:</span>{" "}
        <a href="mailto:conicsonic5@gmail.com">conicsonic5@gmail.com</a>
      </p>
    </div>
  );
};

export default Contact;
