import type { Metadata } from 'next'
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import Head from 'next/head';
import './globals.css'

export const metadata: Metadata = {
    title: '宇宙語翻訳機',
    description: '日本語の文章を「星屑テレパス」に登場する宇宙語に翻訳することができます。',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="jp">
            <Head>
                <ColorSchemeScript />
            </Head>
            <body>
                <MantineProvider defaultColorScheme="auto" theme={{ fontFamily: "UF Steleto" }}>{children}</MantineProvider>
            </body>
        </html>
    )
}
