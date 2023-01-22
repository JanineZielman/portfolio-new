import Link from "next/link";
import { PrismicLink, PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "../prismicio";

import "../styles/globals.scss";
import "../styles/breakpoints.scss";

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={Link}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
