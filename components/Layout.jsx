import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { children } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Box maxWidth='100%' m='auto' backgroundColor='#FAF5FF'>
            <header>
                <Navbar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </Box>
    </>
)

export default Layout;