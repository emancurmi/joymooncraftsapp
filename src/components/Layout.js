import Head from "next/head";
import NextNProgress from "../components/NextNProgress";

import Header from "./Header";
import Footer from "./Footer";

import { FormProvider } from "./FormContext";
import { useEffect, useState } from "react";

const Layout = (pageProps) => {
  const [paddingTop, setPaddingTop] = useState(0);
  const headerProps = {
    nav: {
      classes: pageProps.nav && pageProps.nav.classes,
      fixed: pageProps.nav && pageProps.nav.fixed,
      color: pageProps.nav && pageProps.nav.color,
      light: pageProps.nav && pageProps.nav.light,
      dark: pageProps.nav && pageProps.nav.dark,
      sticky: pageProps.nav && pageProps.nav.sticky,
    },
    loggedUser: pageProps.loggedUser,
    headerClasses: pageProps.headerClasses,
    headerAbsolute: pageProps.headerAbsolute,
    hideTopbar: pageProps.hideTopbar,
    setPaddingTop: (event) => setPaddingTop(event),
  };

  return (
    <div
      style={{ paddingTop: pageProps.noPaddingTop ? "0" : paddingTop }}
      className={pageProps.className}
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
        />

        <link rel="icon" href="/img/favicon.png" />
        <link
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          rel="stylesheet"
        />
        <title>{pageProps.title} - Sell Theme [React]</title>
      </Head>

      <NextNProgress color="#3494E6" options={{ showSpinner: false }} />

      {!pageProps.hideHeader && <Header {...headerProps} />}

      <FormProvider>
        <main>{pageProps.children}</main>
      </FormProvider>

      {!pageProps.hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
