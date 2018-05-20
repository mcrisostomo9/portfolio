import React from 'react'

class Header extends React.Component {
    render() {
        return (
          <section id="header">
              <div className="inner">
                  <span className="icon major fa-code-fork"></span>
                  <h1>Hi, I'm <strong>Mark Crisostomo</strong>,<br/>
                      a web developer at
                      Devise Interactive.
                  </h1>
                  <ul className="actions">
                      <li><a href="#one" className="button scrolly">About Me</a></li>
                  </ul>
              </div>
          </section>
        )
    }
}

export default Header
