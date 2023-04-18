import Layout from "@/container/Layout";
import { wrapper } from "@/features/store";
import { Provider, useStore } from "react-redux";
import "@/styles/globals.css";
import { useEffect } from "react";
import {
  loadUserData,
  userAsyncSignin,
} from "@/features/userSignin/userSigninSlice";
import http from "@/services/httpService";

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
      </Layout>
    </Provider>
  );
}
