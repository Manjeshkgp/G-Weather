import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import ThemeWrapper from "@/components/Wrappers/ThemeWrapper";
import { Providers } from "@/store/providers";
import GoogleLogo from "~/public/Google_logo.png"
import "./globals.css";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G - Weather",
  description: "Manually Created by Manjesh",
  keywords:"Sample Weather Application for developers",
  openGraph:{
    type: "website",
    url: "https://google-weather.vercel.app/",
    title: "G - Weather",
    description: "Manually Created by Manjesh",
    siteName: "G - Weather",
    images: [{
      url: GoogleLogo.src,
    }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className+" bg-white dark:bg-primary-700"}>
        <Providers>
          <ThemeWrapper>
              {children}
          </ThemeWrapper>
        </Providers>
      </body>
    </html>
  );
}
