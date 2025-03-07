import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/Context";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

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
    <CartProvider>
      <html lang="en">
        <body>
          <Nav />
           <ClerkProvider>    
          {children}
           </ClerkProvider> 
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}
