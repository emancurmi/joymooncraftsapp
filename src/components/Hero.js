import React from "react";
import Breadcrumbs from "./Breadcrumbs";

import { Container, Row, Col } from "reactstrap";

const Hero = ({ children, ...props }) => {
  return (
    <section className="hero">
      <Container>
        {props.breadcrumbs && <Breadcrumbs links={props.breadcrumbs} />}
        <div className="hero-content pb-5 text-center">
          <h1 className="mb-5">{props.title && props.title}</h1>
          {props.content && (
            <Row>
              <Col
                xl="8"
                className="mx-auto"
                dangerouslySetInnerHTML={{ __html: props.content }}
              ></Col>
            </Row>
          )}

          {children}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
