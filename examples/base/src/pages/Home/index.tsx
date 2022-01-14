import React from 'react';
import { Button } from 'uiw';
import { useSelector } from 'react-redux';
import { useNavigate, Link, } from 'react-router-dom';
import { RootState } from '@uiw-admin/models';
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  Outlet
} from "react-router-dom";
import useSWR, { useSWRConfig, } from 'swr'

const Home = () => {
  const { cache } = useSWRConfig()
  const navigate = useNavigate()
  const [state, setState] = React.useState("")
  console.log("cache", cache.get('login'))

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