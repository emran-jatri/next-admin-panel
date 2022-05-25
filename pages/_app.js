import DefaultLayout from "../components/layouts/DefaultLayout.js";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	// Use the layout defined at the page level, if available
  const getLayout = Component.layout || ((page) => <DefaultLayout>{page}</DefaultLayout>)
  return getLayout(
    // <DefaultLayout>
      <Component {...pageProps} />
    // </DefaultLayout>
  );
}

export default MyApp;
