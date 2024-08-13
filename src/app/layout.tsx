// Import React and Next.js types.
import type { Metadata } from "next"; // Import React and Next.js types.
import { Open_Sans } from "next/font/google"; // Import google font types from Next.js.

// containers
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";


// Style imports
import "@/styles/globals.scss"; // Import the global styles for the app.

// Open_Sans is a Next.js type that defines the Open Sans font from Google Fonts.
const openSans = Open_Sans({ subsets: ["latin"] });

// Metadata is a Next.js type that defines the metadata for a page. Used instead of the <head> tag in index.html.
export const metadata: Metadata = {
    title: "HiFi Corner",
    description: "Your one-stop shop for all things audio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={openSans.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
