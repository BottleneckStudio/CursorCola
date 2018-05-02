import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../resources/css/main.css'
import '../resources/css/grid.css'


const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'CursorCola' },
        { name: 'keywords', content: 'cursor, css' },
      ]}
    >
      <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet"/>
    </Helmet>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
