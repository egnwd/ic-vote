import React from 'react';
import ReactGridLayout from 'react-grid-layout';

/**
 * Grid of campaign elements
 */
class Grid extends React.Component {
  render() {
    var layout = [
      {i: 'headerimage', x: 0, y: 0, w: 6, h: 8, isResizable: false},
      {i: 'b', x: 6, y: 0, w: 6, h: 3, isResizable: false},
      {i: 'c', x: 6, y: 0, w: 6, h: 3, isResizable: false},
      {i: 'e', x: 6, y: 6, w: 1, h: 2, isResizable: false},
      {i: 'f', x: 7, y: 6, w: 1, h: 2, isResizable: false},
      {i: 'g', x: 8, y: 6, w: 1, h: 2, isResizable: false},
      {i: 'd', x: 0, y: 8, w: 6, h: 12, isResizable: false},
      {i: 'h', x: 6, y: 8, w: 5, h: 8, isResizable: false},
    ];
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key={'headerimage'}>a</div>
        <div key={'b'}>b</div>
        <div key={'c'}>c</div>
        <div key={'d'}>d</div>
        <div key={'e'}>e</div>
        <div key={'f'}>f</div>
        <div key={'g'}>g</div>
        <div key={'h'}>h</div>
      </ReactGridLayout>
    )
  }
}
export default Grid;
