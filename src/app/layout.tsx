import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'seungbeom-resume',
  description: '문제를 해결하며 성장을 즐기는 개발자, 현승범의 이력서입니다.',
  openGraph: {
    images: [
      {
        url: '/og-image.png',
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  );
}
