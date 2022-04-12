import React from "react";
import { Link } from "react-router-dom";
import EggImage from "../../images/desktop/image-transform.jpg";
import EggMobile from "../../images/desktop/image-transform.jpg";
import CupImage from "../../images/desktop/image-stand-out.jpg";
import CupMobile from "../../images/mobile/image-stand-out.jpg";
import CherryImage from "../../images/desktop/image-graphic-design.jpg";
import CherryMobile from "../../images/mobile/image-graphic-design.jpg";
import OrangeImage from "../../images/desktop/image-photography.jpg";
import OrangeMobile from "../../images/mobile/image-photography.jpg";
import style from "./style.module.scss";

const Content = () => {
  return (
    <section className={style.section__container}>
      <div className={style.section__item1}>
        <h2 className={style.section__contentHeading}>Transform your brands</h2>
        <p className={style.section__content}>
          We are a full service creative agency specializing in helping brands
          grow fast.Engage your clients through compelling visuals that do most
          of the marketing to you
        </p>
        <span>
          <Link to="#" className={style.section__contentLink}>
            Learn more
          </Link>
        </span>
      </div>
      <div className={style.section__item2}>
        <picture>
          <source src={EggMobile} media={"(max-width:850px)"}></source>
          <img src={EggImage} alt={"Egg"} className={style.section__image} />
        </picture>
      </div>
      <div className={style.section__item3}>
        <picture>
          <source src={CupMobile} media={"(max-width:850px)"}></source>
          <img src={CupImage} alt={"Cup"} className={style.section__image} />
        </picture>
      </div>
      <div className={`${style.section__item4}`}>
        <h2 className={style.section__contentHeading}>
          Standout to the rigth audience
        </h2>
        <p className={style.section__content}>
          Using a colabrative formula for designers, researchers, photographers,
          videographers, copyrighters, we'll build and extend your brand in
          digital places
        </p>
        <span>
          <Link
            to="#"
            className={`${style.section__contentLink} ${style.section__nextLink}`}
          >
            Learn more
          </Link>
        </span>
      </div>
      <div className={style.section__item5}>
        <picture className={style.section__lastPicture1}>
          <source src={CherryMobile} media={"(max-width:850px)"}></source>
          <img
            src={CherryImage}
            alt={"Cherry"}
            className={style.section__image}
          />
        </picture>
        <div className={style.section__lastPicture__content1}>
          <h2>Graphic design</h2>
          <p>
            Great design makes you memorable. we deliver art work that
            underscores your brand message and captures potential client
            attention.
          </p>
        </div>
      </div>
      <div className={style.section__item6}>
        <picture className={style.section__lastPicture2}>
          <source src={OrangeMobile} media={"(max-width:850px)"}></source>
          <img
            src={OrangeImage}
            alt={"Orange"}
            className={style.section__image}
          />
        </picture>
        <div className={style.section__lastPicture__content2}>
          <h2>Photography</h2>
          <p>
            Increase your creditiblity by getting the most stunning,high quality
            photos that improves your business image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
