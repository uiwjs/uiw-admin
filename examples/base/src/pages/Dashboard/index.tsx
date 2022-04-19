import { navigate } from '@uiw-admin/router-control'
const Dashboard = () => {
  return (
    <div>
      Dashboard
      <button onClick={() => navigate('/tableList/12')}>点击</button>
      <button onClick={() => navigate('/dom/12')}>点击2</button>
      <button onClick={() => navigate('/dom/2')}>点击3</button>
      <button onClick={() => navigate('/dom/2?a=2')}>点击4</button>
      <button onClick={() => navigate('/dom/2?a=45')}>点击5</button>
    </div>
  )
}
export default Dashboard
