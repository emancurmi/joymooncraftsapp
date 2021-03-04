import { Container, Row, Col } from "reactstrap";

import Image from "../components/CustomImage";
import Link from "next/link";

import Product from "../components/Product";
import SwiperProducts from "../components/SwiperProducts";

import products from "../data/products.json";

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
      title: "Homepage - v.2",
    },
  };
}

export default function Home2() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            lg="6"
            className="dark-overlay split-screen-column align-items-center align-items-lg-end"
            style={{
              backgroundImage: "url(img/photo/ian-dooley-347942-unsplash.jpg)",
              backgroundColor: "#d2cecb",
            }}
          >
            <div className="overlay-content py-6 mt-6 px-lg-5 mt-lg-0 mb-lg-5">
              <h1 className="display-3 mb-4 text-white font-weight-bold split-screen-heading letter-spacing-1">
                Gentlemen
              </h1>
              <p className="lead mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                <Link href="/category">
                  <a className="btn btn-light mx-1 mb-1">View collection</a>
                </Link>
                <Link href="/category">
                  <a className="btn btn-outline-light mx-1 mb-1">See more</a>
                </Link>
              </p>
            </div>
          </Col>
          <Col
            lg="6"
            className="split-screen-column align-items-center align-items-lg-end"
            style={{
              backgroundImage: "url(img/photo/ian-dooley-347962-unsplash.jpg)",
              backgroundColor: "#e5b6b4",
            }}
          >
            <div className="py-6 px-lg-5 mb-lg-5">
              <h1 className="display-3 mb-4 text-white font-weight-bold split-screen-heading letter-spacing-1">
                Ladies
              </h1>
              <p className="lead mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                <Link href="/category-full">
                  <a className="btn btn-light mx-1 mb-1">View collection</a>
                </Link>
                <Link href="/category-full">
                  <a className="btn btn-outline-light mx-1 mb-1">See more</a>
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <section className="pt-6 pb-5">
        <Container>
          <Row>
            <Col xl="8" className="mx-auto text-center mb-5">
              <h2 className="text-uppercase">Latest arrivals</h2>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
          </Row>
          <Row>
            {products.slice(0, 4).map((value, index) => (
              <Col key={index} xl="3" lg="3" md="4" xs="6">
                <Product data={value} showQuickView />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-6 bg-gray-100">
        <Container>
          <Row>
            <Col xl="8" className="mx-auto text-center mb-5">
              <h2>Spring 2020 Collection</h2>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              md="6"
              className="d-flex align-items-md-stretch mb-30px mb-md-0"
            >
              <div
                className="d-flex align-items-center text-white dark-overlay w-100 text-center py-6 py-md-0"
                style={{
                  background:
                    "center center url(img/photo/nordwood-themes-481980-unsplash-square.jpg) no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Link href="/category">
                  <a className="tile-link" />
                </Link>
                <div className="card-img-overlay w-100 overlay-content">
                  <h2 className="display-2 font-weight-bold text-uppercase mb-0">
                    Men
                  </h2>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="card border-0 text-white text-center mb-30px dark-overlay">
                <Image
                  className="card-img"
                  src="/img/photo/malvestida-magazine-458585-unsplash.jpg"
                  alt="Ladies"
                  width={600}
                  height={400}
                />
                <Link href="/category">
                  <a className="tile-link"></a>
                </Link>
                <div className="card-img-overlay d-flex align-items-center">
                  <div className="text-center w-100 overlay-content">
                    <h2 className="display-4 font-weight-bold text-uppercase text-center mb-0">
                      Ladies
                    </h2>
                  </div>
                </div>
              </div>
              <div className="card border-0 text-white text-center  dark-overlay">
                <Image
                  className="card-img"
                  src="/img/photo/heather-schwartz-528936-unsplash.jpg"
                  alt="Accessories"
                  width={600}
                  height={413}
                />
                <Link href="/category">
                  <a className="tile-link"></a>
                </Link>
                <div className="card-img-overlay d-flex align-items-center">
                  <div className="text-center w-100 overlay-content">
                    <h2 className="display-4 font-weight-bold text-uppercase text-center mb-0">
                      Accessories
                    </h2>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-6 pb-5">
        <Container>
          <Row>
            <Col xl="8" className="mx-auto text-center mb-5">
              <h2 className="text-uppercase">Your favourites</h2>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>

            <SwiperProducts products={products} />
          </Row>
        </Container>
      </section>
    </>
  );
}
