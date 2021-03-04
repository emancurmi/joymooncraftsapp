import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import Link from "next/link";

import steps from "../data/checkout-steps.json";

const CheckoutNav = ({ activeStep = 1 }) => {
  return (
    <Nav pills className="custom-nav mb-5">
      {steps.map((step) => {
        const active = step.id === activeStep;
        if (step.nav === true)
          return (
            <NavItem key={step.id} className="w-25">
              <Link href={step.link} passHref>
                <NavLink
                  className={`text-sm ${
                    step.id > activeStep ? "disabled " : ""
                  }`}
                  active={active}
                >
                  {step.name}
                </NavLink>
              </Link>
            </NavItem>
          );
      })}
    </Nav>
  );
};

export default CheckoutNav;
