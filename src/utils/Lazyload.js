import React, { Component } from 'react'

export default class Lazyload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mod: null,
      path: null,
    }
  }
  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }
  async load(props) {
    const { path, mod } = this.state;
    const page = await props.load();
    this.setState({
      mod: page.default
    })
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null
  }
}
