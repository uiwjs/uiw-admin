import React from "react";
import ReactDOM from "react-dom";
import "uiw-iconfont/fonts/w-iconfont.css";
import styles from "./index.less";
import Route from './Route.js';

ReactDOM.render(<Route />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
