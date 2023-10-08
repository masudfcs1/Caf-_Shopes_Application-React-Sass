import "./Hero.scss";
import Wrapper from "../Wrapper/Wrapper";
import Img from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero">
      <Wrapper className="hero__container">
        <div className=" hero__left">
          <h1>
            Tasty <span>&</span>Yummy
          </h1>
          <p className="p-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, culpa
            sapiente. Debitis autem aliquam enim sint rem ea repellat eaque.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
            placeat!
          </p>
          <button className="button-primary">Make a Reservation</button>
        </div>

        <div className=" hero__right">
          <img src={Img} alt="Hero Image" />
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
