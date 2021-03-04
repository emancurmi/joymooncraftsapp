import { Container, Row, Col } from "reactstrap";

import CardLookbook from "../components/CardLookbook";
import Swiper from "../components/Swiper";

import data from "../data/index.json";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        dark: true,
        classes:
          "bg-hover-white bg-fixed-white navbar-hover-light navbar-fixed-light",
        color: "transparent",
      },
      headerAbsolute: true,
      title: "Homepage",
    },
  };
}

export default function Home() {
  return (
    <>
      <Swiper
        data={data.swiper}
        autoplay
        delay={5000}
        loop
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides
        speed={1500}
        parallax
        navigation
        className="home-full-slider"
        containerclass="container-fluid h-100 py-5"
        paginationClass="swiper-pagination-white"
      />

      <Container fluid className="px-5px">
        <Row className="mx-0">
          {data.lookbook.map((card, index) => {
            const columns = index < 2 ? { md: 6 } : { lg: 4 };
            const type = index < 2 ? "big" : "small";
            return (
              <Col {...columns} className="mb-10px px-5px" key={index}>
                <CardLookbook data={card} cardType={type} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
