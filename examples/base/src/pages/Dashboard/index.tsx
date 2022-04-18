import { navigate } from '@uiw-admin/router-control'
const Dashboard = () => {
  return (
    <div>
      Dashboard
      <button onClick={() => navigate('/tableList/12')}>点击</button>
    </div>
  )
}
export default Dashboard
