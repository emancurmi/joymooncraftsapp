import { Container, Row, Col } from "reactstrap";

import Breadcrumbs from "../components/Breadcrumbs";
import DetailSimilar from "../components/DetailSimilar";
import DetailTabs from "../components/DetailTabs";
import DetailMain from "../components/DetailMain";
import SwiperGallery from "../components/SwiperGallery";

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

export default function Detail2() {
  return (
    <>
      <section className="product-details">
        <Container>
          <Row>
            <Col
              xs={{ size: 12, order: 2 }}
              lg={{ size: 7, order: 1 }}
              className="pt-4"
            >
              <SwiperGallery data={productData.img.detail} vertical={true} />
            </Col>
            <Col
              xs={{ size: 12, order: 1 }}
              lg={{ size: 5, order: 2 }}
              className="pl-lg-4"
            >
              <Breadcrumbs links={productData.breadcrumbs} />

              <DetailMain product={productData} />
            </Col>
          </Row>
        </Container>
      </section>

      <DetailTabs product={productData} />

      <DetailSimilar />
    </>
  );
}
