import type { AppProps } from "next/app";
import "nextra-theme-docs/style.css";
import "../styles/SlantedBlocks.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function Nextra({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
