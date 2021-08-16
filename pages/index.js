import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <h1>HomePage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, vel saepe quaerat laudantium numquam reprehenderit explicabo! Qui doloremque quasi voluptate?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, vel saepe quaerat laudantium numquam reprehenderit explicabo! Qui doloremque quasi voluptate?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, vel saepe quaerat laudantium numquam reprehenderit explicabo! Qui doloremque quasi voluptate?</p>
      <Link href="/ninjas"><a>See Ninja Listing</a></Link>
      <Footer />
    </div>
  )
}
