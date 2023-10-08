import Wrapper from "../Wrapper/Wrapper";
import "./Stats.scss";

const Stats = () => {
  return (
    <section className="stats">
      <Wrapper className="stats__container">
        <div className="stat__point">
          <h1>8</h1>
          <p>Shops</p>
        </div>
        <div className="stat__point">
          <h1>06</h1>
          <p>Years of Experience</p>
        </div>
        <div className="stat__point">
          <h1>110+</h1>
          <p>Coffees</p>
        </div>
        <div className="stat__point">
          <h1>2500+</h1>
          <p>Reviews</p>
        </div>
      </Wrapper>{" "}
    </section>
  );
};

export default Stats;
