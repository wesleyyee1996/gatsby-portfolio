import React from "react"
import { Link, useStaticQuery, graphql , Caption} from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "portfolio-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 10) {
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
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo">
                <img src='https://s3.us-east-2.amazonaws.com/wesleyyee.com/Media/profile.webp' style={{maxWidth: "100%", borderRadius: "5px",
                boxShadow: "0px 0px 64px rgba(0, 0, 0, 0.15)"}} alt='profile' />
              </Avatar>
            </div> 
            <div>
              <Title> Hi, I’m Wesley </Title>
              <Text> Welcome to my portfolio website, where I've compiled all of my <b className="text-primary lined-link"><Link to="/works">projects</Link></b> past and current. Feel free to browse and learn more about my interests.</Text>
              <SubTitle>About Me</SubTitle>
              <ul>
                <li>
                <Text> I love building and creating things! In particular, my interests lie in robotic/mechatronic systems. In my free time, I enjoy woodworking, swimming, and exploring the great outdoors.</Text>
                
                </li>
                <li>
                <Text> I'm currently a first year <b className="text-primary lined-link">Robotics M.S.E.</b> graduate student at The University of Pennsylvania. In 2018, I graduated from Rice University with a <b className="text-primary lined-link">B.S. in Mechanical Engineering</b>.  </Text>
                </li>
              </ul>
              
              
              
              
              {/* <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton> */}
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
