import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Image from "../../images/desktop/image-header.jpg";
import Image2 from "../../images/mobile/mobile-header.jpg";
import Hamburger from "../../images/icon-hamburger.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [hambugerState, setHamburgerState] = useState(false);

  const HandleHamburger = () => {
    setHamburgerState((prev) => !prev);
  };

  useEffect(() => {
    const handler = (e) => {
      const { originalTarget } = e;
      const ul = document.querySelector("#unorderList");
      if (originalTarget !== ul) {
        setHamburgerState(false);
      }
    };

    window.addEventListener("touchmove", handler);

    return () => {
      window.removeEventListener("touchmove", handler);
    };
  }, []);

  return (
    <header className={`${styles.header__container}`}>
      <picture>
        <source src={Image2} media={`(max-width:850px)`}></source>
        <img src={Image} alt="HeaderLogo" className={styles.header__image} />
      </picture>

      <div className={styles.header__content}>
        <nav className={styles.header__navigation}>
          <div>
            <h2 className={styles.header__heading}>sunnyside</h2>
          </div>
          <div className={styles.header__list}>
            <img
              src={Hamburger}
              alt="Hamburger"
              className={styles.header__hamburger}
              onClick={HandleHamburger}
            />
            <ul
              className={styles.header__unorderList}
              aria-label={hambugerState ? "true" : "false"}
              id="unorderList"
            >
              <li className={styles.header__headerLinks}>
                <NavLink to={"#"}>About</NavLink>
              </li>
              <li className={styles.header__headerLinks}>
                <NavLink to={"#"}>Service</NavLink>
              </li>
              <li className={styles.header__headerLinks}>
                <NavLink to={"#"}>Project</NavLink>
              </li>
              <li className={`${styles.header__headerLinks} `}>
                <NavLink to={"#"} className={`${styles.header__button}`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className={styles.header__mainHeading__container}>
          <h1 className={styles.header__mainheading_1}>We Are Creatives</h1>
          <h2 className={styles.header__mainheading_2}>&darr;</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
