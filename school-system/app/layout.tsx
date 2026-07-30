import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles/scss/hope-ui.scss";
import "./styles/scss/custom.scss";
import "./styles/scss/dark.scss";
import "./styles/scss/rtl.scss";
import "./styles/scss/customizer.scss";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "School Management System",
  description: "Built with Next.js and Hope UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      dir="ltr"
    >
      <body className="min-h-full flex flex-col">
        <Sidebar />
        <main className="main-content">
          <div className="position-relative iq-banner">
            <Navbar />
            <div className="iq-navbar-header" style={{ height: '215px' }}>
              <div className="container-fluid iq-container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="flex-wrap d-flex justify-content-between align-items-center">
                      <div>
                        <h1>Hello!</h1>
                        <p>Welcome to the School Management System.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="iq-header-img">
                <img src="/images/dashboard/top-header.png" alt="header" className="theme-color-default-img img-fluid w-100 h-100 animated-scaleX" />
              </div>
            </div>
          </div>
          <div className="container-fluid content-inner mt-n5 py-0">
            {children}
          </div>
          <Footer />
        </main>

        {/* Scripts */}
        <Script src="/js/core/libs.min.js" strategy="beforeInteractive" />
        <Script src="/js/core/external.min.js" strategy="beforeInteractive" />
        <Script src="/js/charts/widgetcharts.js" strategy="lazyOnload" />
        <Script src="/js/charts/vectore-chart.js" strategy="lazyOnload" />
        <Script src="/js/charts/dashboard.js" strategy="lazyOnload" />
        <Script src="/js/plugins/fslightbox.js" strategy="lazyOnload" />
        <Script src="/js/plugins/setting.js" strategy="lazyOnload" />
        <Script src="/js/plugins/slider-tabs.js" strategy="lazyOnload" />
        <Script src="/js/plugins/form-wizard.js" strategy="lazyOnload" />
        <Script src="/js/hope-ui.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
