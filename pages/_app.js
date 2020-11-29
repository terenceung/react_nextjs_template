import '../styles/globals.css';
import 'antd/dist/antd.css';
import { appWithTranslation } from '../i18n';
import { Provider } from 'react-redux';
import store from '../redux/store';

// const MyApp = ({ Component, pageProps }) => <RecoilRoot><Component {...pageProps} /></RecoilRoot>

// MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

// export default appWithTranslation(MyApp)

function MyApp({Component, pageProps}){
  return(
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  )
};

export default appWithTranslation(MyApp);
