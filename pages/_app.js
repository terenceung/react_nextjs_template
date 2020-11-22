import '../styles/globals.css';
import 'antd/dist/antd.css';
import { appWithTranslation } from '../i18n';
import { RecoilRoot } from 'recoil';

// const MyApp = ({ Component, pageProps }) => <RecoilRoot><Component {...pageProps} /></RecoilRoot>

// MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

// export default appWithTranslation(MyApp)

function MyApp({Component, pageProps}){
  return(
    <RecoilRoot>
        <Component {...pageProps} />
    </RecoilRoot>
  )
};

export default appWithTranslation(MyApp);
