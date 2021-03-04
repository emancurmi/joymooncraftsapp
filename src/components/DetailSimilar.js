import { Row, Col } from "reactstrap";

import Product from "./Product";

import products from "../data/products.json";

const DetailSimilar = (props) => {
  return (
    <section className="my-5">
      <div className="container">
        <header className="text-center">
          <h6 className="text-uppercase mb-5">You might also like</h6>
        </header>

        <Row>
          {products.slice(0, 6).map((value, index) => (
            <Col xl="2" lg="2" md="4" xs="6" key={index}>
              <Product data={value} onlyViewButton />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default DetailSimilar;
