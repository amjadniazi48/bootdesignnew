import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "./theme.css";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="ur" data-bs-theme="light">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
        <title>Homepage - BootNews Magazine</title>
        <meta
          name="description"
          content="Bootnews Bootstrap 5 News Magazine Template"
        />
        <meta
          name="keywords"
          content="bootstrap news, bootstrap portal, bootstrap blog, bootstrap magazine"
        />

        <link
          rel="shortcut icon"
          href="./assets/img/favicon/favicon.ico"
          type="image/x-icon"
        />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="apple-touch-icon"
          href="../../assets/img/favicon/apple-icon.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div className="wrapper">{children}</div>

        <a
          className="back-top btn btn-light border position-fixed r-1 b-1"
          href="javascript:void(0);"
        >
          <svg
            className="bi bi-arrow-up"
            width="1rem"
            height="1rem"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z"
              clipRule="evenodd"
            ></path>
            <path
              fillRule="evenodd"
              d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <Script src="/assets/js/hc-sticky.js" />
        <Script src="/assets/js/flickity.pkgd.min.js" />
        <Script src="/assets/js/lazyload.min.js" />
        <Script src="/assets/js/SmoothScroll.js" />

        <Script src="/assets/js/theme.js" />
      </body>
    </html>
  );
}
