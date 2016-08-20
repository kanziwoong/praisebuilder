'use strict';
/**
 * Created by kanziw on 2016. 8. 20..
 */

import React, {Component, PropTypes} from 'react/';

export default class Index extends Component {
  static propTypes = {author: PropTypes.string};
  static defaultProps = {author: 'kanziw'};

  constructor(props) {
    super(props);
    console.log(props.route.di);
    // this.state = {};
  }

  render() {
    return <h1>Hello Index! by {this.props.author}</h1>
  }
}
