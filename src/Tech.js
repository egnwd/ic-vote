import React from 'react';

/**
 * Technical elements of the website.
 */
class Tech extends React.Component {
  render() {
    return (
      <div className="tech text">
        <p>
          This website is built using React.js, babel and webpack.
          Everything here was written in vim, you can find (and judge) my vim setup <a href="http://github.com/egnwd/dotfiles">here</a>.
          <strong><span className="laptop"> Finally, just before you go #voteicu, try dragging these boxes around!</span></strong>
        </p>
      </div>
    )
  }
}
export default Tech;
