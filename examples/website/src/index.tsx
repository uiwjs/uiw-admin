import ReactDOM from 'react-dom';
import {
  useRoutes,
  HashRouter,
  unstable_HistoryRouter,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import '@uiw/reset.css';
import { routes } from './router';
import './index.less';
export const HistoryRouter = unstable_HistoryRouter;
export const history = createBrowserHistory();
const App = () => useRoutes(routes);

ReactDOM.render(
  <HistoryRouter history={history}>
    <App />
  </HistoryRouter>,
  document.getElementById('root'),
);
