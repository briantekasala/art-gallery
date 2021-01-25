import React from "react"
import Layout from "../components/Layout"
import {Wrapper , Image , BottomEdgeDown,BottomEdgeUp, Art, } from "./pageStyles/pageStyles"
import {  useStaticQuery , graphql} from "gatsby"
import { COLORS} from "../constants"
import SEO from "../components/Seo"



const ArtGalleryPage = () => {

    const {
        wpcontent:{
            page:{
            artPageMeta:{
            artPageDescription,
            artPageHeaderPicture,
            }
        },

            arts:{
                edges:artMeta
                }
            }
        }
= useStaticQuery(graphql`
    query  {
        wpcontent {
          page(id: "art", idType: URI) {
            artPageMeta {
              artPageDescription
              artPageHeaderPicture {
                altText
                sourceUrl
                imageFile {
                  childImageSharp{
                    fluid(quality:100){
                        ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
          arts {
            edges {
              node {
                artMeta {
                  artName
                  artPainterFirstname
                  artPainterLastname
                  artPaintingDescription
                  artSize
                  artType
                  artImages {
                    altText
                    sourceUrl
                    imageFile {
                      childImageSharp{
                        fluid(quality:100){
                            ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                }
                slug
              }
            }
          }
        }
      }

    `)
 

    return <Layout>
        <SEO title="ART"/>
        <Wrapper artsColor={COLORS.BLACK} description={COLORS.BLACK}>
            <div className="banner">
                <Image fluid={artPageHeaderPicture.imageFile.childImageSharp.fluid} alt={artPageHeaderPicture.altText}/>
                <BottomEdgeDown color={COLORS.GREY}/>

            </div>
            <div className="description">
                <h2>ART GALLERY</h2>
                <p>{artPageDescription}</p>
                <BottomEdgeUp color={COLORS.GREY}/>
            </div>

            <div className="art">
               <h2>OUR ARTS</h2> 
               <div className="art-items">
                 {
                     artMeta.map(({node:{artMeta,slug}})=>(
                         <Art to={`/${slug}`} key={slug}>
                             <Image fluid={artMeta.artImages.imageFile.childImageSharp.fluid} alt={artMeta.artImages.altText}/>
                             <div key={slug} className="art-info">
                                 <p>{artMeta.artName}</p>
                                 <p>{artMeta.artPainterFirstname} {artMeta.artPainterLastname}</p>
                             </div>
                         </Art>
                     ))
                 }
               </div>
            </div>
        </Wrapper>

    </Layout>


}

export default ArtGalleryPage


