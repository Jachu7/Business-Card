import mail from "./images/mail.png";
import AboutInterests from "./aboutInterests";

function Main() {
    return (
        <div className="container">
            <h1 className="name">Laura Smith</h1>
            <p className="prof">Frontend Developer</p>
            <p className="address">laurasmith.website</p>
            <button>
                <img src={mail} alt="email" />
                Email
            </button>
            <AboutInterests />
        </div>
    );
}
export default Main;
