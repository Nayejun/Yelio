import type {NextPage} from 'next'
import Head from 'next/head'
import First from "../components/first";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Yelio</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <First/>
        </>
    );
}

export default Home
