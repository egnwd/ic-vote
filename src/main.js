import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid';
import Header from './Header';
import Voting from './Voting';
import Manifesto from './Manifesto';
import Social from './Social';
import Tech from './Tech';
import Countdown from './Countdown';
import Banner from './Banner';

var layout = [
  {i: 'headerimage', x: 0, y: 0, w: 6, h: 8, isResizable: false},
  {i: 'votingmsg', x: 6, y: 0, w: 4, h: 3, isResizable: false},
  {i: 'banner', x: 6, y: 12, w: 6, h: 3, isResizable: false},
  {i: 'count', x: 6, y: 0, w: 3, h: 3, isResizable: false},
  {i: 'facebook', x: 6, y: 6, w: 1, h: 2, static: true},
  {i: 'github', x: 10, y: 10, w: 1, h: 2, static: true},
  {i: 'vote', x: 6, y: 15, w: 1, h: 2, static: true},
  {i: 'manifesto', x: 0, y: 8, w: 6, h: 13, isResizable: false},
  {i: 'tech', x: 6, y: 8, w: 4, h: 4, isResizable: false},
];

var layout2 = [
  {i: 'headerimage', x: 0, y: 0, w: 3, h: 5, static: true},
  {i: 'votingmsg', x: 0, y: 6, w: 3, h: 3, static: true},
  {i: 'banner', x: 0, y: 29, w: 3, h: 2, static: true},
  {i: 'count', x: 0, y: 9, w: 3, h: 3, static: true},
  {i: 'facebook', x: 0, y: 27, w: 1, h: 2, static: true},
  {i: 'github', x: 1, y: 27, w: 1, h: 2, static: true},
  {i: 'vote', x: 2, y: 27, w: 1, h: 2, static: true},
  {i: 'manifesto', x: 0, y: 12, w: 3, h: 15, static: true},
  {i: 'tech', x: 0, y: 31, w: 3, h: 4, static: true},
];

let items = [
  {i: 'headerimage', className: "", el: <Header/>},
  {i: 'votingmsg', className: "voting text", el: <Voting/>},
  {i: 'banner', className: "", el: <Banner/>},
  {i: 'count', className: "voting text count", el: <Countdown end="03/03/2017 12:00 PM"/>},
  {i: 'facebook', className: "", el: <Social id={'facebook'}/>},
  {i: 'github', className: "", el: <Social id={'github'}/>},
  {i: 'vote', className: "", el: <Social id={'vote'}/>},
  {i: 'manifesto', className: "", el: <Manifesto/>},
  {i: 'tech', className: "", el: <Tech/>},
];

function onItemClick(e) {
  console.log("click");
}

let layouts = {lg: layout, md: layout, sm: layout2, xxs: layout2};

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Grid layouts={layouts} items={items} onItemClick={onItemClick}/>,
    document.getElementById('mount')
  );
});
