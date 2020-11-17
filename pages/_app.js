import '../styles/globals.css';
import App from 'next/app';
import { appWithTranslation } from '../i18n';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

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
