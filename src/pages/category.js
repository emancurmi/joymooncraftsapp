import { Container, Row, Col } from "reactstrap";

import ShopSidebar from "../components/ShopSidebar";
import ShopHeader from "../components/ShopHeader";
import ShopPagination from "../components/ShopPagination";
import Product from "../components/Product";
import Hero from "../components/Hero";

import products from "../data/products.json";
import data from "../data/category.json";

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

export default function Category() {
  return (
    <>
      <Hero
        title={data.subtitle}
        breadcrumbs={data.breadcrumbs}
        content={data.content}
      />

      <Container>
        <Row>
          <Col xl="9" lg="8" className="products-grid order-lg-2">
            <ShopHeader />

            <Row>
              {products.map((value, index) => (
                <Col key={index} sm="6" xl="4">
                  <Product data={value} showQuickView />
                </Col>
              ))}
            </Row>

            <ShopPagination />
          </Col>
          <ShopSidebar />
        </Row>
      </Container>
    </>
  );
}
