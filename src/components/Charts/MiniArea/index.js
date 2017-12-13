import React, { PureComponent } from 'react';
import G2 from 'g2';
import PropTypes from 'prop-types';
import equal from '../equal';
import styles from '../index.less';

class MiniArea extends PureComponent {
  componentDidMount() {
    this.renderChart(this.props.data);
  }

  componentWillReceiveProps(nextProps) {
    if (!equal(this.props, nextProps)) {
      this.renderChart(nextProps.data);
    }
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  handleRef(n) {
    this.node = n;
  }

  renderChart(data) {
    const { height = 0, fit = true, color, borderWidth = 2, line, xAxis, yAxis, animate = true } = this.props;
    const borderColor = this.props.borderColor || color;

    if (!data || (data && data.length < 1)) {
      return;
    }

    //clean
    this.node.innerHTML = '';

    const chart = new G2.Chart({
      container: this.node,
      forceFit: fit,
      height: height + 54,
      animate,
      plotCfg: {
        margin: [36, 5, 30, 5],
      },
      legend: null
    });

    if (!xAxis && !yAxis) {
      chart.axis(false);
    }

    if (xAxis) {
      chart.axis('x', xAxis);
    } else {
      chart.axis('x', false)
    }

    if (yAxis) {
      chart.axis('y', yAxis);
    } else {
      chart.axis('y', false)
    }

    const dataConfig = {
      x: {
        type: 'cat',
        range: [0, 1],
        ...xAxis,
      },
      y: {
        min: 0,
        ...yAxis,
      },
    };

    chart.tooltip({
      title: null,
      crosshairs: false,
      map: {
        title: null,
        name: 'x',
        value: 'y',
      },
    });

    const view = chart.createView();
    view.source(data, dataConfig);

    view.area().position('x*y').color(color).shape('smooth')
      .style({ fillOpacity: 1 });

    if (line) {
      const view2 = chart.createView();
      view2.source(data.dataConfig);
      view2.line().position('x*y').color(borderColor).size(borderWidth).shape('smooth');
      view2.tooltip(false);
    }
    chart.render();
    this.chart = chart;
  }

  render() {
    const { height } = this.props;
    return (
      <div className={styles.miniChart} style={{ height }}>
        <div className={styles.chartContent}>
          <div ref={this.handleRef.bind(this)} />
        </div>
      </div>
    )
  }
}

export default MiniArea;

MiniArea.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  borderColor: PropTypes.string,
  line: PropTypes.bool,
  animate: PropTypes.bool,
  xAxis: PropTypes.shape({ title: PropTypes.any, line: PropTypes.any, gridAlign: PropTypes.any, labels: PropTypes.any, tickLine: PropTypes.any, grid: PropTypes.any, }),
  yAxis: PropTypes.shape({ title: PropTypes.any, line: PropTypes.any, gridAlign: PropTypes.any, labels: PropTypes.any, tickLine: PropTypes.any, grid: PropTypes.any, }),
  data: PropTypes.array,
};
MiniArea.defaultProps = {
  borderColor: '#1890FF',
  color: 'rgba(24, 144, 255, 0.2)',
};