import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../../images/icon-facebook.svg";
import Instagram from "../../images/icon-instagram.svg";
import Pintrest from "../../images/icon-pinterest.svg";
import Twitter from "../../images/icon-twitter.svg";
import style from "./style.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer__container}>
      <h2 className={style.footer__heading}>SunnySide</h2>
      <ul className={style.footer__links}>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Service</Link>
        </li>
        <li>
          <Link to="#">Project</Link>
        </li>
      </ul>
      <ul className={style.footer__icons}>
        <li>
          <Link to="#">
            <img src={Facebook} alt="" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={Instagram} alt="" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={Twitter} alt="" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={Pintrest} alt="" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
