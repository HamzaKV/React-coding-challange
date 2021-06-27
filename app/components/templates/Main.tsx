import { FC } from 'react';
import Head from 'next/head';
import Header from '../organisms/Header';

export interface IProps {
    pageTitle: string;
    pageDescription: string;
}

const MainTemplate: FC<IProps> = ({ children, pageTitle, pageDescription }) => (
    <>
        <Head>
            <title>{pageTitle}</title>
            <meta name='description' content={pageDescription} />
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        {children}
    </>
);

export default MainTemplate;
