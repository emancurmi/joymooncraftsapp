import { Row, Col, Form, Button, Label, Input } from "reactstrap";

import Link from "next/link";

import SelectBox from "./SelectBox";
import Stars from "./Stars";

export default function DetailMain({ product }) {
  return (
    <>
      <h1 className="mb-4">{product.name}</h1>
      <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
        <ul className="list-inline mb-2 mb-sm-0">
          <li className="list-inline-item h4 font-weight-light mb-0">
            ${product.price.toFixed(2)}
          </li>

          <li className="list-inline-item text-muted font-weight-light">
            <del>${product.priceBefore.toFixed(2)}</del>
          </li>
        </ul>
        <div className="d-flex align-items-center">
          <Stars
            stars={4}
            secondColor="gray-300"
            starClass="mr-1"
            className="mr-2"
          />

          <span className="text-muted text-uppercase text-sm mt-1">
            {product.reviewscount} reviews
          </span>
        </div>
      </div>
      <p className="mb-4 text-muted">{product.description.short}</p>

      <Form>
        <Row>
          <Col sm="6" lg="12" xl="6" className="detail-option mb-4">
            <h6 className="detail-option-heading">
              Size <span>(required)</span>
            </h6>
            <SelectBox options={product.sizes} />
          </Col>
          <Col sm="6" lg="12" xl="6" className="detail-option mb-4">
            <h6 className="detail-option-heading">
              Type <span>(required)</span>
            </h6>
            {product.types.map((type) => (
              <Label
                key={type.value}
                className="btn btn-sm btn-outline-secondary detail-option-btn-label mr-2"
                tag="label"
                for={type.id}
              >
                {" "}
                {type.label}
                <Input
                  className="input-invisible"
                  type="radio"
                  name="material"
                  value={type.value}
                  id={type.id}
                  required
                />
              </Label>
            ))}
          </Col>
          <Col xs="12" lg="6" className="detail-option mb-5">
            <label className="detail-option-heading font-weight-bold">
              Items <span>(required)</span>
            </label>
            <input
              className="form-control detail-quantity"
              name="items"
              type="number"
              defaultValue={1}
            />
          </Col>
        </Row>

        <ul className="list-inline mb-5">
          <li className="list-inline-item">
            <Button color="dark" size="lg" className="mb-1" type="submit">
              <i className="fa fa-shopping-cart mr-2" />
              Add to Cart
            </Button>
          </li>
          <li className="list-inline-item">
            <Button color="outline-secondary" className="mb-1" href="#">
              <i className="far fa-heart mr-2" />
              Add to wishlist
            </Button>
          </li>
        </ul>

        <ul className="list-unstyled">
          <li>
            <strong>Category:&nbsp;</strong>
            <a className="text-muted" href="#">
              {product.category}
            </a>
          </li>
          <li>
            <strong>Tags:&nbsp;</strong>
            {product.tags.map((tag, index) => (
              <React.Fragment key={tag.name}>
                <Link href={tag.link}>
                  <a className="text-muted">{tag.name}</a>
                </Link>
                {index < product.tags.length - 1 ? ",\u00A0" : ""}
              </React.Fragment>
            ))}
          </li>
        </ul>
      </Form>
    </>
  );
}
