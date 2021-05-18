import Head from 'next/head'
import Layout from "../src/components/layout";


export default function Home() {
  return (
    <Layout>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        This is my content 
    </Layout>
  )
}
