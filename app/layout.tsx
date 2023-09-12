import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'

import { ClerkProvider } from '@clerk/nextjs'
import getStoreSettings from '@/actions/get-store-settings'

const font = Urbanist({ subsets: ['latin'] });

const store = await getStoreSettings();

export const metadata: Metadata = {
  
  title:{
    default: `${store.name}`,
    template: `%s | ${store.name}`
  },
  description: `${store.name}`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
    </ClerkProvider>
  )
}
