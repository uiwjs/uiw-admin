import React from 'react';
import { Button } from 'uiw';
import './styles/index.css';
import { useNavigate } from 'react-router';

const Exception500 = () => {
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
          onClick={() => navigate('/home', { replace: true })}
          type="primary"
        >
          返回首页
        </Button>
      </div>
    </div>
  );
};
export default Exception500;
