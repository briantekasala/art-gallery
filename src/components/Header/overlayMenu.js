import React from "react"
import {Link , useStaticQuery , graphql} from "gatsby"
import { CloseButton, Image, MenuList, OverlayWrapper } from "./headerStyles/headerStyles"

const OverlayMenu=({handleOverlaymenu,menuOpen})=>{
    const {
        logo,
        wpcontent: {menuItems},
      } = useStaticQuery(graphql`
      query {
        logo:file(relativePath: {eq: "ART1_1.png"}) {
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
    return(
        //meerder elementen willen returnen
      <>
            {menuOpen &&(
                
                <OverlayWrapper>
                    <CloseButton onClick={handleOverlaymenu}>X</CloseButton>
                    <Link to="/" style={{marginBottom:"1.5rem"}}>
                    <Image alt="logo art gallery" fixed={logo.childImageSharp.fixed}/>
                    </Link>
                    <MenuList style={{flexDirection:"column"}}>
                        {menuItems.edges.map(({node:item},i)=>(
                            <li key={i}>
                                <Link activeClassName="nav-active" to={item.path}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}

                    </MenuList>
                </OverlayWrapper>
            )}
      </>

    )
}


export default OverlayMenu