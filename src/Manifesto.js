import React from 'react';

/**
 * My Manifesto
 */
class Manifesto extends React.Component {
  render() {
    return (
      <div className="manifesto text">
        <p>
          Hi!
          <br/>
          <br/>
          I'm Elliot, throughout my time at Imperial I have been a Computing parent, PMT, and a DoCSoc
          volunteer for several events such as Sponsors Exhibition and ICHack. I've really enjoyed helping
          out with DoCSoc and I'd like to take that further by being your Webmaster next year.
        </p>
        <p>
          I have been developing on the web for about 7 years, starting out making small static websites, then
          dynamic php websites,  moving on to small ruby-on-rails webapps and more recently a more complex, prize-winning
          web app written in Golang.
        </p>
        <p>
          There have been a huge number of improvements to DoCSoc's online presence this year (cheers Paul),
          but there is still room for improvement!
        </p>
        <p>
          Things I want to do as webmaster:
        </p>
        <ul>
          <li> Make it easier for committee members to write articles and blog posts</li>
          <li> Improve <a href="http://hub.ichack.org">hub.ichack.org</a></li>
          <li> Make the <a href="http://docsoc.co.uk">DocSoc website</a> more informative</li>
        </ul>
        <p>
          I hope I get your vote!
          <br/>
          <br/>
          Elliot
        </p>
      </div>
    )
  }
}
export default Manifesto;
