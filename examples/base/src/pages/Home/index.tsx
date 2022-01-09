import React from 'react';
import { Button } from 'uiw';
import { useNavigate, Link, } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      首页1
      <Button onClick={() => navigate("/", { replace: true })}>Logout</Button>
      <Button onClick={() => navigate("/courses", { replace: true })}>courses</Button>
      <Link to="/">退出登录</Link>
    </div>
  );
}

export default Home