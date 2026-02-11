import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Valentine Surprise 💖",
  description: "A special Valentine website",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full w-full m-0 p-0">
        {children}
      </body>
    </html>
  );
}
