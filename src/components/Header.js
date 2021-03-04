import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";
import Router from "next/router";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col,
  Badge,
} from "reactstrap";

import UseWindowSize from "../hooks/UseWindowSize";
import useScrollPosition from "@react-hook/window-scroll";
import useSize from "@react-hook/size";

import Logo from "../../public/svg/logo.svg";

import ActiveLink from "./ActiveLink";
import CartOverviewDropdown from "./CartOverviewDropdown";

import menu from "../data/menu.json";
import userMenu from "../data/user-menu.json";

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [searchToggle, setSearchToggle] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);
  const [parentName, setParentName] = useState(false);
  const [additionalNavClasses, setAdditionalNavClasses] = useState("");

  const size = UseWindowSize();
  const scrollY = useScrollPosition();

  const navbarRef = useRef(null);
  const topbarRef = useRef(null);
  const [topbarWidth, topbarHeight] = useSize(topbarRef);
  const [navbarWidth, navbarHeight] = useSize(navbarRef);

  const onFocus = () => setSearchFocus(!searchFocus);

  const toggleDropdown = (name) => {
    setDropdownOpen({ ...dropdownOpen, [name]: !dropdownOpen[name] });
  };

  const onLinkClick = (parent) => {
    size.width < 991 && setCollapsed(!collapsed);
    setParentName(parent);
  };

  const makeNavbarSticky = () => {
    if (props.nav.sticky !== false) {
      if (scrollY > topbarHeight) {
        setAdditionalNavClasses("fixed-top");
        navbarHeight > 0 &&
          props.headerAbsolute !== true &&
          props.setPaddingTop(navbarHeight);
      } else {
        setAdditionalNavClasses("");
        props.setPaddingTop(0);
      }
    } else {
      setAdditionalNavClasses("");
      props.setPaddingTop(0);
    }
  };

  useEffect(() => {
    makeNavbarSticky();
  }, [scrollY, topbarHeight]);

  // highlight not only active dropdown item, but also its parent, i.e. dropdown toggle
  const highlightDropdownParent = () => {
    menu.map((item) => {
      item.dropdown &&
        item.dropdown.map((dropdownLink) => {
          dropdownLink.link &&
            dropdownLink.link === Router.route &&
            setParentName(item.title);
          dropdownLink.links &&
            dropdownLink.links.map(
              (link) => link.link === Router.route && setParentName(item.title)
            );
        });
      item.megamenu &&
        item.megamenu.map((megamenuColumn) =>
          megamenuColumn.map((megamenuBlock) =>
            megamenuBlock.links.map((dropdownLink) => {
              if (dropdownLink.link === Router.route) {
                dropdownLink.parent
                  ? setParentName(dropdownLink.parent)
                  : setParentName(item.title);
              }
            })
          )
        );
      item.link === Router.route && setParentName(item.title);
    });
  };

  useEffect(highlightDropdownParent, []);

  return (
    <header
      className={`header ${props.headerClasses ? props.headerClasses : ""} ${
        props.headerAbsolute ? "header-absolute" : ""
      }`}
    >
      {/* Top Bar*/}
      {!props.hideTopbar && (
        <div className="top-bar" ref={topbarRef}>
          <Container fluid={true}>
            <Row className="d-flex align-items-center">
              <Col sm="7" className="d-none d-sm-block">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item pr-3 mr-0">
                    <svg className="svg-icon mr-2">
                      <use xlinkHref="/icons/orion-svg-sprite.svg#calls-1"></use>
                    </svg>
                    020-800-456-747
                  </li>
                  <li className="list-inline-item px-3 border-left d-none d-lg-inline-block">
                    Free shipping on orders over $300
                  </li>
                </ul>
              </Col>
              <Col sm="5" className="d-flex justify-content-end">
                {/* Language Dropdown*/}
                <Dropdown
                  className="border-right px-3"
                  key="language_dropdown"
                  isOpen={dropdownOpen["language_dropdown"]}
                  toggle={() => toggleDropdown("language_dropdown")}
                >
                  <DropdownToggle
                    caret
                    tag="a"
                    href="#"
                    className="topbar-link"
                    id="langsDropdown"
                  >
                    <img
                      className="topbar-flag"
                      src="/svg/united-kingdom.svg"
                      alt="english"
                    />
                    English
                  </DropdownToggle>
                  <DropdownMenu right aria-labelledby="langsDropdown">
                    <DropdownItem className="text-sm">
                      <img
                        className="topbar-flag"
                        src="/svg/germany.svg"
                        alt="german"
                      />
                      German
                    </DropdownItem>
                    <DropdownItem className="text-sm">
                      <img
                        className="topbar-flag"
                        src="/svg/france.svg"
                        alt="french"
                      />
                      French
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                {/* Currency Dropdown*/}
                <Dropdown
                  className="pl-3 ml-0"
                  key="currency_dropdown"
                  isOpen={dropdownOpen["currency_dropdown"]}
                  toggle={() => toggleDropdown("currency_dropdown")}
                >
                  <DropdownToggle
                    caret
                    tag="a"
                    href="#"
                    className="topbar-link"
                    id="currencyDropdown"
                  >
                    USD
                  </DropdownToggle>
                  <DropdownMenu right aria-labelledby="currencyDropdown">
                    <DropdownItem className="text-sm">EUR</DropdownItem>
                    <DropdownItem className="text-sm">GBP</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
          </Container>
        </div>
      )}
      {/* Top Bar End*/}
      {/* Navbar*/}
      <div ref={navbarRef}>
        <Navbar
          color={
            props.nav.color
              ? Object.values(dropdownOpen).some((dropdown) => dropdown) ||
                collapsed
                ? "white"
                : props.nav.color
              : "white"
          }
          light={
            props.nav.light ||
            Object.values(dropdownOpen).some((dropdown) => dropdown) ||
            collapsed
          }
          dark={
            props.nav.dark &&
            !Object.values(dropdownOpen).some((dropdown) => dropdown) &&
            !collapsed
          }
          fixed={props.nav.fixed ? props.nav.fixed : ""}
          expand="lg"
          className={` ${
            props.nav.classes
              ? props.nav.classes
              : "navbar-sticky bg-fixed-white"
          } ${additionalNavClasses ? additionalNavClasses : ""}`}
        >
          <Container fluid>
            {/* Navbar Header  */}
            <Link href="/" passHref>
              <a className="py-1 navbar-brand">
                <Logo />
              </a>
            </Link>

            <NavbarToggler
              onClick={() => setCollapsed(!collapsed)}
              className="navbar-toggler-right"
            >
              <i className="fa fa-bars"></i>
            </NavbarToggler>
            {/* Navbar Collapse */}
            <Collapse isOpen={collapsed} navbar>
              <Nav navbar className="mx-auto">
                {menu &&
                  menu.map((item) =>
                    item.dropdown || item.megamenu ? (
                      // show entire menu to unlogged user or hide items that have hideToLoggedUser set to true
                      !props.loggedUser ||
                      (props.loggedUser && !item.hideToLoggedUser) ? (
                        <Dropdown
                          nav
                          inNavbar
                          key={item.title}
                          className={
                            item.position ? `position-${item.position}` : ``
                          }
                          isOpen={dropdownOpen[item.title]}
                          toggle={() => toggleDropdown(item.title)}
                        >
                          <DropdownToggle
                            nav
                            caret
                            className={
                              parentName === item.title ? "active" : ""
                            }
                          >
                            {item.title}
                          </DropdownToggle>
                          <DropdownMenu
                            className={` ${
                              item.megamenu ? "megamenu py-lg-0" : ""
                            }`}
                          >
                            {item.dropdown &&
                              item.dropdown.map((dropdownItem) =>
                                dropdownItem.links ? (
                                  <React.Fragment key={dropdownItem.title}>
                                    {dropdownItem.divider && (
                                      <DropdownItem divider />
                                    )}
                                    <h6 className="dropdown-header font-weight-normal">
                                      {dropdownItem.title}
                                    </h6>
                                    {dropdownItem.links.map((link) => (
                                      <ActiveLink
                                        key={link.title}
                                        activeClassName="active"
                                        href={link.link}
                                        passHref
                                      >
                                        <DropdownItem
                                          onClick={() =>
                                            onLinkClick(item.title)
                                          }
                                        >
                                          {link.title}
                                          {link.new && (
                                            <Badge
                                              color="warning"
                                              className="ml-1 mt-n1"
                                            >
                                              New
                                            </Badge>
                                          )}
                                        </DropdownItem>
                                      </ActiveLink>
                                    ))}
                                  </React.Fragment>
                                ) : (
                                  <ActiveLink
                                    key={dropdownItem.title}
                                    activeClassName="active"
                                    href={dropdownItem.link}
                                    passHref
                                  >
                                    <DropdownItem
                                      onClick={() => onLinkClick(item.title)}
                                    >
                                      {dropdownItem.title}
                                      {dropdownItem.new && (
                                        <Badge
                                          color="warning"
                                          className="ml-1 mt-n1"
                                        >
                                          New
                                        </Badge>
                                      )}
                                    </DropdownItem>
                                  </ActiveLink>
                                )
                              )}
                            {item.megamenu && (
                              <Row>
                                <Col lg="9">
                                  <Row className="p-3 pr-lg-0 pl-lg-5 pt-lg-5">
                                    {item.megamenu.map(
                                      (megamenuItem, index) => (
                                        <Col key={index} lg="3">
                                          {megamenuItem.map((block, index) => (
                                            <React.Fragment key={index}>
                                              <h6 className="text-uppercase">
                                                {block.title}
                                              </h6>
                                              <ul className="megamenu-list list-unstyled">
                                                {block.links.map(
                                                  (link, index) => (
                                                    <li
                                                      key={index}
                                                      className="megamenu-list-item"
                                                    >
                                                      <ActiveLink
                                                        activeClassName="active"
                                                        href={link.link}
                                                        as={link.as}
                                                        passHref
                                                      >
                                                        <DropdownItem
                                                          className="megamenu-list-link"
                                                          onClick={() =>
                                                            link.parent
                                                              ? onLinkClick(
                                                                  link.parent
                                                                )
                                                              : onLinkClick(
                                                                  item.title
                                                                )
                                                          }
                                                        >
                                                          {link.title}
                                                          {link.new && (
                                                            <Badge
                                                              color="warning"
                                                              className="ml-1 mt-n1"
                                                            >
                                                              New
                                                            </Badge>
                                                          )}
                                                        </DropdownItem>
                                                      </ActiveLink>
                                                    </li>
                                                  )
                                                )}
                                              </ul>
                                            </React.Fragment>
                                          ))}
                                        </Col>
                                      )
                                    )}
                                  </Row>
                                  {item.services && (
                                    <Row className="megamenu-services d-none d-lg-flex pl-lg-5">
                                      {item.services.map((service) => (
                                        <Col
                                          key={service.title}
                                          xl="3"
                                          lg="6"
                                          className="d-flex"
                                        >
                                          <div className="megamenu-services-item">
                                            <svg className="svg-icon megamenu-services-icon">
                                              <use
                                                xlinkHref={service.icon}
                                              ></use>
                                            </svg>
                                            <div>
                                              <h6 className="text-uppercase">
                                                {service.title}
                                              </h6>
                                              <p className="mb-0 text-muted text-sm">
                                                {service.content}
                                              </p>
                                            </div>
                                          </div>
                                        </Col>
                                      ))}
                                    </Row>
                                  )}
                                </Col>
                                {item.image && (
                                  <Col lg="3" className="d-none d-lg-block">
                                    <img
                                      src={item.image}
                                      alt=""
                                      className="bg-image"
                                    />
                                  </Col>
                                )}
                              </Row>
                            )}
                          </DropdownMenu>
                        </Dropdown>
                      ) : (
                        ""
                      )
                    ) : (props.loggedUser && !item.hideToLoggedUser) ||
                      !props.loggedUser ? (
                      <NavItem
                        key={item.title}
                        className={
                          item.button
                            ? "mt-3 mt-lg-0 ml-lg-3 d-lg-none d-xl-inline-block"
                            : ""
                        }
                      >
                        {item.button ? (
                          item.showToLoggedUser !== false && (
                            <ActiveLink
                              activeClassName="active"
                              href={item.link}
                            >
                              <a
                                className="btn btn-primary"
                                onClick={() => onLinkClick(item.title)}
                              >
                                {item.title}
                              </a>
                            </ActiveLink>
                          )
                        ) : (
                          <ActiveLink
                            activeClassName="active"
                            href={item.link}
                            passHref
                          >
                            <NavLink onClick={() => onLinkClick(item.title)}>
                              {item.title}
                            </NavLink>
                          </ActiveLink>
                        )}
                      </NavItem>
                    ) : (
                      ""
                    )
                  )}
              </Nav>

              <div className="d-flex align-items-center justify-content-between justify-content-lg-end mt-1 mb-2 my-lg-0">
                {/* Search Button*/}
                <div
                  className="nav-item navbar-icon-link"
                  data-toggle="search"
                  onClick={() => setSearchToggle(!searchToggle)}
                >
                  <svg className="svg-icon">
                    <use xlinkHref="/icons/orion-svg-sprite.svg#search-1"></use>
                  </svg>
                </div>

                {props.loggedUser ? (
                  userMenu.map((item) => (
                    <Dropdown
                      nav
                      inNavbar
                      key={item.title}
                      tag="div"
                      className={
                        item.type === "avatar"
                          ? "navbar-icon-link mt-n1 py-0"
                          : ""
                      }
                      isOpen={dropdownOpen[item.title]}
                      toggle={() => toggleDropdown(item.title)}
                    >
                      {/* Logged User - Show User Menu */}
                      <DropdownToggle
                        nav
                        style={item.type === "avatar" && { padding: 0 }}
                      >
                        {item.type === "avatar" ? (
                          <img
                            src={item.img}
                            alt={item.title}
                            className="avatar avatar-sm avatar-border-white"
                          />
                        ) : (
                          item.title
                        )}
                      </DropdownToggle>
                      <DropdownMenu right>
                        {item.dropdown &&
                          item.dropdown.map((dropdownItem, dropdownIndex) =>
                            dropdownItem.divider ? (
                              <DropdownItem key={dropdownIndex} divider />
                            ) : (
                              <ActiveLink
                                key={dropdownIndex}
                                activeClassName="active"
                                href={dropdownItem.link}
                                passHref
                              >
                                <DropdownItem
                                  onClick={() => onLinkClick(item.title)}
                                >
                                  {dropdownItem.title}
                                </DropdownItem>
                              </ActiveLink>
                            )
                          )}
                      </DropdownMenu>
                    </Dropdown>
                  ))
                ) : (
                  <div className="nav-item">
                    {/* User Not Logged - link to login page*/}
                    <Link href="/customer-login">
                      <a className="navbar-icon-link">
                        <svg className="svg-icon">
                          <use xlinkHref="/icons/orion-svg-sprite.svg#male-user-1"></use>
                        </svg>
                        <span className="text-sm ml-2 ml-lg-0 text-uppercase text-sm font-weight-bold d-none d-sm-inline d-lg-none">
                          Log in
                        </span>
                      </a>
                    </Link>
                  </div>
                )}

                {/* Cart Overview Dropdown*/}

                <CartOverviewDropdown />
              </div>
            </Collapse>
          </Container>
        </Navbar>
      </div>
      {/* /Navbar */}
      {/* Fullscreen search area*/}
      {searchToggle && (
        <div className="search-area-wrapper" style={{ display: "block" }}>
          <div className="search-area d-flex align-items-center justify-content-center">
            <div
              className="close-btn"
              onClick={() => setSearchToggle(!searchToggle)}
            >
              <svg className="svg-icon svg-icon-light w-3rem h-3rem">
                <use xlinkHref="/icons/orion-svg-sprite.svg#close-1"> </use>
              </svg>
            </div>
            <form className="search-area-form" action="#">
              <div className="form-group position-relative">
                <input
                  className="search-area-input"
                  type="search"
                  name="search"
                  id="search"
                  autoFocus
                  placeholder="What are you looking for?"
                />
                <button className="search-area-button" type="submit">
                  <svg className="svg-icon">
                    <use xlinkHref="/icons/orion-svg-sprite.svg#search-1"></use>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* /Fullscreen search area*/}
    </header>
  );
};

export default Header;
