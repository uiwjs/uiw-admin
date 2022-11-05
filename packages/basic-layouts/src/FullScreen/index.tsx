import React, { useState, useMemo, useEffect } from 'react';
import { Icon } from 'uiw';
import { useMain } from '../hooks';

/**
 * 当前是否全屏
 */
function isFullScreen() {
  let el: any = document;
  return (
    el.mozFullScreen ||
    el.webkitIsFullScreen ||
    el.webkitFullScreen ||
    el.msFullScreen
  );
}

/**
 * 判断当前文档是否能切换到全屏
 */
function isFullscreenEnabled() {
  let el: any = document;
  return (
    el.fullscreenEnabled ||
    el.mozFullScreenEnabled ||
    el.webkitFullscreenEnabled ||
    el.msFullscreenEnabled
  );
}

export default () => {
  if (!isFullscreenEnabled()) return null;
  const [fullscreen, setFullscreen] = useState(false);
  if (fullscreen) {
    let element: any = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  } else if (isFullScreen()) {
    let el: any = document;
    if (el.exitFullscreen) {
      el.exitFullscreen();
    } else if (el.webkitCancelFullScreen) {
      el.webkitCancelFullScreen();
    } else if (el.mozCancelFullScreen) {
      el.mozCancelFullScreen();
    } else if (el.msExitFullscreen) {
      el.msExitFullscreen();
    }
  }
  const { headerFontColor } = useMain();
  const handle = () => {
    if (!isFullScreen() && fullscreen) {
      setFullscreen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('resize', handle, false);
    };
  });

  return useMemo(
    () => (
      <span
        onClick={() => setFullscreen(!fullscreen)}
        style={{ fontSize: 18, marginRight: 15, cursor: 'pointer' }}
      >
        <Icon
          type={fullscreen ? 'shrink' : 'arrows-alt'}
          color={headerFontColor}
        />
      </span>
    ),
    [fullscreen],
  );
};
