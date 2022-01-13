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
import useSWR, { useSWRConfig, } from 'swr'

const Home = () => {
  const { provider } = useSWRConfig() as any
  const prt = provider()
  const navigate = useNavigate()
  let location = useLocation();
  const [state, setState] = React.useState("")
  const store = useSelector((state: RootState) => state.home)
  const storeDoc = useSelector((state: RootState) => state.doc)
  console.log("store", store)
  console.log("storeDoc", storeDoc)
  // console.log((window as any).routerBase)
  // console.log("prt", prt)

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