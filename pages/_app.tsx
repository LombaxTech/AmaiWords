import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/AuthContext";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <AuthProvider>
    <div data-theme="light" className="min-h-screen flex flex-col">
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </div>
    // </AuthProvider>
  );
}
