import ReactDOM from 'react-dom';
import { useRoutes, HashRouter } from 'react-router-dom';
import '@uiw/reset.css';
import { routes } from './router';
import './index.less';
// import App from './pages/root/App';


const App = () => useRoutes(routes);

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return children;
  // const [state, dispatch] = useReducer(reducer, initialState);
  // return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
