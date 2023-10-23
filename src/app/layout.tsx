import type { Metadata } from 'next'
import { Trispace } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'
import Header from '@/components/Header'
import RandomNews from '@/components/RandomNews'

const trispace = Trispace({weight: ['400','500','600'],
subsets: ['latin']})

export const metadata: Metadata = {
  title: 'News',
  description: 'news for you where you can find what you need',
  
  
  openGraph: {
    title: 'News-U',
    description: 'news for you where you can find what you need',
    type: 'article',
    authors: 'theoyoth',
  },
  keywords:['news-u','news','news about  everything']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={trispace.className}>
        <main className='px-2 md:px-20'>
          <Header />
          <Navbar />
          <section className="flex justify-between">
            {children}
            <RandomNews />
          </section>
        </main>
      </body>
    </html>
  )
}