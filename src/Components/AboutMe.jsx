import styled from 'styled-components'
import { Container, Row } from 'react-bootstrap'
import dots from '/images/dots.png'
import rect from '/images/rects.png'
import shady from '/images/shady.png'
import main from '/images/main.svg'

function AboutMe(){

    const AboutMeSection = styled.section`
    background: #0d012c;
      color: #dce1eb;
      padding: 100px 40px 20px;
      position: relative;
      width: 100%;
    `

    const AboutDots = styled.div`
    bottom: 100px;
      left: 0;
      position: absolute;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    `

    const AboutDotsImg = styled.img`
    vertical-align: middle;
      border-style: none;
      display: block;
      width: 100%;
      opacity: .2;
      z-index: 2;
    `

    const AboutRect = styled.div`
    left: 50%;
      position: absolute;
      top: 140px;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    `

    const AboutRectImg = styled.img`
    vertical-align: middle;
      border-style: none;
      display: block;
      width: 100%;
      opacity: .2;
    `
    const AboutShady = styled.div`
    bottom: 50px;
    position: absolute;
    right: 50%;
    z-index: 20;
    `

    const AboutShadyImg = styled.img`
    vertical-align: middle;
      border-style: none;
      display: block;
      opacity: .8;
    width: 200px;
    `

    const AboutImgMain = styled.img`
    vertical-align: middle;
      border-style: none;
      display: block;
      margin-right: 0!important;
      width: 80%;
    `

    const AboutMeRow = styled.div`
    align-items: center!important;
      display: flex!important;
      flex-wrap: wrap-reverse!important;
      justify-content: space-between;
      text-align: left;
    `
    const AboutTitle = styled.h2`
    font-size: 15px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #59c378!important;
    `
    const AboutSubTitle = styled.h3`
    font-size: 2rem;
    font-weight: 500;
    line-height: 40px;
    margin-bottom: 10px;
    text-transform: uppercase;
    `

    const AboutText = styled.p`
    font-family: poppins,sans-serif!important;
    font-size: 14px;
    font-weight: 500;
    font-weight: 400;
    line-height: 1.9rem;
    color: #ccc!important;
    `

    const AboutLink = styled.a`
    color: #ffffff;
    text-decoration: none!important;
    `

    const AboutDownloadCV = styled.button`
    background: #59c378;
    border: none;
    border: 1px solid #59c378;
    border-radius: 5px;
    color: #0d012c;
    font-size: 13px;
    font-weight: 500;
    height: 60px;
    letter-spacing: 1px;
    outline: none;
    text-transform: uppercase;
    width: 200px;
    `

    return(
        <>
            
          <AboutMeSection id="aboutme">
            <Container>
              <Row>
              <div className="about-decor">
                <AboutDots>
                  <AboutDotsImg src={dots} alt="" />
                </AboutDots>
                <AboutRect>
                  <AboutRectImg src={rect} alt="" />
                </AboutRect>
                <AboutShady>
                  <AboutShadyImg src={shady} alt="" />
                  </AboutShady>
              </div>
              <AboutMeRow>
                <div className="col-lg-6 col-md-5 col-sm-12 about-img">
                  <AboutImgMain src={main} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-7 col-sm-12 about_myinfo">
                      <div className="title">
                        <AboutTitle>A PROPOS DE MOI</AboutTitle>
                        <AboutSubTitle>Pourquoi m&lsquo;engager pour votre prochain projet ?</AboutSubTitle>
                      </div>
                        <div className="about-description">
                          <div id="foo" className="unselectable">
                            <div>
                              <AboutText>J&lsquo;ai 29 ans et je suis un <strong>DEVELOPPEUR FULL STACK</strong> créatif<strong> </strong>basé à <AboutLink href="https://goo.gl/maps/kxLJDeYZjiUfA9rF7"><strong>YAOUNDE, CAMEROUN</strong></AboutLink> spécialisée dans la conception et le développement d&lsquo;interfaces utilisateur. Je construis des interfaces propres, attrayantes et fonctionnelles qui respectent les derniers standards du web🔥</AboutText>
                              <AboutText>Je suis actuellement un freelance. Je suis React, PHP et Django Développeur web passionné par l&lsquo;Open Source.</AboutText>
                            </div>
                          </div>
                        </div>
                        <div className="itscv">
                          <AboutLink href="#" download="RESUME.pdf" target="_blank" rel="noopener noreferrer">
                            <AboutDownloadCV className="download-cv">Télécharger mon CV</AboutDownloadCV>
                          </AboutLink>
                        </div>
                    </div>
              </AboutMeRow>
              </Row>
              </Container>
          </AboutMeSection>
        </>
    )
}

export default AboutMe