"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import { useState } from "react";
import ThemeContext from "@/Contexts/Theme";
import Navbar from "@/Components/Stateless/Navbar";
import Footer from "@/Components/Stateless/Footer";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase_app from "@/Firebase/connection";
import { AuthProvider } from "@/Contexts/UserContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState("light");
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      console.log("Na");
    }
  });
  return (
    <html lang="en" className={`${theme}`}>
      <head>
        <title>Project Partner</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Project Partner" />
        <meta name="description" content="Simply create any project!" />
        <meta name="keywords" content="project, partner, create" />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="general" />
        <meta name="revised" content="2023-07-30" />
        <meta name="language" content="en" />
        <meta name="resource-type" content="document" />
        <meta name="document-title" content="Project Partner" />
        <meta name="application-name" content="Project Partner" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <AuthProvider>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <body
            className={`${inter.className} bg-cover bg-center bg-repeat ${
              theme === "dark" ? "bg-main-bg-dark text-gray-100" : "bg-main-bg"
            }`}
          >
            <Navbar />
            <main className="min-h-[60vh]">{children}</main>
            <Footer />
          </body>
        </ThemeContext.Provider>
      </AuthProvider>
    </html>
  );
}
