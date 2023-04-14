import { Button } from 'uiw';
import { useNavigate } from 'react-router';
import './styles/index.css';
import { ExceptionsProps } from '../index';

const Exception404 = ({
  path = '/home',
  btnText = '返回首页',
}: ExceptionsProps) => {
  const navigate = useNavigate();

  return (
    <div className="exceptions">
      <div className="contentimgs">
        <div className="imgscontent imgs404" />
      </div>
      <div className="contents">
        <h1>404</h1>
        <h2>抱歉，你访问的页面不存在</h2>
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
export default Exception404;
