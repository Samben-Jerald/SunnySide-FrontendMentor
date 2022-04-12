import React from "react";
import Milk from "../../images/desktop/image-gallery-milkbottles.jpg";
import MilkMobile from "../../images/mobile/image-gallery-milkbottles.jpg";
import Orange from "../../images/desktop/image-gallery-orange.jpg";
import OrangeMobile from "../../images/mobile/image-gallery-orange.jpg";
import Cone from "../../images/desktop/image-gallery-cone.jpg";
import ConeMobile from "../../images/mobile/image-gallery-cone.jpg";
import Brick from "../../images/desktop/image-gallery-sugarcubes.jpg";
import BrickMobile from "../../images/mobile/image-gallery-sugar-cubes.jpg";
import styles from "./styles.module.scss";

const ImageBrick = () => {
  return (
    <div className={styles.imageBrick__container}>
      <picture>
        <source src={MilkMobile} media={`(max-width:850px)`}></source>
        <img src={Milk} alt="HeaderLogo" className={styles.imageBrick__image} />
      </picture>
      <picture>
        <source src={OrangeMobile} media={`(max-width:850px)`}></source>
        <img
          src={Orange}
          alt="HeaderLogo"
          className={styles.imageBrick__image}
        />
      </picture>
      <picture>
        <source src={ConeMobile} media={`(max-width:850px)`}></source>
        <img src={Cone} alt="HeaderLogo" className={styles.imageBrick__image} />
      </picture>
      <picture>
        <source src={BrickMobile} media={`(max-width:850px)`}></source>
        <img
          src={Brick}
          alt="HeaderLogo"
          className={styles.imageBrick__image}
        />
      </picture>
    </div>
  );
};

export default ImageBrick;
