/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Document, {Html, Head, Main, NextScript} from "next/document";


class MyDocument extends Document{
    render(){
        return(
            <Html lang="en">
                 <Head>
                    
                    <meta name="description" content="Generated by create next app" />
                    
                    <link rel="icon"  sizes="180x180" href="/logoC.png" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
                    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
                    <script src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`}></script>
                 </Head>
                 <body>
                     <Main>

                     </Main>
                     <NextScript>

                     </NextScript>
                 <footer>
                    <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Powered by{' '}
                    <span>
                        <img style={{background:"red"}} sizes='16x16' src="/logoC.png" alt="Vercel Logo" width={72} height={16} />
                    </span>
                    </a>
                 </footer>
                 </body>
            </Html>
        )
    }
}
export default MyDocument