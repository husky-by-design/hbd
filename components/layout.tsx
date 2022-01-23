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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col min-h-screen">
        <main className="flex-1">{children}</main>
        <Footer />
      </section>
    </>
  );
}
