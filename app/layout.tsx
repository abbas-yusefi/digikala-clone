import type { Metadata } from "next";
import "./globals.css";
import SearchOverlay from "@/components/layout/header/search-overlay";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: {
    default: "فروشگاه اینترنتی دیجی کالا",
    template: "%s | فروشگاه اینترنتی دیجی کالا",
  },
  description:
    "هر آنچه که نیاز دارید با بهترین قیمت از دیجی‌کالا بخرید! جدیدترین انواع گوشی موبایل، لپ تاپ، لباس، لوازم آرایشی و بهداشتی، کتاب، لوازم خانگی، خودرو و... با امکان تعویض و مرجوعی آسان | ✓ارسال رايگان ✓پرداخت در محل ✓ضمانت بازگشت کالا - برای خرید کلیک کنید!",

  metadataBase: new URL("http://localhost:3000"),

  openGraph: {
    type: "website",
    title: "فروشگاه اینترنتی دیجی کالا",
    description:
      "هر آنچه که نیاز دارید با بهترین قیمت از دیجی‌کالا بخرید! جدیدترین انواع گوشی موبایل، لپ تاپ، لباس، لوازم آرایشی و بهداشتی، کتاب، لوازم خانگی، خودرو و... با امکان تعویض و مرجوعی آسان | ✓ارسال رايگان ✓پرداخت در محل ✓ضمانت بازگشت کالا - برای خرید کلیک کنید!",
    siteName: "دیجی کالا",
    locale: "fa_IR",
    images: [
      {
        url: "/other/openGraphLogo.png",
        width: 1200,
        height: 630,
        alt: "لوگو فروشگاه",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` h-full antialiased hide-scrollbar`}>
      <body className="min-h-full flex flex-col gap-y-4">
        <SessionProvider>
          {children} <SearchOverlay />
        </SessionProvider>
      </body>
    </html>
  );
}
