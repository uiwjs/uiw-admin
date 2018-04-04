import React, { PureComponent } from 'react';
import G2 from 'g2';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import PropTypes from 'prop-types';
import equal from '../equal';
import styles from '../index.less';


export default class Bar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoHideXLables: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.renderChart(this.props.data);
  }

  componentWillReceiveProps(nextProps) {
    if (!equal(this.props, nextProps)) {
      this.renderChart(nextProps.data);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
    if (this.chart) {
      this.chart.destroy();
    }
    this.resize.cancel();
  }
  /**
   * Bind() 绑定当前方法，类等等
   * Denounce(200) 延迟2毫秒执行下面方法
  */
  @Bind()
  @Debounce(200)
  resize() {
    if (!this.node) {
      return;
    }
    const canvasWidth = this.node.parentNode.clientWidth;
    const { data = [], autoLabel = true } = this.props;
    if (!autoLabel) {
      return;
    }
    const minWidth = data.length * 30;
    const { autoHideXLabels } = this.state;

    if (canvasWidth <= minWidth) {
      if (!autoHideXLabels) {
        this.setState({
          autoHideXLabels: true,
        });
        this.renderChart(data);
      }
    } else if (autoHideXLabels) {
      this.setState({
        autoHideXLabels: false,
      });
      this.renderChart(data);
    }
  }

  handleRef(n) {
    this.node = n;
  }

  renderChart(data) {
    const { autoHideXLables } = this.state;
    const {
      height = 0,
      fit = true,
      color = 'rgba(24, 144, 255, 0.85)',
      margin = [32, 0, (autoHideXLables ? 8 : 32), 40],
    } = this.props;

    if (!data || (data && data.length < 1)) {
      return;
    }

    // clean
    this.node.innerHTML = '';

    const { Frame } = G2;
    const frame = new Frame(data);

    const chart = new G2.Chart({
      container: this.node,
      forceFit: fit,
      height: height - 22,
      legend: null,
      plotCfg: { margin },
    });

    if (autoHideXLables) {
      chart.axis('x', {
        title: false,
        tickLine: false,
        labels: false,
      });
    } else {
      chart.axis('x', { title: false });
    }
    chart.axis('y', {
      title: false,
      line: false,
      tickLine: false,
    });

    chart.source(frame, {
      x: { type: 'cat' },
      y: { min: 0 },
    });

    chart.tooltip({
      title: null,
      crosshairs: false,
      map: { name: 'x' },
    });
    chart.interval().position('x*y').color(color).style({
      fillOpacity: 1,
    });

    chart.render();
    this.chart = chart;
  }

  render() {
    const { height, title } = this.props;

    return (
      <div className={styles.chart} style={{ height }}>
        <div>
          {title && <h4>{title}</h4>}
          <div ref={this.handleRef.bind(this)} />
        </div>
      </div>
    );
  }
}

Bar.propTypes = {
  color: PropTypes.bool,
  margin: PropTypes.array,
  height: PropTypes.number,
  data: PropTypes.array,
  autoLabel: PropTypes.bool,
};
Bar.defaultProps = {
  // tooltip: false,
};
