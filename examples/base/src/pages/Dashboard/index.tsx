import React from 'react';
import { Button } from 'uiw';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <div>
      Dashboard
      <hr />
      <Button onClick={() => navigate("/", { replace: true })}>Logout</Button>
    </div>
  );
}
export default Dashboard