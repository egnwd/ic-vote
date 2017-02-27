import React from 'react';

/**
 * Social Icons
 */
class Social extends React.Component {
  constructor(props) {
    super(props);

    let prefix = 'images/';
    let facebook = {
      'link': 'http://facebook.com/groups/egnwdweb',
      'path': prefix + 'facebook.svg'
    };
    let github = {
      'link': 'http://github.com/egnwd',
      'path': prefix + 'github.svg'
    };
    let vote = {
      'link': 'http://imperialcollegeunion.org/elections',
      'path': prefix + 'vote.svg'
    };
    var social = new Map();
    social.set('facebook', facebook);
    social.set('github', github);
    social.set('vote', vote);

    this.social = social;
  }

  render() {
    let key = this.props.id;
    let social = this.social.get(key);
    let link = social['link'];
    let path = social['path'];
    return (
      <a href={link}>
        <div className="social">
          <img src={path} alt={key}/>
          <div className="cover"></div>
        </div>
      </a>
    )
  }
}
export default Social;
