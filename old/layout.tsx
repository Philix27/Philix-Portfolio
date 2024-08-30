import "./lib/styles/index.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eligbue Felix",
  description: "Eligbue Felix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <div id="modal-portal" />
      </body>
    </html>
  );
}
