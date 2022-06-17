import { useRoutes, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Suspense, useEffect, useState } from 'react';
import { getAllRoutes } from './route/routes';
import { store } from './store/store';
import SiderBar from './components/SiderBar';
import Footer from './components/Footer';
import './index.css';
import { useAppSelector } from './store/hooks/hook';

export default function App() {
  const routes = useRoutes(getAllRoutes());
  const theme = useAppSelector((state) => state.theme.value);
  const [appClassName, setAppClassName] = useState('App');

  useEffect(() => {
    setAppClassName(`App ${theme}`);
    if (theme === 'dark') {
      document.body.style.backgroundColor = 'rgb(40, 44, 52)';
    } else if (theme === 'light') {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = '#ebdbb2';
    }
  }, [theme]);

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
  document.getElementById('root') as HTMLElement,
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
