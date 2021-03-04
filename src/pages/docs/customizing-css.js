import React from "react";

import { Container, Row, Col } from "reactstrap";

import DocsNav from "../../components/Docs/DocsNav";
import Breadcrumbs from "../../components/Breadcrumbs";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Docs - Customizing CSS",
    },
  };
}

const CustomizingCss = () => {
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
                name: "Customizing CSS",
                active: true,
              },
            ]}
            className="justify-content-center"
          />

          <div className="hero-content pb-5 text-center">
            <h1 className="hero-heading">Customizing CSS</h1>
          </div>
        </Container>
      </section>

      <Container fluid>
        <Row className="px-xl-5">
          <Col lg="2">
            <DocsNav />
          </Col>
          <Col lg="10" xl="8" className="docs-content text-lg">
            <div id="scssmethod" className="docs-item">
              <h5 className="text-uppercase mb-4">SCSS Method</h5>
              <div className="docs-desc"></div>
              <div className="mt-5">
                <p>
                  The most flexible way to edit the theme CSS or to add your own
                  code and components to use SCSS. As mentioned before, there
                  are two files already prepared for your changes -{" "}
                  <code>_user-variables.scss</code> and <code>_user.scss</code>.
                </p>
                <p>
                  To configure the theme, e.g. to change colours for some
                  elements, to change font sizes, etc., use{" "}
                  <code>_user-variables.scss</code>. Any variable from{" "}
                  <code>src/assets/scss/bootstrap/_variables.scss</code> or{" "}
                  <code>src/assets/scss/modules/_variables.scss</code> can be
                  overridden here with your own value.
                </p>
                <p>
                  To add your own CSS code, declare it in the{" "}
                  <code>_user.scss</code> file.
                </p>
                <p>
                  SCSS is automatically compiled if you're running{" "}
                  <code>next.js</code> development mode.
                </p>
              </div>
            </div>
            <div id="scssmethod" className="docs-item">
              <h5 className="text-uppercase mb-4">Importing CSS</h5>
              <div className="docs-desc"></div>
              <div className="mt-5">
                <p>
                  If you need to import css files for plugins, you can in do it
                  in<code>/src/pages/_app.js</code> using following syntax{" "}
                  <code>import 'plugin/plugin.css'</code>.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CustomizingCss;
