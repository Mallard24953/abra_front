import '../globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/Navbar'
import StoreProvider from '@/store/StoreProvider'

export function generateStaticParams() {
  return [{ locale: 'en' }]
}

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ABRA Test App',
  description: 'Generated by Gavrilov Mikhail',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-slate-100 dark:bg-slate-900`}>
            <Navbar />
            <div className='mt-[115px] pb-12'>
              {children}
            </div>
      </body>
    </html>
  )
}
