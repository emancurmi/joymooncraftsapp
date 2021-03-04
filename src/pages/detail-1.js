import { Container, Row, Col } from "reactstrap";

import Breadcrumbs from "../components/Breadcrumbs";
import DetailSimilar from "../components/DetailSimilar";
import DetailTabs from "../components/DetailTabs";
import DetailMain from "../components/DetailMain";

import ReactIdSwiper from "react-id-swiper";

import productData from "../data/dummyproduct.json";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Product Detail",
    },
  };
}

export default function Detail() {
  return (
    <>
      <section className="product-details">
        <Container fluid>
          <Row>
            <Col
              xs={{ size: 12, order: 2 }}
              lg={{ size: 6, order: 1 }}
              className="py-3"
            >
              <ReactIdSwiper
                className="detail-full"
                slidesPerView={1}
                pagination={{
                  el: ".swiper-pagination.swiper-pagination-white",
                  clickable: true,
                  dynamicBullets: true,
                }}
              >
                {productData.img.detail.map((image, index) => (
                  <div key={index}>
                    <div
                      className="detail-full-item bg-cover"
                      style={{
                        backgroundImage: `url(${image.img})`,
                      }}
                    ></div>
                  </div>
                ))}
              </ReactIdSwiper>
            </Col>
            <Col
              xs={{ size: 12, order: 1 }}
              lg={{ size: 6, order: 2 }}
              xl="5"
              className="d-flex align-items-center pl-lg-5 mb-5"
            >
              <div>
                <Breadcrumbs links={productData.breadcrumbs} />

                <DetailMain product={productData} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <DetailTabs product={productData} />

      <DetailSimilar />
    </>
  );
}
