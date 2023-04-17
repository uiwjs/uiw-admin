import { Button } from 'uiw';
import './styles/index.css';
import { useNavigate } from 'react-router';
import { ExceptionsProps } from '../index';

const Exception403 = ({
  path = '/home',
  btnText = '返回首页',
}: ExceptionsProps) => {
  const navigate = useNavigate();
  return (
    <div className="exceptions">
      <div className="contentimgs">
        <div className="imgscontent imgs403" />
      </div>
      <div className="contents">
        <h1>403</h1>
        <h2>抱歉，你无权访问该页面</h2>
        <Button
          onClick={() => navigate(path, { replace: true })}
          type="primary"
        >
          返回首页
        </Button>
      </div>
    </div>
  );
};
export default Exception403;
