import Index from "./index";
import Document, { Head } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>
                <body>
                    <Index />
                </body>
            </html>
        );
    }
}