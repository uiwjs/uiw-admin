import { HashRouter, BrowserRouter, Router, unstable_HistoryRouter } from "react-router-dom";

import { createBrowserHistory } from 'history';
export const HistoryRouter = unstable_HistoryRouter
const history = createBrowserHistory()
export default history
