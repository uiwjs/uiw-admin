import React, { Component } from 'react';
import classNames from 'classnames';
import { Avatar, Tooltip } from 'uiw';
import PropTypes from 'prop-types';
import styles from './index.less';

const fillZero = (num) => num < 10 ? `0${num}` : num;

const hours = 60 * 60 * 1000;
const minutes = 60 * 1000;

export default class CountDown extends Component {
  constructor(props) {
    super(props);
    const current = Date.now();
    const target = this.getValidDate(props.target);
    let timeleft = target - current;
    this.state = {
      current,
      target,
      timeleft
    };
    this.interval = props.interval;
  }

  getValidDate(param) {
    try {
      if (Object.prototype.toString.call(param) === '[object Date]') {
        return param.getTime();
      } else {
        let time = new Date(param).getTime()
        return time;
      }
    } catch (e) {
      throw new Error('invalid target prop', e);
    }
  }

  componentDidMount() {
    this.tick();
  }

  componentWillReceiveProps(nextProps) {
    if (this.getValidDate(this.props.target) !== this.getValidDate(nextProps.target)) {
      this.clear();
      this.tick();
    }
  }

  componentWillUnmount() {
    this.clear();
  }

  tick() {
    this.timer = setInterval(() => { this.count() }, this.interval);
  }

  clear() {
    this.timer && clearInterval(this.timer);
  }

  count() {
    const { onEnd } = this.props;
    const { timeleft } = this.state;
    if (timeleft > this.interval) {
      this.setState({ timeleft: timeleft - this.interval })
    } else {
      this.setState({ timeleft: 0 }, this.clear)
      onEnd && onEnd();
    }
  }

  format(timeleft) {
    const h = fillZero(Math.floor(timeleft / hours));
    const m = fillZero(Math.floor((timeleft - (h * hours)) / minutes));
    const s = fillZero(Math.floor((timeleft - (h * hours) - (m * minutes)) / 1000));
    return `${h}:${m}:${s}`;
  }

  render() {
    const { format, className } = this.props;
    const { timeleft } = this.state;
    const cls = classNames(styles.countdown, {
      [className]: className
    })
    // 负数处理
    let _timeleft = timeleft > 0 ? timeleft : 0;

    return (<span className={cls}>{format ? format(_timeleft) : this.format(_timeleft)}</span>)
  }
}

CountDown.propTypes = {
  target: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number, PropTypes.string]),
  interval: PropTypes.number
}

CountDown.defaultProps = {
  interval: 1000
}

