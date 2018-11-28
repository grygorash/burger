import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import './BurgerCarousel.css';
import logo from '../../img/burger-loader.png';

const sliderSettings = {
  infinite: true,
  autoplaySpeed: 4000,
  speed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  className: 'carousel-content__carousel'
};

const BurgerCarousel = () =>
  <div className="carousel-content">
    <div className="carousel-content__content">
      <div className="big-logo flex">
        <img src={logo} alt="" />
        <h1>Burgers</h1>
      </div>
      <p>Проголодался?</p>
      <h3>Не трать время зря</h3>
      <Link className="btn" to="/menu">
        Выбери бургер из нашего меню
      </Link>
      <p>или</p>
      <Link className="btn" to="/constructor">
        Создай свой бургер сам
      </Link>
    </div>
    <Slider {...sliderSettings}>
      <div className="slide-1" />
      <div className="slide-2" />
      <div className="slide-3" />
      <div className="slide-4" />
      <div className="slide-5" />
    </Slider>
  </div>;

export default BurgerCarousel;