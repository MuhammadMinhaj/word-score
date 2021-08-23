import { Box } from '@material-ui/core';
import Head from 'next/head';
import { Component } from 'react';
import App from '../components/App';
import Footer from '../components/Footer';
import Header from '../components/Header';

class Home extends Component {
    render() {
        const Gap = () => <Box py="0.5rem" />;
        return (
            <>
                <Head>
                    <title>Word Score || Application</title>
                    <meta name="description" content="Word scroe and love scroe application" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />

                <main>
                    <App />
                </main>

                <Footer />
            </>
        );
    }
}
export default Home;
