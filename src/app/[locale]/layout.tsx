import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'pt' }
  ];
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
