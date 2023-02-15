import ReactDOM from 'react-dom';
import { useRoutes, HashRouter } from 'react-router-dom';
import '@uiw/reset.css';
import { routes } from './router';
import './index.less';

const App = () => useRoutes(routes);

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root'),
);
