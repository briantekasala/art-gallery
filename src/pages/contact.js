import React from "react"
import {RiMailSendFill,RiPhoneFill,RiUserLocationLine} from "react-icons/ri"
import Layout from "../components/layout"
import {Wrapper , Image , BottomEdgeDown,BottomEdgeUp, } from "./pageStyles/pageStyles"
import {Link , useStaticQuery , graphql} from "gatsby"
import { COLORS} from "../constants"
import SEO from "../components/seo"


const ContactPage = ()=> {
    const {
        wpcontent:{
            page:{
            contactPageMeta:{
            contactPageAdress,
            contactPageCity,
            contactPageEmail,
            contactPageDescription,
            contactPageHeaderPicture,
            contactPagePhone,
            contactPagePostcode

                }
            }
        }
    } = useStaticQuery(graphql`
    query  {
        wpcontent {
          page(idType: URI, id: "contact") {
            contactPageMeta {
              contactPageAdress
              contactPageCity
              contactPageEmail
              contactPageDescription
              contactPageHeaderPicture {
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
              contactPageLatitude
              contactPageLongitude
              contactPagePhone
              contactPagePostcode
            }
          }
        }
      }
    
    
    
    `)

    return <Layout>
        <SEO title="contact"/>
        <Wrapper descriptionColor={COLORS.BLACK}>
            <div className="banner">
            <Image fluid={contactPageHeaderPicture.imageFile.childImageSharp.fluid} alt={contactPageHeaderPicture.altText}/>
            </div>
            <BottomEdgeDown color={COLORS.GREY}/>
            <div className="description">
                <h2>Contact us</h2>
                <p>{contactPageDescription}</p>
                <BottomEdgeUp color={COLORS.GREY}/>
            </div>

            <div className="contact-info">

                
                <div>
                <RiMailSendFill style={{height:'4rem', width:'4rem'}}/>
                <p>Send us an email at {""} <a target="__blank" href={`mailto:${contactPageEmail}`}>{contactPageEmail}</a></p>
                </div>

                <div>
                <RiPhoneFill style={{height:'4rem', width:'4rem'}}/>
                <p> Call us: {""} {contactPagePhone} </p>
                </div>


               

                <div>
                <RiUserLocationLine style={{height:'4rem', width:'4rem'}}/>
                <p> {contactPageAdress} , {""}{contactPagePostcode} {contactPageCity} </p>
                </div>
            </div>
        </Wrapper>
    </Layout>

}

export default ContactPage