import { Button } from 'uiw';
import './styles/index.css';
import { useNavigate } from 'react-router';
import { ExceptionsProps } from '../index';

const Exception500 = ({
  path = '/home',
  btnText = '返回首页',
}: ExceptionsProps) => {
  const navigate = useNavigate();
  return (
    <div className="exceptions">
      <div className="contentimgs">
        <div className="imgscontent imgs500" />
      </div>
      <div className="contents">
        <h1>500</h1>
        <h2>抱歉，服务器出错了</h2>
        <Button
          onClick={() => navigate(path, { replace: true })}
          type="primary"
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
};
export default Exception500;
