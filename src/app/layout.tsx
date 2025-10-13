import Footer from "@/app/Footer";
import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Script from "next/script";
import Header from "@/app/Header";

export const metadata: Metadata = {
    title: "Leone Pay",
};
export default async function RootLayout({
                                             children,
                                         }: {
                                             children: React.ReactNode;
                                         }
) {

    return (
        <html lang="it">
        <head>
            <title>Leonepay</title>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet" />

            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
                integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
            <link
                rel="stylesheet"
                href="https://use.typekit.net/qxk4lzc.css"
            />
        </head>
        <body>
        <AuthProvider>
            {/* Passa i params risolti al componente server Header */}
            <Header/>
            {/* <Chatbot /> */}
            <main>{children}</main>
            <Footer />
        </AuthProvider>
        <Script
            src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"
            strategy="afterInteractive"
        />
        </body>
        </html>
    );
}