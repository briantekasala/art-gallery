import React from "react";
import {graphql} from "gatsby"
import {Wrapper , Image} from "./artistStyles"
import Layout from "../../components/Layout";
import SEO from "../../components/Seo"



const ArtsTemplate = ({ 
  data:{
  wpcontent:{
    art:{
      artMeta,
        roles:{
          edges:
            roles
          
        },
    }
    
  }
}})=>{


return <Layout>
  <SEO title="Art"/>
  <Wrapper>
    <div className="art-container">
      <div className="art-image">
      <Image fluid={artMeta.artImages.imageFile.childImageSharp.fluid} alt={artMeta.artImages.altText}/>
      <div className="roles">
        {roles.map(({node:role})=>(
          <div  key={role.name}className="role">
            <div className="role">{role.name}</div>
            </div>
        ))}
      </div>
        
      </div>
      <div className="art-info">
        <h2>{artMeta.artName}</h2>
        <h3><span>{artMeta.artPainterFirstname} {artMeta.artPainterLastname}</span></h3>
        <p className="description">{artMeta.artPaintingDescription}</p>
        <p className="info"><strong>Size:</strong>{artMeta.artSize}</p>  
        <p className="info"><strong>Art type:</strong>{artMeta.artType}</p>
      </div>
   
    </div>
  </Wrapper>
</Layout>
}

export default ArtsTemplate


export const pageQuery = graphql`
query ($slug:ID!) {

    wpcontent{
        art(id: $slug, idType: SLUG) {
            roles {
              edges {
                node {
                  name
                }
              }
            }
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
          }
        }
    }
    
  `