import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import Breadcrumbs from "../components/Breadcrumbs";
import DetailSimilar from "../components/DetailSimilar";
import DetailTabs from "../components/DetailTabs";
import DetailMain from "../components/DetailMain";

import Lightbox from "react-image-lightbox";
import Magnifier from "react-magnifier";

import productData from "../data/dummyproduct.json";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Homepage",
    },
  };
}

export default function Detail3() {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [alert, setAlert] = useState(true);

  const onClick = (e, index) => {
    e.preventDefault();
    setActiveImage(index);
    setLightBoxOpen(!lightBoxOpen);
  };

  const customStyles = {
    overlay: {
      zIndex: "1000",
    },
    bodyOpen: {
      position: "fixed",
    },
  };

  const images = productData.img.detailVariant;

  return (
    <>
      <section className="product-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-7 pt-4 order-2 order-lg-1">
              {images.map((image, index) => (
                <a
                  key={index}
                  onClick={(e) => onClick(e, index)}
                  className="d-block mb-4"
                  href={image.img}
                >
                  <Magnifier
                    mgShowOverflow={false}
                    mgWidth={2000}
                    mgHeight={2000}
                    className="img-fluid"
                    src={image.img}
                    alt={image.alt}
                    zoomFactor={0.11}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              ))}
              {lightBoxOpen && (
                <Lightbox
                  mainSrc={images[activeImage].img}
                  nextSrc={images[(activeImage + 1) % images.length].img}
                  prevSrc={
                    images[(activeImage + images.length - 1) % images.length]
                      .img
                  }
                  onCloseRequest={() => setLightBoxOpen(false)}
                  imageCaption={images[activeImage].caption}
                  onMovePrevRequest={() =>
                    setActiveImage(
                      (activeImage + images.length - 1) % images.length
                    )
                  }
                  onMoveNextRequest={() =>
                    setActiveImage((activeImage + 1) % images.length)
                  }
                  enableZoom={false}
                  reactModalStyle={customStyles}
                />
              )}
            </div>
            <div className="col-lg-6 col-xl-5 pl-lg-5 pt-4 order-1 order-lg-2">
              <Breadcrumbs links={productData.breadcrumbs} />
              <div className="sticky-top" style={{ top: "100px" }}>
                <DetailMain product={productData} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <DetailTabs product={productData} />

      <DetailSimilar />
    </>
  );
}
