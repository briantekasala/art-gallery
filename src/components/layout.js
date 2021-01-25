/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/Header"
import "./layout.css"
import { HamburgerButton } from "./Header/headerStyles/headerStyles"
import Hamburger from "./Header/headerStyles/hamburger"
import OverlayMenu from "./Header/overlayMenu"

const Layout = ({ children }) => {
  const [menuOpen, setmenuOpen]= useState(false);


  const handleOverlayMenu = () => setmenuOpen(!menuOpen)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
     <Hamburger handleOverlayMenu={handleOverlayMenu}/>
     <OverlayMenu handleOverlaymenu={handleOverlayMenu} menuOpen={menuOpen}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: "auto",
          padding: 0,
          paddingBottom:"2rem"
        }}
      >
        <main>{children}</main>
        {/**<footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
