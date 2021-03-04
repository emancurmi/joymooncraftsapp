import React, { useState } from "react";

import Link from "next/link";
import Image from "./CustomImage";

import ModalQuickView from "./ModalQuickView";

const Product = ({ data, masonry, ...props }) => {
  const [quickView, setQuickView] = useState(false);
  let loading = "lazy";

  if (props.loading) {
    loading = props.loading;
  }

  return (
    <>
      <div className="product">
        <div className="product-image">
          {data.new && <div className="ribbon ribbon-info">Fresh</div>}
          {data.sale && <div className="ribbon ribbon-primary">Sale</div>}
          {data.soldout && <div className="ribbon ribbon-danger">Sold out</div>}

          {typeof data.img === "object" &&
            (masonry ? (
              <img
                className="img-fluid"
                src={data.img.masonry[0].img}
                alt={data.img.masonry[0].alt}
              />
            ) : (
              <Image
                className="img-fluid"
                src={data.img.category[0].img}
                alt={data.img.category[0].alt}
                width={530}
                height={795}
                sizes="(max-width: 576px) 100vw, 530px"
                loading="eager"
              />
            ))}
          <div className="product-hover-overlay">
            <Link href={data.link}>
              <a className="product-hover-overlay-link" />
            </Link>
            <div className="product-hover-overlay-buttons">
              {!props.onlyViewButton && (
                <a className="btn btn-outline-dark btn-product-left" href="#">
                  <i className="fa fa-shopping-cart" />
                </a>
              )}
              <Link href={data.link}>
                <a className="btn btn-dark btn-buy">
                  <i className="fa-search fa" />
                  <span className="btn-buy-label ml-2">View</span>
                </a>
              </Link>
              {!props.onlyViewButton && (
                <a
                  className="btn btn-outline-dark btn-product-right"
                  onClick={() => setQuickView(!quickView)}
                >
                  <i className="fa fa-expand-arrows-alt" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="py-2">
          {data.category && (
            <p className="text-muted text-sm mb-1">{data.category[0].title}</p>
          )}
          <h3 className="h6 text-uppercase mb-1">
            <Link href={data.link}>
              <a className="text-dark">{data.name}</a>
            </Link>
          </h3>
          <span className="text-muted">${data.price.toFixed(2)}</span>
        </div>
      </div>

      {props.showQuickView !== false && (
        <ModalQuickView
          isOpen={quickView}
          toggle={() => setQuickView()}
          product={data}
        />
      )}
    </>
  );
};

export default Product;
