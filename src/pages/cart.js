import { Container, Row, Col } from "reactstrap";

import Link from "next/link";

import Hero from "../components/Hero";
import Cart from "../components/Cart";
import OrderSummary from "../components/OrderSummary";

import data from "../data/cart.json";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Category",
    },
  };
}

export default function ShoppingCart() {
  return (
    <>
      <Hero
        title={data.subtitle}
        breadcrumbs={data.breadcrumbs}
        content={data.content}
      />

      <Container>
        <Row className="mb-5">
          <Col lg="8">
            <Cart />

            <div className="my-5 d-flex justify-content-between flex-column flex-lg-row">
              <Link href="/category">
                <a className="btn btn-link text-muted">
                  <i className="fa fa-chevron-left" /> Continue Shopping
                </a>
              </Link>
              <Link href="/checkout-1">
                <a className="btn btn-dark">
                  Proceed to checkout <i className="fa fa-chevron-right" />
                </a>
              </Link>
            </div>
          </Col>
          <Col lg="4">
            <OrderSummary />
          </Col>
        </Row>
      </Container>
    </>
  );
}
