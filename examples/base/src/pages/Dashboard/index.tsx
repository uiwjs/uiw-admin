import { navigate } from '@uiw-admin/router-control'
import { Form } from '@uiw-admin/components'
import { Input } from 'uiw'
const Dashboard = () => {
  return (
    <div>
      <Form
        fields={{
          name: {
            label: '姓名',
            children: <Input placeholder="请输入姓名" />,
            rules: [
              {
                required: true,
                message: '必填',
              },
              () => {
                return '222'
              },
            ],
          },
        }}
      />
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
