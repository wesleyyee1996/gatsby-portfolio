import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.webp" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
            </div> 
            <div>
              <Title> Hi, I’m Wesley </Title>
              <Text> I love building and creating things! In particular, my interests lie in robotic/mechatronic systems and in my free time I enjoy woodworking.</Text>
              <Text> I'm currently a first year Robotics M.S.E. student at <b className="text-primary lined-link">The University of Pennsylvania</b>. In 2018, I graduated from <b className="text-primary lined-link">Rice University</b> with a B.S. in Mechanical Engineering.  </Text>
              
              
              <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
