'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/Layout/Header";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <link rel="icon" href="/favicon.ico" />
            <title>Splay Tree</title>
        </head>
        <body>
            <Header/>
            <main className="mx-16 my-10">
                {children}
            </main>
        </body>
    </html>
  )
}
