import React from "react";
import User1 from "../../images/image-emily.jpg";
import User2 from "../../images/image-jennie.jpg";
import User3 from "../../images/image-thomas.jpg";
import style from "./style.module.scss";

const Testimonials = () => {
  return (
    <section className={style.testimonials__container}>
      <div>
        <h2 className={style.testimonials__heading}>client Testimonials</h2>
      </div>
      <div className={style.testimonials__clientDetails}>
        <div className={style.testimonials__content}>
          <img
            src={User1}
            alt={"Emily"}
            className={style.testimonials__image}
          />
          <p>
            We put our trust in sunnyside and they delivered, making sure our
            needs are met and deadlines are always hit.
          </p>
          <h4>Emily R.</h4>
          <span>Marketing Director</span>
        </div>
        <div className={style.testimonials__content}>
          <img
            src={User2}
            alt={"Jennie"}
            className={style.testimonials__image}
          />
          <p>
            Incredible end result! Our sales increased over 400% when we work
            with sunnyside. Highly Recommended!
          </p>
          <h4>Jennie F.</h4>
          <span>Business Owner</span>
        </div>
        <div className={style.testimonials__content}>
          <img
            src={User3}
            alt={"Thomas"}
            className={style.testimonials__image}
          />
          <p>
            Sunnyside's enthusiasm coupled with our keen interest in our branch
            success made it a satisfying and enjoyable experience
          </p>
          <h4>Thomas S.</h4>
          <span>Chief Executive Officer</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
