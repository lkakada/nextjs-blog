import Document, { Head, Main, NextScript } from "next/document";

const APP_NAME = "nextjs tag me";
const APP_DESCRIPTION = "This is an example of using next-pwa plugin";

export default class extends Document {
    static async getInitialProps(ctx) {
        return await Document.getInitialProps(ctx);
    }

    render() {
        return (
            <html lang="en" dir="ltr">
                <Head>
                    <meta name="application-name" content="Application Title" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="default"
                    />
                    <meta
                        name="apple-mobile-web-app-title"
                        content="Application Title"
                    />
                    <meta name="description" content={APP_DESCRIPTION} />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="theme-color" content="#FFFFFF" />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
                    />

                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/icons/playstore.png"
                    />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
