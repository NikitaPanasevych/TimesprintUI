'use client';

import '../styles/globals.scss';
import type { Metadata } from 'next';
import Header from '../components/common/header';
import { ReduxProvider } from '@/redux/provider';
import Aside from '../components/common/aside';
import Search from '../components/common/search';
import { Setup } from '@/components/utils';

export const metadata: Metadata = {
    title: 'Timesprint',
    description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ReduxProvider>
                    <Setup />
                    <Search />
                    <Header />
                    <Aside />
                    {children}
                </ReduxProvider>
            </body>
        </html>
    );
}
