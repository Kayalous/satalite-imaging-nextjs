"use client";

// import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import "./globals.css";
import { SessionProvider, signOut } from "next-auth/react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Test",
};
import { signIn } from "next-auth/react";

export default function RootLayout({
  children,
  params: { session, ...params },
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="absolute top-0 left-0 right-0 p-3 bg-white shadow-sm">
          <div className="relative flex justify-end w-full">
            <button
              onClick={() => signOut()}
              className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign out
            </button>
          </div>
        </div>

        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
