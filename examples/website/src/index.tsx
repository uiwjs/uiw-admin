import ReactDOM from 'react-dom';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import '@uiw/reset.css';
import { routes } from './router';
import './index.less';

const App = () => useRoutes(routes);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
