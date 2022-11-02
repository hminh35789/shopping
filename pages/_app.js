import '../styles/globals.css'
import Layout from '../components/Layout'
import { DataProvider } from '../store/GlobalState'
// import useScrollRestoration from "utils/hooks/useScrollRestoration";
function MyApp({ Component, pageProps }) {
  // useScrollRestoration(router);
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
    
  )
  
}

export default MyApp
