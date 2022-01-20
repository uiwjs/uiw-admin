import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Loader, Icon } from 'uiw';
import styles from './index.module.css';

export default function Page() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  return (
    <Fragment>
      {loading && (
        <div className={styles.loading}>
          <Loader tip="加载中..." />
        </div>
      )}
      <div className={styles.tools}>
        <Button onClick={() => navigate('/')} type="primary">
          <Icon type="home" />
        </Button>
      </div>
      <iframe
        src="https://stackblitz.com/github/uiwjs/uiw-admin/tree/master/examples/base?embed=1&hideNavigation=0&hidedevtools=0"
        style={{
          width: '100%',
          height: '100vh',
          border: 0,
          overflow: 'hidden',
        }}
        onLoad={(evn) => {
          setLoading(false);
        }}
        onError={(evn) => {
          setLoading(false);
        }}
        title="@example/uiw-admin"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
    </Fragment>
  );
}
