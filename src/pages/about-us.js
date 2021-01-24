import React from "react"
import Layout from "../components/Layout"
import {Wrapper , Image , BottomEdgeDown,BottomEdgeUp, Art} from "./pageStyles/pageStyles"
import {Link , useStaticQuery , graphql} from "gatsby"
import { COLORS} from "../constants"

 


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
    <Wrapper descriptionColor={COLORS.PRIMARY}>
        <div className="banner">
            <Image fluid={aboutUsPageHeaderPicture.imageFile.childImageSharp.fluid} alt={aboutUsPageHeaderPicture.altText}/>
            <BottomEdgeDown color={COLORS.PRIMARY}/>
        </div>
        <div className="description">
            <h2>About US</h2>

            <p>{aboutUsPageDescription}</p>
            <BottomEdgeUp color={COLORS.BLACK}/>
        </div>

    </Wrapper>
</Layout>

       
       
    
}

export default AboutUsPage