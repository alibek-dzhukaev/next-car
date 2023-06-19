import React from 'react';
import {NextPage} from "next";
import {Layout} from "@/components/layout/Layout";
import Image from 'next/image'
import Head from "next/head";

const ErrorPage: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Not Found</title>
            </Head>

            <div style={{
                textAlign: 'center'
            }}>
                <Image
                    src='/404.webp'
                    alt='404'
                    width={800}
                    height={534}
                />
            </div>
        </Layout>
    );
};

export default ErrorPage;