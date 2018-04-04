import React from 'react';
import CountDown from '../../../components/CountDown';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';

const time = Date.now() + 26400000;

export default () => (
  <PageHeaderLayout title="倒计时" content="倒计时组件。">
    <CountDown
      onEnd={() => {
        // console.log('onEnd');
      }}
      target={time}
      className="my-countdown"
    />
  </PageHeaderLayout>
);
