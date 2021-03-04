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
      title: "Checkout - Step 4",
    },
  };
}

export default function Checkout4() {
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
            <CheckoutNav activeStep={4} />

            <FormCheckout
              step={4}
              prev={["Back to the payment method", "/checkout-3"]}
              next={["Place an order", "/checkout-confirmed"]}
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
