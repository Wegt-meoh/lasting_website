import { useRoutes } from 'react-router-dom';
import { getAllRoutes } from './route/routes';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Suspense, useEffect, useState } from 'react';
import SiderBar from './components/SiderBar';
import Footer from './components/Footer';
import './index.css'
import { useAppSelector } from './hooks/hook';

export default function App() {
  const routes = useRoutes(getAllRoutes())
  const theme = useAppSelector(state => state.theme.value)
  const [appClassName,setAppClassName]=useState('App')

  useEffect(()=>{
    setAppClassName(`App ${theme}`)
  },[theme])

  return (
    <div className={appClassName}>
      <SiderBar />
      <main>
        <Suspense fallback={<h1>loading...</h1>}>
          {routes}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>
);

