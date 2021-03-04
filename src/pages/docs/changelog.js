import React from "react";

import { Container, Row, Col, Card, CardBody } from "reactstrap";

import DocsNav from "../../components/Docs/DocsNav";
import Breadcrumbs from "../../components/Breadcrumbs";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Docs - Changelog",
    },
  };
}

const Changelog = () => {
  return (
    <React.Fragment>
      <section className="hero">
        <Container>
          <Breadcrumbs
            links={[
              {
                name: "Home",
                link: "/",
              },
              {
                name: "Documentation",
                link: "/docs/introduction",
              },
              {
                name: "Changelog",
                active: true,
              },
            ]}
            className="justify-content-center"
          />

          <div className="hero-content pb-5 text-center">
            <h1 className="hero-heading">Changelog</h1>
          </div>
        </Container>
      </section>

      <Container fluid>
        <Row className="px-xl-5">
          <Col lg="2">
            <DocsNav />
          </Col>
          <Col lg="10" xl="8" className="docs-content">
            <div id="version1.0.0" className="docs-item">
              <h5 className="text-uppercase mb-4">Version 1.0.0</h5>
              <div className="docs-desc">
                <p className="text-muted">February 9, 2021</p>
              </div>
              <div className="mt-5">
                <Card className="bg-gray-100 border-0">
                  <CardBody className="py-4"> Initial Release</CardBody>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Changelog;
