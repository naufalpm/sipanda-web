import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SIPANDA - Sistem Informasi Penyajian Indikator Daerah | BPS Kabupaten Teluk Bintuni',
  description: 'SIPANDA (Sistem Informasi Penyajian Indikator Daerah) adalah portal resmi penyajian indikator strategis oleh BPS Kabupaten Teluk Bintuni guna mendukung perencanaan, evaluasi, dan perumusan kebijakan daerah berbasis data yang akurat.',
  keywords: [
    'SIPANDA',
    'BPS Teluk Bintuni',
    'Indikator Strategis Bintuni',
    'IPM Teluk Bintuni',
    'Statistik Papua Barat',
    'Kemiskinan Bintuni',
    'PDRB Teluk Bintuni'
  ],
  authors: [{ name: 'BPS Kabupaten Teluk Bintuni' }],
  openGraph: {
    title: 'SIPANDA - BPS Kabupaten Teluk Bintuni',
    description: 'Portal resmi penyajian indikator strategis oleh BPS Kabupaten Teluk Bintuni guna mendukung perencanaan, evaluasi, dan perumusan kebijakan daerah berbasis data yang akurat.',
    siteName: 'SIPANDA Teluk Bintuni',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var savedTheme = localStorage.getItem('sipanda-theme');
                if (savedTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500 selection:text-white transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
