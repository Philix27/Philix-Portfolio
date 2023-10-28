import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <div id="modal-portal" />
        <NextScript />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"
          async
        />
      </body>
    </Html>
  );
}
