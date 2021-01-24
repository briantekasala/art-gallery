import React from "react";
import PropTypes from "prop-types"
import {useStaticQuery , graphql, Link} from "gatsby"
import {HeaderWrapper, Image} from "./headerStyles/headerStyles"
import {Menu} from "./Menu"


const Header = ({ siteTitle }) => {
 
const {
  logo,
  wpcontent: {menuItems},
} = useStaticQuery(graphql`
query {
  logo:file(relativePath: {eq: "ART2.png"}) {
    childImageSharp{
      fixed(quality:100,width:200){
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
  wpcontent {
    menuItems {
      edges {
        node {
          label
          path
        }
      }
    }
  }
}
`)

  return <HeaderWrapper>
    <Link to="/">
      <Image alt="logo art-gallery" fixed={logo.childImageSharp.fixed}></Image>
    </Link>
    <Menu menuItems={menuItems.edges}/>
  </HeaderWrapper>
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
