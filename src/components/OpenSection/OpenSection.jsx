import Wrapper from "../Wrapper/Wrapper";
import "./OpenSection.scss";
import Img1 from "../../assets/open-1.webp";
import Img2 from "../../assets/open-2.webp";

const OpenSection = () => {
  return (
    <section className=" open">
      <Wrapper className="open__container">
        <div className="open__first">
          <div>
            <img src={Img1} alt="" />
          </div>
          <div className="open__text">
            <h2>The best day starts here</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              dolorem sint officia delectus repellendus suscipit nulla ut
              facilis soluta laboriosam fugiat ducimus distinctio, natus ex.
            </p>
          </div>
        </div>
        <div className="open__second">
          <div className="open__text">
            <h2>Open Everyday</h2>{" "}
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              dolorem sint officia delectus repellendus suscipit nulla ut
              facilis soluta laboriosam fugiat ducimus distinctio, natus ex.
            </p>
          </div>
          <div>
            <img src={Img2} alt="Open Img2" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default OpenSection;
