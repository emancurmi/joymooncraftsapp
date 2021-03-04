import { Container } from "reactstrap";
import Link from "next/link";
import { Parallax } from "react-parallax";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        dark: true,
        classes: "bg-hover-white navbar-hover-light",
        color: "transparent",
        sticky: false,
      },
      headerAbsolute: true,
      hideTopbar: true,
      title: "Homepage",
    },
  };
}

export default function Home4() {
  return (
    <>
      <Parallax
        bgImage="/img/photo/dmitriy-ilkevich-437760-unsplash-parallax-react.jpg"
        strength={500}
      >
        <div className="h-100vh light-overlay light-overlay-lg-0 d-flex align-items-center text-dark text-center">
          <Container>
            <div className="py-5 overflow-hidden overlay-content mx-auto">
              <h5 className="text-uppercase text-gray-900 mb-4 letter-spacing-5">
                Just arrived
              </h5>
              <h1 className="mb-5 display-2 font-weight-bold text-uppercase text-gray-900">
                Autumn vibes
              </h1>
              <p>
                <Link href="category">
                  <a className="btn btn-outline-dark">See look book</a>
                </Link>
              </p>
            </div>
          </Container>
        </div>
      </Parallax>
      <Parallax
        bgImage="/img/photo/serrah-galos-494279-unsplash-parallax-react.jpg"
        strength={500}
      >
        <div className="h-100vh light-overlay light-overlay-lg-0 d-flex align-items-center text-dark text-left">
          <Container>
            <div className="py-5 overflow-hidden overlay-content mx-auto">
              <h1 className="mb-3 display-1 font-weight-bold text-uppercase">
                Ethnic
                <br className="display-lg" />
                sweaters
              </h1>
              <p className="h3 font-weight-normal mb-5">
                Trendy. Comfy. Beautiful.{" "}
              </p>
              <p>
                <Link href="category">
                  <a className="btn btn-dark">See look book</a>
                </Link>
              </p>
            </div>
          </Container>
        </div>
      </Parallax>
      <Parallax
        bgImage="/img/photo/kyle-loftus-592041-unsplash-parallax.jpg"
        strength={500}
      >
        <div className="h-100vh light-overlay light-overlay-lg-0 d-flex align-items-center text-dark text-left text-md-right">
          <Container>
            <div className="py-5 overflow-hidden overlay-content mx-auto">
              <h5 className="text-uppercase text-dark font-weight-normal mb-4 letter-spacing-5">
                Our favourites
              </h5>
              <h1 className="mb-3 display-3 font-weight-bold text-uppercase">
                Shirts
              </h1>
              <p className="h3 font-weight-normal mb-5">
                Vestibulum tortor quam.
                <br />
                Feugiat vitae, ultricies eget.
              </p>
              <p>
                <Link href="category">
                  <a className="btn btn-outline-dark">See look book</a>
                </Link>
              </p>
            </div>
          </Container>
        </div>
      </Parallax>
      <Parallax
        bgImage="/img/photo/serrah-galos-494312-unsplash-parallax.jpg"
        strength={500}
      >
        <div className="h-100vh light-overlay light-overlay-lg-0 d-flex align-items-center text-dark text-center">
          <Container>
            <div className="py-5 overflow-hidden overlay-content mx-auto">
              <h1 className="mb-5 display-3 font-weight-bold text-uppercase">
                Men's collection
              </h1>
              <p>
                <Link href="category">
                  <a className="btn btn-dark btn-lg">See look book</a>
                </Link>
              </p>
            </div>
          </Container>
        </div>
      </Parallax>
    </>
  );
}
