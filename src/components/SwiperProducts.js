import React from "react";

import ReactIdSwiper from "react-id-swiper";
import "swiper/css/swiper.css";

import Product from "./Product";

const SwiperProducts = ({ products, ...props }) => {
  const sliderParams = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    },
    pagination:
      props.pagination !== false
        ? {
            el: `.swiper-pagination.swiper-pagination-black`,
            clickable: true,
            dynamicBullets: true,
          }
        : false,
  };

  return (
    <>
      <ReactIdSwiper {...sliderParams} style={{ paddingLeft: "30px" }}>
        {products.map((product, index) => (
          <div key={index}>
            <div className="product-slider-item">
              <Product
                key={index}
                data={product}
                showQuickView={false}
                onlyViewButton={true}
                loading="eager"
              />
            </div>
          </div>
        ))}
      </ReactIdSwiper>
    </>
  );
};

export default SwiperProducts;
