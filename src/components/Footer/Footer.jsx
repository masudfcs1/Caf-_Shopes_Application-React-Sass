import Wrapper from "../Wrapper/Wrapper";
import "./Footer.scss";
import Logo from "../../assets/logo1.png";

const Footer = () => {
  return (
    <section className="footer">
      <Wrapper>
        <img src={Logo} alt="" />
        <ul className="footer__links">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
        </ul>
      </Wrapper>
    </section>
  );
};

export default Footer;
