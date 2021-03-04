import Layout from "../components/Layout";

import "../../public/fonts/hkgrotesk/stylesheet.css";
import "../scss/style.default.scss";
import "react-image-lightbox/style.css";

const App = ({ Component, pageProps }) => {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
};

// This default export is required in a new `pages/_app.js` file.
export default App;
