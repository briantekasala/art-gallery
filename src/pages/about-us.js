import React from "react"
import Layout from "../components/layout"
import {Wrapper , Image , BottomEdgeDown,BottomEdgeUp, } from "./pageStyles/pageStyles"
import {Link , useStaticQuery , graphql} from "gatsby"
import { COLORS} from "../constants"
import SEO from "../components/seo"

 


const AboutUsPage = () => {
     const {wpcontent:{
         page:{
             aboutUsPageMeta:{
                aboutUsPageHeaderPicture,
                aboutUsPageDescription,
             }
         }
     }} = useStaticQuery(graphql`
     query  {
        wpcontent {
          page(id: "about-us", idType: URI) {
            aboutUsPageMeta {
            aboutUsPageDescription
              aboutUsPageHeaderPicture {
                altText
                sourceUrl
                imageFile{
                    childImageSharp{
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
`)

return <Layout>
     <SEO title="about-us"/>
    <Wrapper descriptionColor={COLORS.BLACK}>
        <div className="banner">
            <Image fluid={aboutUsPageHeaderPicture.imageFile.childImageSharp.fluid} alt={aboutUsPageHeaderPicture.altText}/>
            <BottomEdgeDown color={COLORS.GREY}/>
        </div>
        <div className="description">
            <h2>About US</h2>

            <p>{aboutUsPageDescription}</p>
            <BottomEdgeUp color={COLORS.GREY}/>
        </div>

    </Wrapper>
</Layout>

       
       
    
}

export default AboutUsPage