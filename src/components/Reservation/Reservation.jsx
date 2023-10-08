import Wrapper from "../Wrapper/Wrapper";
import "./Reservation.scss";
import Img from "../../assets/reservation.webp";

const Reservation = () => {
  return (
    <section className="reservation">
      <Wrapper className="reservation__container">
        <div className="reservation__left">
          <img src={Img} alt="" />
        </div>
        <div className="reservation__right">
          <h2>
            Make a <br /> Reservation
          </h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="masudfs1@gmail.com" />
            <input type="number" placeholder="Phone No" />
            <button className="button-primary">Reserve</button>
          </form>
        </div>
      </Wrapper>
    </section>
  );
};

export default Reservation;
