import "./Pastries.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
import Img1 from "../../assets/pasty-1.png";
import Img2 from "../../assets/pasty-2.png";
import Img3 from "../../assets/pasty-3.png";
import Img4 from "../../assets/pasty-4.png";
import Img5 from "../../assets/pasty-5.png";
import Img6 from "../../assets/pasty-6.png";
import Img7 from "../../assets/pasty-7.png";
import Img8 from "../../assets/pasty-8.png";
import Img9 from "../../assets/pasty-9.png";
import Wrapper from "../Wrapper/Wrapper";

const data = [
  {
    name: "Douut",
    price: "10$",
    img: Img1
  },
  {
    name: "Caramel bun",
    price: "11$",
    img: Img2
  },
  {
    name: "Chocolate cookies",
    price: "9$",
    img: Img3
  },
  {
    name: "Cream Cake",
    price: "13$",
    img: Img4
  },
  {
    name: "Bun With Kiwi",
    price: "17$",
    img: Img5
  },
  {
    name: "Croissant",
    price: "11$",
    img: Img6
  },
  {
    name: "Three donuts",
    price: "15$",
    img: Img7
  },
  {
    name: "Sugar bun",
    price: "19$",
    img: Img8
  },
  {
    name: "cinnamon bun",
    price: "10$",
    img: Img9
  }
];

const Pastries = () => {
  return (
    <section className="flower">
      <Wrapper>
        <div className="flower__text">
          <h2>Pastries</h2>
          <p className="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            nihil cumque libero asperiores illo. Corrupti perferendis quia
            eligendi vero doloremque.
          </p>
        </div>
      </Wrapper>
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
    </section>
  );
};

export default Pastries;
