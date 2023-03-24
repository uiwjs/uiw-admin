import { Button } from 'uiw';
import { useNavigate } from 'react-router';
import './styles/index.css';
const Exception404 = () => {
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
          onClick={() => navigate('/home', { replace: true })}
          type="primary"
        >
          返回首页
        </Button>
      </div>
    </div>
  );
};
export default Exception404;
