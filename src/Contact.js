import "./Contact.css";

const Contact = (props) => {
  return (
    <div className="Contact navbar-margin">
      <div className="odd-section">
        <h2 className="header-lrg">Thanks For Visiting!</h2>
        <p className="text-lrg">
          Have any questions, comments, concerns, bugs, or incorrect information
          to report? I'd love to hear them! Feel free to contact me at any of
          the following locations!{" "}
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

      <div className="even-section">
        <h2 className="header-lrg">Frequently Asked Questions</h2>
        <hr className="divider" />
        {/* <p className="text-med-ital">Should my gathering toon be a Druid or an Evoker?</p>
        <p className="text-med">Depends on what race you are. General consensus seems to be the deftness (i.e., faster gathering speed) of Tauren (for Herbalism)/Highmountain Tauren (for mining) is better than the perception given by Dracythr.</p>
        <br /> */}
        <p className="text-med-bold">
          Where did you get your information from?
        </p>
        <p className="text-med">
          During DF Beta, I manually input all the info I could from the client
          into a database. I used wowhead occasionally if any of the information
          in the client was unclear or unsatisfactory.
        </p>
        <br />
        <p className="text-med-bold">
          The information on x page is straight up wrong, or missing values.
          What's up with that?
        </p>
        <p className="text-med">
          Apologies - a lot of the data from here was put in about a month & a
          half before Dragonflight's 11/28/2022 launch. At that point, there was
          still a lot of wonky data (e.g. recipe difficulties that seemed off),
          so there are still leftover segments of that in my database.
          Additionally, the data for different quality levels was based on me
          looking at the items with different characters of different skills. I
          could not get the max quality consistently on some recipes (once
          again, due to those wonky beta difficulty numbers). Feel free to
          contact me if you find anything like that and I'll fix it as fast as I
          can.
        </p>
        <br />
        <p className="text-med-bold">
          Are you going to update this website over the course of the
          expansion/through each patch?
        </p>
        <p className="text-med">
          I'd like to, but no promises quite yet! Will definitely be maintaining
          it over the course of 10.0 at the very least.
        </p>
        <br />
      </div>
    </div>
  );
};

export default Contact;
