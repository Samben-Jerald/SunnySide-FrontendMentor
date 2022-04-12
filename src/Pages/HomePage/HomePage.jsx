import React from "react";
import Header from "../../Component/Header/Header";
import Content from "../../Component/Content/Content";
import Testimonials from "../../Component/Testimonials/Testimonials";
import ImageBrick from "../../Component/ImageBrick/ImageBrick";
import Footer from "../../Component/Footer/Footer";
import style from "./style.module.scss";

const HomePage = () => {
  return (
    <div className={style.layout}>
      <Header />
      <Content />
      <Testimonials />
      <ImageBrick />
      <Footer />
    </div>
  );
};

export default HomePage;
