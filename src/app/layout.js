import { Lexend } from "next/font/google";
import "./globals.css";

export const metadata = {
    title: "Hounter",
    description:
        "Find your dream home easily with everything you need in one place.",
};

const lexend = Lexend({
    subsets: ["latin"],
    variable: "--font-lexend",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={lexend.className}>{children}</body>
        </html>
    );
}
