import Layout from "@/container/Layout";
import { wrapper } from "@/features/store";
import { Provider } from "react-redux";
import "@/styles/globals.css";
import { useEffect } from "react";
import { loadUserData } from "@/features/userSignin/userSigninSlice";
import { Toaster } from "react-hot-toast";

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  useEffect(() => {
    loadUserData(store);
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </Provider>
  );
}
