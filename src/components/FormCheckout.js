import React, { useState, useContext } from "react";

import Link from "next/link";

import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  CustomInput,
  Collapse,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";

import { FormContext } from "./FormContext";
import Cart from "./Cart";

import data from "../data/checkout.json";
import productsCart from "../data/products-cart.json";

//import CartItems from './CartItems'

const FormCheckout = ({ step, next, prev }) => {
  const [formInputs, setFormInputs] = useContext(FormContext); // Checkout inputs context

  const [collapse, setCollapse] = useState(false);
  const [multiCollapse, setMultiCollapse] = useState(
    formInputs["Payment Method"]
      ? Object.keys(formInputs["Payment Method"])[0]
      : {}
  ); // Set default first payment method

  const toggleCollapse = (e, name) => {
    setCollapse(!collapse);

    setFormInputs({ ...formInputs, [e.target.name]: value });
    const value = e.target.value; // Input value
  };

  const toggleMultiCollapse = (e, name) => {
    // Set collapse by name
    e.preventDefault();
    setMultiCollapse(name);
  };
  const onChange = (e, groupName, tabName) => {
    // On input change

    const value = e.target.value; // Input value

    groupName // If group value present set group value
      ? formInputs[groupName] // If group input value present set update
        ? setFormInputs({
            ...formInputs,
            [groupName]: {
              [tabName]: {
                ...formInputs[groupName][tabName],
                [e.target.name]: value,
              },
            },
          })
        : // else set values
          setFormInputs({
            ...formInputs,
            [groupName]: { [tabName]: { [e.target.name]: value } },
          })
      : // else set single input
        setFormInputs({ ...formInputs, [e.target.name]: value });
  };
  const onRadioChange = (e, input, groupName, tabName) => {
    // On radio input change

    const value = e.target.id; // Input value

    groupName // If group value present set group value
      ? setFormInputs({
          ...formInputs,
          [groupName]: { [tabName]: [value, input.label] },
        })
      : // else set single input
        setFormInputs({
          ...formInputs,
          [e.target.name]: [value, input.label, input.price],
        });
  };

  return (
    <Form>
      {data.map((block) => {
        return block.step === step ? ( // Checkout step check
          <Collapse
            key={block.name}
            isOpen={block.collapse ? formInputs["show-shipping-address"] : true}
          >
            {block.title && <h3 className={block.titleclass}>{block.name}</h3>}

            {/* INPUTS */}
            {block.inputs && (
              <Row>
                {block.inputs.map((input, index) => (
                  <React.Fragment key={index}>
                    {/* TEXT INPUT */}
                    {input.type === "text" && (
                      <FormGroup key={index} className="col-md-6">
                        <Label className="form-label" for={input.name}>
                          {input.label}
                        </Label>
                        <Input
                          type={input.type}
                          name={input.name}
                          placeholder={input.placeholder}
                          id={input.name}
                          value={formInputs[input.name] || ""}
                          onChange={(e) => onChange(e)}
                        />
                      </FormGroup>
                    )}
                    {/* END TEXT INPUT */}

                    {/* SHIPPING ADDRESS TOGGLER */}
                    {input.toggleshipping && (
                      <FormGroup key={index} className="col-12 mt-3">
                        <div className="custom-control custom-checkbox">
                          {/* On change set shipping address form open and set value to context */}
                          <input
                            className="custom-control-input"
                            onChange={(e) =>
                              setFormInputs({
                                ...formInputs,
                                [e.target.name]: collapse,
                              })
                            }
                            id={input.name}
                            type={input.type}
                            name={input.name}
                            checked={formInputs[input.name] || ""}
                          />

                          <label
                            onClick={() => setCollapse(!collapse)}
                            className="custom-control-label align-middle"
                            htmlFor={input.name}
                          >
                            {input.label}
                          </label>
                        </div>
                      </FormGroup>
                    )}
                    {/* END SHIPPING ADDRESS TOGGLER */}

                    {/* RADIO INPUT */}
                    {input.type === "radio" && (
                      <Col md="6" key={index}>
                        <div className="card-radio mb-4">
                          <label className="card-label" htmlFor={input.id} />
                          <input
                            className="card-radio-input"
                            type={input.type}
                            name={input.name}
                            id={input.id}
                            onChange={(e) => onRadioChange(e, input)} // On change func
                            checked={
                              formInputs[input.name]
                                ? formInputs[input.name][0] === input.id
                                : index === 0
                            } // Checked input control, if first input checked by default
                          />
                          <Card>
                            <CardHeader>
                              <h6 className="mb-0 text-uppercase">
                                {input.label}
                              </h6>
                            </CardHeader>
                            <CardBody>
                              {input.price && (
                                <h6 className="mb-3">
                                  ${input.price.toFixed(2)}
                                </h6>
                              )}
                              <p className="text-muted text-sm card-text">
                                {input.text}
                              </p>
                            </CardBody>
                          </Card>
                        </div>
                      </Col>
                    )}
                    {/* END RADIO INPUT */}
                  </React.Fragment>
                ))}
              </Row>
            )}
            {/* END INPUTS */}

            {/* REVIEW CART ITEMS  */}
            {block.reviewtable && (
              <div className="mb-5">
                <Cart review />
              </div>
            )}
            {/* END REVIEW CART ITEMS */}

            {/* COLLAPSIBLE INPUTS */}
            {block.tabs && (
              <div className="mb-5">
                {block.tabs.map((tab) => {
                  const isCollapse =
                    Object.keys(multiCollapse).length === 0
                      ? tab.default
                      : multiCollapse === tab.name;
                  return (
                    <div key={tab.name} className="block mb-3">
                      <div className="block-header">
                        <a
                          href="#"
                          className={`accordion-link font-weight-bold ${
                            !isCollapse ? "collapsed" : ""
                          }`}
                          onClick={(e) => toggleMultiCollapse(e, tab.name)}
                          aria-expanded={isCollapse}
                        >
                          {tab.name}
                        </a>
                      </div>
                      <Collapse isOpen={isCollapse}>
                        <div className="block-body">
                          <Row>
                            {tab.inputs.map((input) =>
                              input.type === "radio" ? (
                                <Col key={input.name}>
                                  <CustomInput
                                    type={input.type}
                                    id={input.id}
                                    name={input.name}
                                    label={
                                      <React.Fragment>
                                        <span className="d-block h6 mt-1 mb-3">
                                          {input.label}
                                        </span>
                                        <span className="text-muted text-sm">
                                          {input.text}
                                        </span>
                                      </React.Fragment>
                                    }
                                    onChange={(e) =>
                                      onRadioChange(
                                        e,
                                        input,
                                        block.name,
                                        tab.name
                                      )
                                    } // On change func
                                    checked={
                                      (formInputs[block.name] &&
                                        formInputs[block.name][tab.name] &&
                                        formInputs[block.name][tab.name][0] ===
                                          input.id) ||
                                      false
                                    } // Checked input control
                                  />
                                </Col>
                              ) : (
                                <FormGroup
                                  key={input.name}
                                  className={`col-md-${
                                    input.col ? input.col : 6
                                  }`}
                                >
                                  <Label
                                    className="form-label"
                                    for={input.name}
                                  >
                                    {input.label}
                                  </Label>
                                  <Input
                                    type={input.type}
                                    name={input.name}
                                    placeholder={input.placeholder}
                                    value={
                                      (formInputs[block.name] &&
                                        formInputs[block.name][tab.name] &&
                                        formInputs[block.name][tab.name][
                                          input.name
                                        ]) ||
                                      ""
                                    } // Checked input control
                                    onChange={(e) =>
                                      onChange(e, block.name, tab.name)
                                    } // On change func
                                  />
                                </FormGroup>
                              )
                            )}
                          </Row>
                        </div>
                      </Collapse>
                    </div>
                  );
                })}
              </div>
            )}
            {/* END COLLAPSIBLE INPUTS */}
          </Collapse>
        ) : (
          ""
        );
      })}

      {/* CHECKOUT PREV/NEXT BUTTONS */}
      <div className="my-5 d-flex justify-content-between flex-column flex-lg-row">
        <Link href={prev[1]} passHref>
          <Button color="link" className="text-muted">
            <i className="fa fa-angle-left mr-2" />
            {prev[0]}
          </Button>
        </Link>
        <Link href={next[1]} passHref>
          <Button color="dark">
            {next[0]}
            <i className="fa fa-angle-right ml-2" />
          </Button>
        </Link>
      </div>
      {/* END CHECKOUT PREV/NEXT BUTTONS */}
    </Form>
  );
};

export default FormCheckout;
