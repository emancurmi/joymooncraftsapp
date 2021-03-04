import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

import Link from "next/link";

import Hero from "../components/Hero";

import data from "../data/customer-login.json";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Customer - Login",
    },
  };
}

export default function CustomerLogin() {
  return (
    <>
      <Hero
        title={data.subtitle}
        breadcrumbs={data.breadcrumbs}
        content={data.content}
      />

      <Container>
        <Row className="justify-content-center">
          <Col lg="5">
            <div className="block">
              <div className="block-header">
                <h6 className="text-uppercase mb-0">Login</h6>
              </div>
              <div className="block-body">
                <p className="lead">Already our customer?</p>
                <p className="text-muted">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
                <hr />
                <Form>
                  <FormGroup>
                    <Label className="form-label" htmlFor="email_1">
                      Email
                    </Label>
                    <Input id="email_1" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label className="form-label" htmlFor="password_1">
                      Password
                    </Label>
                    <Input id="password" type="password_1" />
                  </FormGroup>
                  <FormGroup>
                    <Button color="outline-dark" type="submit">
                      <i className="fa fa-sign-in-alt mr-2" /> Log in
                    </Button>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </Col>
          <Col lg="5">
            <div className="block">
              <div className="block-header">
                <h6 className="text-uppercase mb-0">New account</h6>
              </div>
              <div className="block-body">
                <p className="lead">Not our registered customer yet?</p>
                <p className="text-muted">
                  With registration with us new world of fashion, fantastic
                  discounts and much more opens to you! The whole process will
                  not take you more than a minute!
                </p>
                <p className="text-muted">
                  If you have any questions, please feel free to{" "}
                  <Link href="/contact">
                    <a>contact us</a>
                  </Link>
                  , our customer service center is working for you 24/7.
                </p>
                <hr />
                <Form>
                  <FormGroup>
                    <Label className="form-label" htmlFor="name">
                      Name
                    </Label>
                    <Input id="name" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label className="form-label" htmlFor="email">
                      Email
                    </Label>
                    <Input id="email" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label className="form-label" htmlFor="password">
                      Password
                    </Label>
                    <Input id="password" type="password" />
                  </FormGroup>
                  <FormGroup>
                    <Button color="outline-dark" type="submit">
                      <i className="far fa-user mr-2" />
                      Register
                    </Button>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
