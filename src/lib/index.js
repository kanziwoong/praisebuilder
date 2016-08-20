'use strict';
/**
 * Created by kanziw on 2016. 8. 20..
 */

import React from 'react';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <h1>Hello Index! by {this.props.author}</h1>
  }
}
Index.propTypes = {author: React.PropTypes.string};
Index.defaultProps = {author: 'kanziw'};
