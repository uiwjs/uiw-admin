import React from 'react';
import { Button } from 'uiw';
import { useNavigate } from 'react-router-dom';

const Dashboard = (props: any) => {
  const navigate = useNavigate()
  const [state, setState] = React.useState("")
  return (
    <div>
      Dashboard
      <input value={state} onChange={(event) => setState(event.target.value)} />
      <hr />
      <Button onClick={() => navigate("/", { replace: true })}>Logout</Button>
    </div>
  );
}
export default Dashboard