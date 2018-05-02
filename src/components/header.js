import React from 'react'
import Link from 'gatsby-link'

import logo from '../resources/svg/cursorcola.svg'

const Header = () => (
    <div className="container">
      <div className="row">
          <div className="col-sm">
              <div className="title">
                  <img src={logo} alt=""/>
                  <h1>for all your cursor needs </h1>
                  <h4>or download our 1kb css file <a href="https://github.com/BottleneckStudio/CursorCola">here</a></h4>
              </div>
          </div>
      </div>
    </div>
)

export default Header
