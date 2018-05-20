import React from 'react'

class Footer extends React.Component {
    render() {
        return (
          <section id="footer">
              <ul className="icons">
                  <li><a href="#" className="icon alt fa-linkedin-square"><span className="label">Linkedin</span></a></li>
                  <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                  <li><a href="#" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
              </ul>
              <ul className="copyright">
                  <li>&copy; Mark Crisostomo 2018</li>
              </ul>
          </section>
        )
    }
}

export default Footer
