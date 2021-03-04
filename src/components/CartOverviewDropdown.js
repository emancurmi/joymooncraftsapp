import React, { useState } from "react";

import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

import Link from "next/link";

import CartOverviewItem from "./CartOverviewItem";

import items from "../data/products-cart.json";

export default function CartDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (name) => {
    setDropdownOpen({ ...dropdownOpen, [name]: !dropdownOpen[name] });
  };

  return (
    <>
      <div className="nav-item">
        <Link href="/cart">
          <a className="navbar-icon-link d-lg-none">
            <svg className="svg-icon">
              <use xlinkHref="/icons/orion-svg-sprite.svg#cart-1"> </use>
            </svg>
            <span className="text-sm ml-2 ml-lg-0 text-uppercase text-sm font-weight-bold d-none d-sm-inline d-lg-none">
              View cart
            </span>
          </a>
        </Link>
        <div className="d-none d-lg-block">
          {/* Cart Dropdown*/}
          <Dropdown
            inNavbar
            key="cart_dropdown"
            isOpen={dropdownOpen["cart_dropdown"]}
            toggle={() => toggleDropdown("cart_dropdown")}
          >
            <DropdownToggle tag="a" href="#" className="navbar-icon-link">
              <svg className="svg-icon">
                <use xlinkHref="/icons/orion-svg-sprite.svg#cart-1"> </use>
              </svg>
              <div className="navbar-icon-link-badge">3 </div>
            </DropdownToggle>
            <DropdownMenu right className="p-4">
              <div className="navbar-cart-product-wrapper">
                {items.map((item, index) => (
                  <CartOverviewItem
                    item={item}
                    key={index}
                    hideCart={() => toggleDropdown("cart_dropdown")}
                  />
                ))}
              </div>
              {/* total price*/}
              <div className="navbar-cart-total">
                <span className="text-uppercase text-muted">Total</span>
                <strong className="text-uppercase">$240.00</strong>
              </div>
              {/* buttons*/}
              <div className="d-flex justify-content-between">
                <Link href="/cart">
                  <a
                    className="btn btn-link text-dark mr-3"
                    onClick={() => toggleDropdown("cart_dropdown")}
                  >
                    View Cart <i className="fa-arrow-right fa" />
                  </a>
                </Link>
                <Link href="/checkout-1">
                  <a
                    className="btn btn-outline-dark"
                    onClick={() => toggleDropdown("cart_dropdown")}
                  >
                    Checkout
                  </a>
                </Link>
              </div>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </>
  );
}
