import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import {Wrapper , Image , BottomEdgeDown,BottomEdgeUp, Art} from "./pageStyles/pageStyles"
import {Link , useStaticQuery , graphql} from "gatsby"
import { COLORS} from "../constants"

const IndexPage = () => {
  const {wpcontent:{
    page:{
      homePageMeta :{
        homePageDescription,
        homePageArtGallery,
        homePageHeaderDescription,
        homePageHeaderTitle,
        homePageHeaderPicture,
      }
    }
  }} = useStaticQuery(graphql`
  query  {
    wpcontent {
    page(id: "home", idType: URI) {
      homePageMeta {
        homePageArtGallery {
          ... on WPGraphql_Art {
            id
            slug
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
                  childImageSharp {
                    fluid(quality:100, grayscale:true){
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
        homePageDescription
        homePageHeaderDescription
        homePageHeaderTitle
        homePageHeaderPicture {
          altText
          sourceUrl
          imageFile {
            childImageSharp {
              fluid(quality:100){
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
}
 `
 )

  return(
  <Layout>
    <SEO title="Home"/>
    <Wrapper>
      <div className="banner">
        <Image 
        fluid={homePageHeaderPicture.imageFile.childImageSharp.fluid} 
        alt={homePageHeaderPicture.altText}/>

      <div className="inner-div">
        <p className="header-title">{homePageHeaderTitle}</p>
        <p className="header-description">{homePageHeaderDescription}</p>
      </div>
      <BottomEdgeDown color={COLORS.BLACK}/>
      </div>
      <div className="description">
        <p>{homePageDescription}</p>
        <BottomEdgeUp color={COLORS.GREY}/>
      </div>
      <div className="art">
        <h2>Art to see</h2>
        <div className="art-items">
          {homePageArtGallery.map(({artMeta,slug})=>(
            <Art to={`/${slug}`}>
              <Image fluid={artMeta.artImages.imageFile.childImageSharp.fluid} altText={artMeta.artImages.altText}/>
              <div className="art-info">
              <p>{artMeta.artName}</p>
                <p>{artMeta.artPainterFirstname} {artMeta.artPainterLastname}</p>
                
              </div>
            </Art>
          ))}
        </div>
      </div>
    </Wrapper>
  </Layout>
  )
}

export default IndexPage
