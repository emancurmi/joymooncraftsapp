import { Container } from "reactstrap";
import Image from "../components/CustomImage";

export async function getStaticProps() {
  return {
    props: {
      hideHeader: true,
      hideFooter: true,
      noPaddingTop: true,
      title: "Coming Soon",
    },
  };
}

export default function ComingSoon() {
  return (
    <>
      <div className="mh-full-screen d-flex align-items-center dark-overlay">
        <Image
          className="bg-image"
          src="/img/photo/pete-bellis-189599-unsplash-big.jpg"
          alt=""
          layout="fill"
        />

        <Container className="text-white text-center text-lg overlay-content py-6 py-lg-0">
          <h1 className="text-hide">Coming soon</h1>
          <div className=" mx-auto mb-6">
            <Image
              className="bg-image"
              src="/img/coming-soon.png"
              alt=""
              width={489}
              height={279}
            />
          </div>
          <h3 className="mb-5 font-weight-normal">
            Sell. store is coming to you soon.
          </h3>
          <p className="mb-4">
            <i className="fas fa-map-marker-alt mr-2" /> 25 Baker St., LB8 E18
            London, UK
          </p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a
                className="text-white"
                href="#"
                target="_blank"
                title="twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="text-white"
                href="#"
                target="_blank"
                title="facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="text-white"
                href="#"
                target="_blank"
                title="instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="text-white"
                href="#"
                target="_blank"
                title="pinterest"
              >
                <i className="fab fa-pinterest"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-white" href="#" target="_blank" title="vimeo">
                <i className="fab fa-vimeo"></i>
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
}
