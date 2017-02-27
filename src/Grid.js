import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import Header from './Header';
import Voting from './Voting';
import Manifesto from './Manifesto';
import Social from './Social';
import Tech from './Tech';
import Countdown from './Countdown';

/**
 * Grid of campaign elements
 */
class Grid extends React.Component {
  render() {
    var layout = [
      {i: 'headerimage', x: 0, y: 0, w: 6, h: 8, isResizable: false},
      {i: 'votingmsg', x: 6, y: 0, w: 6, h: 3, isResizable: false},
      {i: 'count', x: 6, y: 0, w: 6, h: 3, isResizable: false},
      {i: 'facebook', x: 6, y: 6, w: 1, h: 2, isResizable: false},
      {i: 'github', x: 7, y: 6, w: 1, h: 2, isResizable: false},
      {i: 'vote', x: 8, y: 6, w: 1, h: 2, isResizable: false},
      {i: 'manifesto', x: 0, y: 8, w: 6, h: 12, isResizable: false},
      {i: 'tech', x: 6, y: 8, w: 5, h: 8, isResizable: false},
    ];
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key={'headerimage'}><Header/></div>
        <div key={'votingmsg'}><Voting/></div>
        <div key={'count'}><Countdown end="03/03/2017 12:00 PM"/></div>
        <div key={'facebook'}><Social id={'facebook'}/></div>
        <div key={'github'}><Social id={'github'}/></div>
        <div key={'vote'}><Social id={'vote'}/></div>
        <div key={'manifesto'}><Manifesto/></div>
        <div key={'tech'}><Tech/></div>
      </ReactGridLayout>
    )
  }
}
export default Grid;
