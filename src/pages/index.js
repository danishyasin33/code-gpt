import Head from 'next/head';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import KeyFeatures from '../components/keyFeatures';
import Pricing from '../components/pricing';
import Footer from '../components/footer';

export default function Home () {
  return (
    <div className='flex justify-center px-6 py-4'>
      <div className='w-full max-w-[1024px]'>
        <Head>
          <title>Code GPT</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className='w-100 flex-col'>
          <Navbar />
          <Hero />
          <KeyFeatures />
          <Pricing />
          <Footer />
        </main>
      </div>
    </div>
  );
}
