import React from "react"
import Layout from "../components/Layout"
import {Wrapper , Image , BottomEdgeDown,BottomEdgeUp, } from "./pageStyles/pageStyles"
import {Link , useStaticQuery , graphql} from "gatsby"
import { COLORS} from "../constants"


/*const ArtGallery = () => {

    const {
        wpcontent:{
            arts:{
                edge:{
                    node:{
                        artMeta:{
                            artImages,
                            artName,
                  artPainterFirstname,
                  artPainterLastname,
                  artPaintingDescription,
                  artSize,
                  artType
                        }
                    }
                }
            }
        }
    } = useStaticQuery(graphql`
    query MyQueryAllarts {

        wpcontent {
          arts {
            edges {
              node {
                artMeta {
                  artImages {
                    altText
                    imageFile {
                      childImageSharp {
                        fluid(quality:100){
                            ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                  artName
                  artPainterFirstname
                  artPainterLastname
                  artPaintingDescription
                  artSize
                  artType
                }
              }
            }
          }
        }
      }

    `)


    return <Layout>

    </Layout>
}

export default ArtGallery

*/
