import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import ConditionalGTM from "@/components/ConditionalGTM/ConditionalGTM";

import '@/styles/globals.css';
import { RootLayout } from "@/components/RootLayout/RootLayout";
import Title from "@/components/Title/Title";

const dmSans = DM_Sans({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ["latin"], 
  variable: "--font-dm-sans", 
});

export const metadata: Metadata = {
  title: "ENVISION Research Competition",
  description: "A research proposal competition for high school students.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
        <head>
          <ConditionalGTM />
        </head>
        <Title />
        <body
          className={`${dmSans.variable} font-sans`}
        >
          <RootLayout>
            {children}
          </RootLayout>
        </body>
      </html>
  );
}
