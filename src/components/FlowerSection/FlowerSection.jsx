import "./FlowerSection.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Img1 from "../../assets/flower-1.png";
import Img2 from "../../assets/flower-2.png";
import Img3 from "../../assets/flower-3.png";
import Img4 from "../../assets/flower-4.png";
import Img5 from "../../assets/flower-5.png";
import Img6 from "../../assets/flower-6.png";
import Img7 from "../../assets/flower-7.png";
import Img8 from "../../assets/flower-8.png";
import Img9 from "../../assets/flower-9.png";
import Wrapper from "../Wrapper/Wrapper";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const data = [
  {
    name: "Raf",
    price: "10$",
    img: Img1
  },
  {
    name: "Cappuccino",
    price: "11$",
    img: Img2
  },
  {
    name: "Corrected",
    price: "7$",
    img: Img3
  },
  {
    name: "Macchiato",
    price: "13$",
    img: Img4
  },
  {
    name: "Neon Coffee",
    price: "17$",
    img: Img5
  },
  {
    name: "Royal Coffe",
    price: "11$",
    img: Img6
  },
  {
    name: "Ritual Coffee",
    price: "15$",
    img: Img7
  },
  {
    name: "Cafe Grumpy",
    price: "9$",
    img: Img8
  },
  {
    name: "Octane",
    price: "10$",
    img: Img9
  }
];

const FlowerSection = () => {
  return (
    <section className=" flower">
      <Wrapper>
        <div className=" flower__text">
          <h2>New Flower</h2>
          <p className=" p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            dolorem, animi recusandae perferendis qui ad in similique ipsum
            dolores excepturi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nostrum, laudantium. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Harum, a?
          </p>
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          removeArrowOnDeviceType={["tablet"]}
          autoPlay={true}
          autoPlaySpeed={1000}
        >
          {data.map(({ name, price, img }) => (
            <div className="flower__card">
              <img src={img} alt={name} />
              <h3>{name} </h3>
              <p>{price} </p>
            </div>
          ))}
        </Carousel>

        <div className="flower__btn">
          <button className="button-primary">Go To Menu</button>
        </div>
      </Wrapper>
    </section>
  );
};

export default FlowerSection;
