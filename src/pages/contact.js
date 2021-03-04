import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import { Container, Row, Col } from "reactstrap";

import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

import UseWindowSize from "../hooks/UseWindowSize";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "navbar-sticky bg-fixed-white",
        color: "white",
      },
      title: "Contact",
    },
  };
}

let Map;

const breadcrumbLinks = [
  { name: "Home", link: "/" },
  { name: "Contact", active: true },
];

export default function Contact(props) {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [tap, setTap] = useState(false);

  const size = UseWindowSize();

  useEffect(() => {
    Map = dynamic(() => import("../components/Map"), { ssr: false });
    setMapLoaded(true);

    setTap(size.width > 700 ? true : false);
    setDragging(size.width > 700 ? true : false);
  }, []);

  return (
    <>
      <Hero
        title={props.title}
        breadcrumbs={breadcrumbLinks}
        content="Are you curious about something?  As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity."
      />

      <section className="py-6" style={{ background: "#fafafa" }}>
        <Container>
          <Row>
            <Col md="4" className="text-center text-md-left">
              <svg className="svg-icon svg-icon-light text-primary w-3rem h-3rem mb-3">
                <use xlinkHref="/icons/orion-svg-sprite.svg#navigation-map-1" />
              </svg>
              <h4>Address</h4>
              <p className="text-muted">
                13/25 New Avenue
                <br />
                New Heaven, 45Y 73J
                <br />
                England, <strong>Great Britain</strong>
              </p>
            </Col>
            <Col md="4" className="text-center text-md-left">
              <svg className="svg-icon svg-icon-light text-primary w-3rem h-3rem mb-3">
                <use xlinkHref="/icons/orion-svg-sprite.svg#audio-call-1"></use>
              </svg>
              <h4>Call center</h4>
              <p className="text-muted">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <p className="text-muted">
                <strong>+33 555 444 333</strong>
              </p>
            </Col>
            <Col md="4" className="text-center text-md-left">
              <svg className="svg-icon svg-icon-light text-primary w-3rem h-3rem mb-3">
                <use xlinkHref="/icons/orion-svg-sprite.svg#mail-1"></use>
              </svg>
              <h4>Electronic support</h4>
              <p className="text-muted">
                Please feel free to write an email to us or to use our
                electronic ticketing system.
              </p>
              <ul className="list-unstyled text-muted">
                <li>info@sell.com</li>
                <li>support@sell.com</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-6">
        <Container>
          <header className="mb-5">
            <h2 className="text-uppercase h5">Contact form</h2>
          </header>
          <Row>
            <Col md="7" className="mb-5 mb-md-0">
              <ContactForm />
            </Col>
            <Col md="5">
              <p className="text-muted">
                Effects present letters inquiry no an removed or friends. Desire
                behind latter me though in. Supposing shameless am he engrossed
                up additions. My possible peculiar together to. Desire so better
                am cannot he up before points. Remember mistaken opinions it
                pleasure of debating. Court front maids forty if aware their at.
                Chicken use are pressed removed.{" "}
              </p>
              <p className="text-muted">
                Able an hope of body. Any nay shyness article matters own
                removal nothing his forming. Gay own additions education
                satisfied the perpetual. If he cause manor happy. Without
                farther she exposed saw man led. Along on happy could cease
                green oh.{" "}
              </p>
              <div className="social">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank">
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank">
                      <i className="fab fa-pinterest" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank">
                      <i className="fab fa-vimeo" />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="map-wrapper-300">
        {mapLoaded && (
          <Map
            className="h-100"
            center={[40.732346, -74.0014247]}
            markerPosition={[40.732346, -74.0014247]}
            zoom={16}
            dragging={dragging}
            tap={tap}
          />
        )}
      </div>
    </>
  );
}
