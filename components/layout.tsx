import Head from "next/head";
import Footer from "../components/footer";
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const year = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>Husky By Design</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9333ea"/>
        <meta name="msapplication-TileColor" content="#9333ea"/>
        <meta name="theme-color" content="#9333ea"/>
      </Head>
      <section className="flex flex-col min-h-screen">
        <main className="flex-1">{children}</main>
        <Footer />
      </section>
    </>
  );
}
