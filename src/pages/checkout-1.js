import { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import Hero from "../components/Hero";
import CheckoutNav from "../components/CheckoutNav";
import FormCheckout from "../components/FormCheckout";
import OrderSummary from "../components/OrderSummary";

import data from "../data/cart.json";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Checkout - Step 1",
    },
  };
}

export default function Checkout1() {
  return (
    <>
      <Hero
        title={data.subtitle}
        breadcrumbs={data.breadcrumbs}
        content={data.content}
      />

      {/* Checkout*/}
      <Container>
        <Row>
          <Col lg="8">
            <CheckoutNav activeStep={1} />

            <FormCheckout
              step={1}
              prev={["Back", "/cart"]}
              next={["Choose delivery method", "/checkout-2"]}
            />
          </Col>
          <Col lg="4">
            <OrderSummary />
          </Col>
        </Row>
      </Container>
    </>
  );
}
