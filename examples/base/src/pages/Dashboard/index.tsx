import React from 'react';
import { Button } from 'uiw';
import { useNavigate } from 'react-router-dom';
import useSWR, { useSWRConfig } from 'swr';

const Dashboard = (props: any) => {
  const navigate = useNavigate();
  const [state, setState] = React.useState('');
  const { cache } = useSWRConfig();

  console.log('cache', cache.get('login'));

  return (
    <div>
      Dashboard
      <input value={state} onChange={(event) => setState(event.target.value)} />
      <hr />
      <Button onClick={() => navigate('/', { replace: true })}>Logout</Button>
    </div>
  );
};
export default Dashboard;
