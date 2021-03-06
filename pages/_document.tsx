import Document, { Html, Head, Main, NextScript } from "next/document";

import GetLDJson from '../lib/ldjson'

export default class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <script
                        type='application/ld+json'
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(GetLDJson()) }}
                    />
                    <link rel="icon" href="/favicon.ico" />
                    <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "88296b911cff4b509db09634a3661a87"}'></script>
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>

            </Html>
        );
    }
}