import React from 'react';
import ReactGridLayout from 'react-grid-layout';

/**
 * Grid of campaign elements
 */
class Grid extends React.Component {
  constructor(props) {
      super(props);
      this.isDragging = false;
  }

  create(item) {
    return (
      <div key={item.i} className={item.className}>
        {item.el}
      </div>
    );
  }

  render() {
    return (
      <ReactGridLayout className="layout" layout={this.props.layout}
        cols={12} rowHeight={30} width={1200}>
        {this.props.items.map(this.create.bind(this))}
      </ReactGridLayout>
    )
  }
}
export default Grid;
