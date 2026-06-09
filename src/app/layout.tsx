import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Silas James | Web Developer & Graphics Designer",
  description: "Portfolio of Silas James - Computer Science student specializing in web development, graphics design with CorelDraw, and creative digital solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
