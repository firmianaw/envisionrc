'use client';

import { NextUIProvider } from "@nextui-org/react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export function RootLayout( {children} : { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </NextUIProvider>
  );
}