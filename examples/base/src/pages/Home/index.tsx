import React from 'react';
import { Button } from 'uiw';
import { useNavigate, Link, } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate()
  const [state, setState] = React.useState("")
  return (
    <div>
      首页
      <input value={state} onChange={(event) => setState(event.target.value)} />
      <Button onClick={() => navigate("/", { replace: true })}>Logout</Button>
      <Button onClick={() => navigate("/courses", { replace: true })}>courses</Button>
      <Link to="/">退出登录</Link>
    </div>
  );
}

export default Home