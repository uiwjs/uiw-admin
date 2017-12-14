import React, { Component } from 'react';
import classNames from 'classNames';
import PropTypes from 'prop-types';
import { Tooltip } from 'uiw';
import styles from './index.less';

const isSupportLineClamp = (document.body.style.webkitLineClamp !== '');


const EllipsisText = ({ text, length, tooltip, ...other }) => {
  if (typeof text !== 'string') {
    throw new Error('Ellipsis 组件内容必须是字符串类型!');
  }
  if (text.length <= length || length < 0) {
    return <span {...other}>{text}</span>;
  }
  const tail = '...';
  let displayText;
  if (length - tail.length <= 0) {
    displayText = '';
  } else {
    displayText = text.slice(0, length - tail.length);
  }

  if (tooltip) {
    return (
      <Tooltip content={text}>
        {displayText}
        {tail}
      </Tooltip>
    );
  }

  return (
    <span {...other}>
      {displayText}
      {tail}
    </span>
  );
};

export default class Ellipsis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      targetCount: 0
    };
  }

  componentDidMount() {
    if (this.node) {
      this.computeLine()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.lines !== nextProps.lines) {
      this.computeLine();
    }
  }

  computeLine() {
    const { lines } = this.props;
    if (lines && !isSupportLineClamp) {
      const text = this.shadowChildren.innerText;
      const lineHeight = parseInt(getComputedStyle(this.root).lineHeight, 10)
      const targetHeight = lines * lineHeight;
      this.content.style.height = `${targetHeight}px`;
      const totalHeight = this.shadowChildren.offsetHeight;
      const shadowNode = this.shadow.firstChild;

      if (totalHeight <= targetHeight) {
        this.setState({
          text,
          targetCount: text.length,
        });
        return;
      }

      // bisection
      const len = text.length;
      const mid = Math.floor(len / 2);

      const count = this.bisection(targetHeight, mid, 0, len, text, shadowNode);

      this.setState({
        text,
        targetCount: count
      })
    }
  }

  /**
   * th: 目标节点高度
   * mid:文本长度中间值
   * begin:文本开始index
   * end:文本长度
   * text:文本内通
   * shadowNode:表层节点
  */

  bisection(th, mid, begin, end, text, shadowNode) {
    const suffix = '...';
    shadowNode.innerHTML = text.substring(0, mid) + suffix;
    let sh = shadowNode.offsetHeight;
    if (sh <= th) {
      shadowNode.innerHTML = text.substring(0, mid + 1) + suffix;
      sh = shadowNode.offsetHeight;
      if (sh > th) {
        return mid;
      } else {
        begin = mid;
        mid = Math.floor((end - begin) / 2) + begin;
        return this.bisection(th, mid, begin, end, text, shadowNode);
      }
    } else {
      if (mid - 1 < 0) {
        return mid;
      }
      shadowNode.innerHTML = text.substring(0, mid - 1) + suffix;
      sh = shadowNode.offsetHeight;
      if (sh <= th) {
        return mid - 1;
      } else {
        end = mid;
        mid = Math.floor((end - begin) / 2) + begin;
        return this.bisection(th, mid, begin, end, text, shadowNode);
      }
    }
  }

  handleRoot(n) {
    this.root = n;
  }

  handleContent(n) {
    this.content = n;
  }

  handleNode(n) {
    this.node = n;
  }

  handleShadow(n) {
    this.shadow = n;
  }

  handleShadowChildren(n) {
    this.shadowChildren = n;
  }


  render() {
    const { text, targetCount } = this.state;
    const {
      children,
      lines,
      length,
      className,
      tooltip,
      ...restProps
    } = this.props;

    const cls = classNames(styles.ellipsis, className, {
      [styles.lines]: lines && !isSupportLineClamp,
      [styles.linesClamp]: lines && isSupportLineClamp
    });

    if (!lines && !length) {
      return (
        <span className={cls} {...restProps}>
          {children}
        </span>
      );
    }

    //length
    if (!lines) {
      return (
        <EllipsisText
          className={cls}
          length={length}
          text={children || ''}
          tooltip={tooltip}
          {...restProps}
        />
      );
    }

    const id = `uiw-pro-ellipsis-${`${new Date().getTime()}${Math.floor(Math.random() * 100)}`}`;

    // support document.body.style.webkitLineClamp
    if (isSupportLineClamp) {
      const style = `#${id}{-webkit-line-clamp:${lines};}`;
      return (
        <div id={id} className={cls} {...restProps}>
          <style>{style}</style>
          {tooltip ? <Tooltip content={text}>{children}</Tooltip> : children}
        </div>
      );
    }

    const childNode = (
      <span ref={this.handleNode.bind(this)}>
        {targetCount > 0 && text.substring(0, targetCount)}
        {targetCount > 0 && targetCount < text.length && '...'}
      </span>
    );

    return (
      <div
        {...restProps}
        ref={this.handleRoot.bind(this)}
        className={cls}
      >
        <div
          ref={this.handleContent.bind(this)}
        >
          {
            tooltip ? (
              <Tooltip content={text}>{childNode}</Tooltip>
            ) : childNode
          }
          <div className={styles.shadow} ref={this.handleShadowChildren.bind(this)}>{children}</div>
          <div className={styles.shadow} ref={this.handleShadow.bind(this)}><span>{text}</span></div>
        </div>
      </div>
    )
  }
}

Ellipsis.propTypes = {
  tooltip: PropTypes.bool,
  length: PropTypes.number,
  lines: PropTypes.number
};
Ellipsis.defaultProps = {
  // tooltip: false,
};
