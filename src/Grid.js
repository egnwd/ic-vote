import React from 'react';
import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

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

  // isDraggable={false} isResizable={false}
  render() {
    return (
      <ResponsiveReactGridLayout className="layout" layouts={this.props.layouts}
        rowHeight={30}
        breakpoints={{lg: 1200, md: 661, sm: 660, xxs: 0}}
        cols={{lg: 12, md: 12, sm: 3, xxs: 3}}>
        {this.props.items.map(this.create.bind(this))}
      </ResponsiveReactGridLayout>
    )
  }
}
export default Grid;
