import React from 'react';
import { Button } from 'uiw';
import { useSelector } from 'react-redux';
import { useNavigate, Link, } from 'react-router-dom';
import { RootState } from '../../models';
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  Outlet
} from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  let location = useLocation();
  const [state, setState] = React.useState("")
  const store = useSelector((state: RootState) => state.home)
  console.log("store", store)
  console.log((window as any).routerBase)

  return (
    <div>
      首页
      <input value={state} onChange={(event) => setState(event.target.value)} />
      <Button onClick={() => navigate("/", { replace: true })}>Logout</Button>
      <Button onClick={() => navigate("/courses222222", { replace: true })}>courses</Button>
      <Link to="/">退出登录</Link>
    </div>
  );
}

export default Home