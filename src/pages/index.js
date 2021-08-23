import Head from 'next/head';
import { Component } from 'react';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Header from '../components/Header';

class Home extends Component {
    render() {
        return (
            <>
                <Head>
                    <title>Word Score || Application</title>
                    <meta name="description" content="Word scroe and love scroe application" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />

                <Body />

                <Footer />
            </>
        );
    }
}
export default Home;
