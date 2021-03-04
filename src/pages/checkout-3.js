import { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import Hero from "../components/Hero";
import OrderSummary from "../components/OrderSummary";

import data from "../data/checkout-2.json";
import CheckoutNav from "../components/CheckoutNav";
import FormCheckout from "../components/FormCheckout";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Checkout - Step 3",
    },
  };
}

export default function Checkout3() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
            <CheckoutNav activeStep={3} />

            <FormCheckout
              step={3}
              prev={["Back to the delivery method", "/checkout-2"]}
              next={["Continue to order review", "/checkout-4"]}
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
