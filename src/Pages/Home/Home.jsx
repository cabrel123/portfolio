import styled from 'styled-components'
import { Container, Row } from 'react-bootstrap'
import dots from '/images/dots.png'
import rect from '/images/rects.png'
import shady from '/images/shady.png'
import slide from '/images/bg.png'
import main from '/images/main.svg'
import mpsessa from '/images/mpesa_api.png'
import webapp from '/images/web_app.png'
import api from '/images/api.png'
import soft from '/images/soft.png'
import bootstrap from '/images/bootstrap.png'
import css3 from '/images/css3.png'
import django from '/images/django.png'
import git from '/images/git.png'
import html5 from '/images/html5.png'
import javascript from '/images/javascript.png'
import nextjs from '/images/nextjs.svg'
import python from '/images/python.png'
import react from '/images/react.png'
import tailwind from '/images/tailwind.png'
import php from '/images/php.png'
import f7 from '/images/f7.svg'
import sql from '/images/sql.png'
import cordova from '/images/cordova.png'
import android from '/images/android.png'
import project1 from '/images/project1.png'
import project2 from '/images/project2.png'
import project3 from '/images/project3.png'
import project4 from '/images/project4.png'
import project5 from '/images/project5.png'
import project6 from '/images/project6.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faPen, faSnowflake, faCubes } from '@fortawesome/free-solid-svg-icons'


function Home()
{
  const MainDiv = styled.main`
    position: relative;
    width:100%;
    height:100%;
    `
    const IntroSection = styled.section`
    position: relative;
    padding: 50px 0 50px 0;
    background: #29155c;
    `

    const DesignImage = styled.img`
      border-radius: 10px;
      margin-right: 0!important;
      width: 80%;
      z-index: 50;
      display: block;
      vertical-align: middle;
      border-style: none;
    `

    const CardImage = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    `
    const IntroName = styled.div`
    position: relative;
    color: #dce1eb;
    text-align: left;
    `

    const Hello = styled.div`
      -webkit-text-fill-color: transparent;
      background: #eff30e;
      -webkit-background-clip: text;
      color: #ffffff;
      font-family: SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace;
      font-size: 17px;
      font-weight: 800;
      letter-spacing: 1px;
      margin-bottom: 10px;
      text-transform: uppercase;
    `

    const Name = styled.div`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 15px;
    `

    const JobTitle = styled.div`
    background: #D84F6F;
    background: linear-gradient(to right, #D84F6F 0%, #C060B6 50%, #1eacd9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
      color: #ffffff;
      font-size: 3rem;
      font-weight: 800!important;
      margin-bottom: 20px!important;
    `
    const MyInfo = styled.div`
    font-size: 16px;
    font-weight: 400!important;
    margin-bottom: 20px;
    line-height: 1.9em;
    `

    const LinkBtn = styled.a`
    color: #ffffff;
    text-decoration: none!important;
    `

    const ButtonCard = styled.button`
    background: rgb(213,82,124);
background: linear-gradient(90deg, rgba(213,82,124,1) 0%, rgba(161,113,208,1) 35%, rgba(49,166,216,1) 100%);
    border: none;
    border: 1px solid rgba(213,82,124,1);
    border-radius: 47px;
    font-size: 13px;
    height: 60px;
    letter-spacing: 3px;
    outline: none;
    text-transform: uppercase;
    width: 180px;
    position: relative;
    border: none;
    color: #ffffff;
    font-weight: 500;
    margin-right: 30px;
    transition: all .5s ease;
    &hover
    background: #59c378!important;
    `

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

    const ServiceSection = styled.section`
    position:relative;
    background-color: #0d012c;
    color: #dce1eb;
    max-width: 100%;
    padding: 50px 0px 50px;
    `

    const ServiceSubSection = styled.div`
    position:relative;
    `

    const ServiceTitle = styled.div`
    margin-bottom: 60px;
    text-align: center;
    `

    const ServiceSectionTitle = styled.h2`
    font-size: 14px;
    font-weight: 300;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 10px;
    text-transform: uppercase;
    color:#59c378!important;
    `

    const ServiceSectionSubTitle = styled.h3`
    font-size: 2rem;
    text-transform: capitalize;
    `

    const ServiceSectionRow = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 8px;
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
    `

    const ServiceSectionRowItem = styled.div`
    align-items: center;
    display: flex;
    background: #14143a;
    border-radius: 10px!important;
    box-shadow: 0 30px 60px 0 rgba(0,0,0,.1)!important;
    cursor: pointer;
    flex-direction: column;
    height: 240px;
    margin-bottom: 10px;
    overflow: hidden;
    padding: 10px;
    position: relative;
    text-align: center;
    transition: all .5s ease;
    margin-left: 7px;
    margin-right: 7px;
    `

    const ServiceSectionRowItemIcon = styled.div`
    align-items: center;
    background: #061233;
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
    color: #020c1b;
    display: flex;
    flex-shrink: 0;
    font-size: 28px;
    height: 3.5rem;
    justify-content: center;
    margin-bottom: 10px;
    width: 3.5rem;
    `
    const ServiceSectionRowItemImg = styled.img`
    vertical-align: middle;
      border-style: none;
      display: block;
      margin: 10px 0;
    width: 50px;
    `

    const ServiceSectionRowItemTitle = styled.h4`
    font-size: 17px;
    margin: 10px 0;
    color: #fff!important;
    font-weight: 700;
    `
    const ServiceSectionRowItemText = styled.p`
    font-size: 13px;
    font-weight: 400;
    color: #ccc!important;
    `
    const ServiceSectionRowItemShadow = styled.div`
    bottom: -100px;
    font-size: 195px;
    opacity: .05;
    position: absolute;
    right: -90px;
    z-index: 0;
    `

    const MylangDiv = styled.div`
    align-items: center;
    background: #14143a;
    border: 1px solid rgba(146,146,165,.1);
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-right: 15px;
    padding: 10px 0;
    `
    const MylangRow = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    `

    const LangInfo = styled.div`
    align-items: center;
    display: block;
    margin-bottom: 10px;
    `
    const LangInfoDiv = styled.div`
    background: #17203d;
    border-radius: 5px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 3.7rem;
    height: 70px;
    justify-content: center;
    margin-top: 5px;
    width: 70px;
    align-items: center;
    display: flex;
    margin-bottom: 20px;
    `
    const LangInfoImg = styled.img`
    vertical-align: middle;
    border-style: none;
    height: 48px;
    width: 48px;
    margin:0 auto;
    display:block;
    `

    const SkillText = styled.p`
    border: 1px solid #252b58;
    border-radius: 10px;
    padding: 0 20px;
    color: #eb997c!important;
    font-size:10px;
    `
  
    const SkillTitle = styled.h3`
    color: rgb(255, 255, 255);
    font-size: 1.2rem;
    `  


    const MyworkDiv = styled.div`
      color: #dce1eb;
      margin-top: 30px!important;
      overflow: hidden;
      width: 100%;
      
    `

    const MyworkTitle = styled.div`
    margin-bottom: 30px;
    text-align: center;
    `

    const MyworkTitleH2 = styled.h2`
    font-size: 15px;
    font-weight: 400;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: #59c378!important;
    `

    const MyworkTitleH3 = styled.h3`
    font-size: 2.2rem;
    margin-bottom: 40px;
    text-transform: uppercase;
    `

    const ProjectRow = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 8px;
      @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(1, 1fr);
      }
      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
      }
    `

    const ProjectDiv = styled.div`
    background: #14143a;
    border: 1px solid hsla(0,0%,100%,.1);
    border-radius: 17px;
    overflow: hidden!important;
    padding: 10px;
    `

    const ProjectDivImg = styled.div`
    display: block;
    overflow: hidden;
    position: relative;
    `

    const ProjectImg = styled.img`
    border-radius: 25px!important;
    cursor: pointer;
    display: inline-block!important;
    height: 220px;
    padding: 15px;
    -webkit-transform: scale(1)!important;
    transform: scale(1)!important;
    transition: .5s;
    width: 100%;
    vertical-align: middle;
    border-style: none;
    `

    const DatePosted = styled.div`
    align-items: center!important;
    display: flex!important;
    justify-content: space-between;
    padding: 10px 20px;
    min-height: 60px;
    `

    const WhoPost = styled.div`
    align-items: center;
    color: var(--color-title)!important;
    display: flex;
    justify-content: center;
    `
    
    const WhoPostAdmin = styled.p`
    background: #1578CF;
    background: linear-gradient(to right, #1578CF 0%, #CF1512 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #ccc!important;
    font-size: 12px!important;
    font-weight: 600!important;
    margin: 0 0 0 5px!important;
    text-transform: uppercase;
    font-family: SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace;
    `

    const WorkDetails = styled.div`
    padding: 0 20px 20px;
    position: relative;
    `
    
    const WorkDetailsH2 = styled.h2`
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 20px;
    max-height: 100px;
    color: #59c378!important;
    `
    
    const WorkInfos = styled.p`
    font-size: 13px;
    font-weight: 300!important;
    line-height: 1.7rem;
    white-space: normal;
    word-break: break-all;
    @media screen and (min-width: 1170px) {
      min-height: 170px;
    }
    `

    const ProjectLinks = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    `
   
    return(
        <>
        <MainDiv>
          <IntroSection>
              <Container>
                <Row>
                  <div className="col-lg-5 col-md-5 col-sm-12">
                  <IntroName>
                    <Hello>Développeur Full Stack</Hello>
                    <Name>Hey! Je Suis</Name>
                    <JobTitle>Cabrel Monkam</JobTitle>
                    <MyInfo>Je suis un développeur de logiciels basé au Cameroun, passionné et expérimenté dans la création d&lsquo;applications Web.</MyInfo>
                    <div className="intro-btns">
                      <LinkBtn href="mailto:monkamcabrel11@gmail.com">
                        <ButtonCard class="contact-me">Contactez-moi</ButtonCard>
                        </LinkBtn>
                    </div>
                    </IntroName>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-12">
                  <CardImage>
                     <DesignImage src={slide} alt="design image" />
                    </CardImage>
                  </div>
                </Row>
              </Container>
          </IntroSection>
          <AboutMeSection>
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
          <ServiceSection>
            <Container>
            <Row>
                <ServiceSubSection>
                  <ServiceTitle>
                    <ServiceSectionTitle>LES SERVICES QUE JE VOUS PROPOSE</ServiceSectionTitle>
                    <ServiceSectionSubTitle>Services</ServiceSectionSubTitle>
                  </ServiceTitle>
                    <ServiceSectionRow>
                    
                      <ServiceSectionRowItem>
                        <ServiceSectionRowItemIcon>
                          <ServiceSectionRowItemImg src={mpsessa} alt="" />
                        </ServiceSectionRowItemIcon>
                        <ServiceSectionRowItemTitle>Orange & MTN Mobile Money Intergration</ServiceSectionRowItemTitle>
                        <ServiceSectionRowItemText>Je synchronise l&lsquo;API Web Orange Money et MTN avec les sites Web pour permettre l&lsquo;automatisation des paiements, et des décaissements.</ServiceSectionRowItemText>
                        <ServiceSectionRowItemShadow>
                        <FontAwesomeIcon icon={faBriefcase} />
                          </ServiceSectionRowItemShadow>
                      </ServiceSectionRowItem>
                       <ServiceSectionRowItem>
                            <ServiceSectionRowItemIcon>
                              <ServiceSectionRowItemImg src={webapp} alt="" />
                                </ServiceSectionRowItemIcon>
                                <ServiceSectionRowItemTitle>Développement<br/> web</ServiceSectionRowItemTitle>
                                <ServiceSectionRowItemText>J&lsquo;utilise des langages de codage tels que HTML5, CSS3, JavaScript, React Js, PHP et Python pour créer des sites Web et des applications Web.</ServiceSectionRowItemText>
                                <ServiceSectionRowItemShadow>
                                <FontAwesomeIcon icon={faPen} />
                                  </ServiceSectionRowItemShadow>
                        </ServiceSectionRowItem>
                          <ServiceSectionRowItem>
                            <ServiceSectionRowItemIcon>
                              <ServiceSectionRowItemImg src={api} alt="" />
                                </ServiceSectionRowItemIcon>
                                <ServiceSectionRowItemTitle>API <br/>Intergration</ServiceSectionRowItemTitle>
                                <ServiceSectionRowItemText>J&lsquo;offre un service d&lsquo;intégration d&lsquo;API dans des applications existantes ou dans des logiciels que je crée à partir de rien.</ServiceSectionRowItemText>
                                <ServiceSectionRowItemShadow>
                                <FontAwesomeIcon icon={faSnowflake} />
                                  </ServiceSectionRowItemShadow>
                          </ServiceSectionRowItem>
                          <ServiceSectionRowItem>
                            <ServiceSectionRowItemIcon>
                              <ServiceSectionRowItemImg src={soft} alt="" />
                                </ServiceSectionRowItemIcon>
                                <ServiceSectionRowItemTitle>Développement <br/>de logiciels</ServiceSectionRowItemTitle>
                                <ServiceSectionRowItemText>J&lsquo;offre des services de développement de logiciels personnalisés de classe mondiale conçus spécifiquement pour votre entreprise et prêts à satisfaire vos besoins exclusifs.</ServiceSectionRowItemText>
                                <ServiceSectionRowItemShadow>
                                <FontAwesomeIcon icon={faCubes} />
                                  </ServiceSectionRowItemShadow>
                            </ServiceSectionRowItem>
                            
                   </ServiceSectionRow>
              </ServiceSubSection>
              </Row>
              </Container>
          </ServiceSection>

          <ServiceSection>
            <Container>
            <Row>
                <ServiceSubSection>
                  <ServiceTitle>
                    <ServiceSectionTitle>Les technologies maitrisées</ServiceSectionTitle>
                    <ServiceSectionSubTitle>Mes Skills</ServiceSectionSubTitle>
                  </ServiceTitle>
                    <MylangRow>
                      <MylangDiv>
                        <LangInfo>
                          <LangInfoDiv>
                            <LangInfoImg src={bootstrap} alt="" />
                          </LangInfoDiv>
                          <SkillTitle>Boostrap</SkillTitle>
                          <SkillText className='beginner'>Expert</SkillText>
                        </LangInfo>
                      </MylangDiv>
                     
                      <MylangDiv>
                        <LangInfo>
                          <LangInfoDiv>
                            <LangInfoImg src={html5} alt="" />
                          </LangInfoDiv>
                          <SkillTitle>HTML5</SkillTitle>
                          <SkillText className='Junior'>Expert</SkillText>
                        </LangInfo>
                      </MylangDiv>
                     
                      <MylangDiv>
                        <LangInfo>
                          <LangInfoDiv>
                            <LangInfoImg src={css3} alt="" />
                          </LangInfoDiv>
                          <SkillTitle>CSS3</SkillTitle>
                          <SkillText className='Junior'>Expert</SkillText>
                        </LangInfo>
                      </MylangDiv>
                     
                      <MylangDiv>
                        <LangInfo>
                          <LangInfoDiv>
                            <LangInfoImg src={javascript} alt="" />
                          </LangInfoDiv>
                          <SkillTitle>Javascript</SkillTitle>
                          <SkillText className='Junior'>Expert</SkillText>
                        </LangInfo>
                      </MylangDiv>
                     
                      <MylangDiv>
                        <LangInfo>
                          <LangInfoDiv>
                            <LangInfoImg src={react} alt="" />
                          </LangInfoDiv>
                          <SkillTitle>React</SkillTitle>
                          <SkillText className='Junior'>Expert</SkillText>
                        </LangInfo>
                      </MylangDiv>
                     
                      <MylangDiv>
                        <LangInfo>
                          <LangInfoDiv>
                            <LangInfoImg src={nextjs} alt="" />
                          </LangInfoDiv>
                          <SkillTitle>NextJs</SkillTitle>
                          <SkillText className='Junior'>Intermédiaire</SkillText>
                        </LangInfo>
                      </MylangDiv>
                      
                      <MylangDiv>
                        <LangInfo>
                          <LangInfoDiv>
                            <LangInfoImg src={django} alt="" />
                          </LangInfoDiv>
                          <SkillTitle>Django</SkillTitle>
                          <SkillText className='Junior'>Expert</SkillText>
                        </LangInfo>
                      </MylangDiv>
                     
                      <MylangDiv>
                        <LangInfo>
                          <LangInfoDiv>
                            <LangInfoImg src={git} alt="" />
                          </LangInfoDiv>
                          <SkillTitle>Git</SkillTitle>
                          <SkillText className='Junior'>Intermédiaire</SkillText>
                        </LangInfo>
                      </MylangDiv>
                      
                      <MylangDiv>
                        <LangInfo>
                          <LangInfoDiv>
                            <LangInfoImg src={python} alt="" />
                          </LangInfoDiv>
                          <SkillTitle>Python</SkillTitle>
                          <SkillText className='Junior'>Expert</SkillText>
                        </LangInfo>
                      </MylangDiv>
                      

                      <MylangDiv>
                        <LangInfo>
                          <LangInfoDiv>
                            <LangInfoImg src={sql} alt="" />
                          </LangInfoDiv>
                          <SkillTitle>SQL</SkillTitle>
                          <SkillText className='Junior'>Expert</SkillText>
                        </LangInfo>
                      </MylangDiv>
                     
                      <MylangDiv>
                        <LangInfo>
                          <LangInfoDiv>
                            <LangInfoImg src={php} alt="" />
                          </LangInfoDiv>
                          <SkillTitle>PHP</SkillTitle>
                          <SkillText className='Junior'>Expert</SkillText>
                        </LangInfo>
                      </MylangDiv>
                      <MylangDiv>
                        <LangInfo>
                          <LangInfoDiv>
                            <LangInfoImg src={tailwind} alt="" />
                          </LangInfoDiv>
                          <SkillTitle>Tailwind</SkillTitle>
                          <SkillText className='Junior'>Junior</SkillText>
                        </LangInfo>
                      </MylangDiv>
                      <MylangDiv>
                        <LangInfo>
                          <LangInfoDiv>
                            <LangInfoImg src={f7} alt="" />
                          </LangInfoDiv>
                          <SkillTitle>Framework7</SkillTitle>
                          <SkillText className='Junior'>Intermediaire</SkillText>
                        </LangInfo>
                      </MylangDiv>
                      <MylangDiv>
                        <LangInfo>
                          <LangInfoDiv>
                            <LangInfoImg src={cordova} alt="" />
                          </LangInfoDiv>
                          <SkillTitle>Cordova</SkillTitle>
                          <SkillText className='Junior'>Intermédiaire</SkillText>
                        </LangInfo>
                      </MylangDiv>

                      <MylangDiv>
                        <LangInfo>
                          <LangInfoDiv>
                            <LangInfoImg src={android} alt="" />
                          </LangInfoDiv>
                          <SkillTitle>Android</SkillTitle>
                          <SkillText className='Junior'>Intermédiaire</SkillText>
                        </LangInfo>
                      </MylangDiv>

                      </MylangRow>
                      
              </ServiceSubSection>
              </Row>
              </Container>
          </ServiceSection>


          <ServiceSection>
            <Container>
            <Row>
            <MyworkDiv id="work">
              <MyworkTitle>
                <MyworkTitleH2>Appercu de mes récents projets</MyworkTitleH2>

                <MyworkTitleH3>Mes travaux</MyworkTitleH3>
                <ProjectRow>

                <ProjectDiv>
                <ProjectDivImg>
                <ProjectImg
                    src={project1}
                    alt=""
                  />
                </ProjectDivImg>
                <DatePosted>
                  <WhoPost>
                  <WhoPostAdmin>HTML5 |  JavaScript | PHP</WhoPostAdmin>
                  </WhoPost>
                </DatePosted>

                <WorkDetails>
                  <WorkDetailsH2>Allure : Site vitrine de l&lsquo;agence ALLURE</WorkDetailsH2>
                  <WorkInfos>Pour ce project, j&lsquo;ai développé ce site from scratch en HTML5, CSS3, Javascript pour les technologies Front-End et pour le Back-End nous avons du PHP.</WorkInfos>
                  <ProjectLinks>
                  <a href="https://www.allure-ecom-agency.cm/" target="_blank" rel="noopener noreferrer">
                      <h6 className="learnmore">
                        <i className="fa fa-laptop" aria-hidden="true"></i>&nbsp;
                        Live Demo
                      </h6>
                    </a>
                  </ProjectLinks>
                </WorkDetails>
                </ProjectDiv>

                <ProjectDiv>
                <ProjectDivImg>
                <ProjectImg
                    src={project2}
                    alt=""
                  />
                </ProjectDivImg>
                <DatePosted>
                  <WhoPost>
                  <WhoPostAdmin>HTML5 |  JavaScript | PHP | Node Js | WebRtc</WhoPostAdmin>
                  </WhoPost>
                </DatePosted>

                <WorkDetails>
                  <WorkDetailsH2>Monpetitjob : Site d&lsquo;annonces de petits jobs</WorkDetailsH2>
                  <WorkInfos>Pour ce project, j&lsquo;ai développé ce site from scratch en HTML5, CSS3, Javascript pour les technologies Front-End et pour le Back-End nous avons du PHP et Node Js + WebRtc pour le serveur de chat et appel visio.</WorkInfos>
                  <ProjectLinks>
                  <a href="https://www.monpetitjob.com/" target="_blank" rel="noopener noreferrer">
                      <h6 className="learnmore">
                        <i className="fa fa-laptop" aria-hidden="true"></i>&nbsp;
                        Live Demo
                      </h6>
                    </a>
                  </ProjectLinks>
                </WorkDetails>
                </ProjectDiv>

                <ProjectDiv>
                <ProjectDivImg>
                <ProjectImg
                    src={project3}
                    alt=""
                  />
                </ProjectDivImg>
                <DatePosted>
                  <WhoPost>
                  <WhoPostAdmin>HTML5 |  JavaScript | Python | Framework7 | Cordova | PHP | Node Js | Android</WhoPostAdmin>
                  </WhoPost>
                </DatePosted>

                <WorkDetails>
                  <WorkDetailsH2>SuiTch : Wallet électronique (App android & iOs + Back-office)</WorkDetailsH2>
                  <WorkInfos>Pour ce project, j&lsquo;ai développé ce site from scratch en HTML5, CSS3, Javascript pour les technologies Front-End et pour le Back-End nous avons du PHP et Node Js + WebRtc pour le serveur de chat et appel visio. Framework7+Cordova+Android pour le développemnt de la partie mobile.</WorkInfos>
                  <ProjectLinks>
                  <a href="https://suitch.tech/" target="_blank" rel="noopener noreferrer">
                      <h6 className="learnmore">
                        <i className="fa fa-laptop" aria-hidden="true"></i>&nbsp;
                        Live Demo
                      </h6>
                    </a>
                    
                  </ProjectLinks>
                </WorkDetails>
                </ProjectDiv>

                <ProjectDiv>
                <ProjectDivImg>
                <ProjectImg
                    src={project4}
                    alt=""
                  />
                </ProjectDivImg>
                <DatePosted>
                  <WhoPost>
                  <WhoPostAdmin>HTML5 |  JavaScript | PHP</WhoPostAdmin>
                  </WhoPost>
                </DatePosted>

                <WorkDetails>
                  <WorkDetailsH2>Boutique Sopecam : Site e-commerce</WorkDetailsH2>
                  <WorkInfos>Pour ce project, j&lsquo;ai développé ce site from scratch en HTML5, CSS3, Javascript pour les technologies Front-End et pour le Back-End nous avons du PHP.</WorkInfos>
                  <ProjectLinks>
                  <a href="https://boutique.sopecam.cm" target="_blank" rel="noopener noreferrer">
                      <h6 className="learnmore">
                        <i className="fa fa-laptop" aria-hidden="true"></i>&nbsp;
                        Live Demo
                      </h6>
                    </a>
                    
                  </ProjectLinks>
                </WorkDetails>
                </ProjectDiv>


                <ProjectDiv>
                <ProjectDivImg>
                <ProjectImg
                    src={project5}
                    alt=""
                  />
                </ProjectDivImg>
                <DatePosted>
                  <WhoPost>
                  <WhoPostAdmin>HTML5 |  JavaScript | PHP</WhoPostAdmin>
                  </WhoPost>
                </DatePosted>

                <WorkDetails>
                  <WorkDetailsH2>Cameroon-tribune : Site d&lsquo;informations</WorkDetailsH2>
                  <WorkInfos>Pour ce project, j&lsquo;ai développé ce site from scratch en HTML5, CSS3, Javascript pour les technologies Front-End et pour le Back-End nous avons du PHP.</WorkInfos>
                  <ProjectLinks>
                  <a href="https://cameroon-tribune.cm" target="_blank" rel="noopener noreferrer">
                      <h6 className="learnmore">
                        <i className="fa fa-laptop" aria-hidden="true"></i>&nbsp;
                        Live Demo
                      </h6>
                    </a>
                    
                  </ProjectLinks>
                </WorkDetails>
                </ProjectDiv>

                
                <ProjectDiv>
                <ProjectDivImg>
                <ProjectImg
                    src={project6}
                    alt=""
                  />
                </ProjectDivImg>
                <DatePosted>
                  <WhoPost>
                  <WhoPostAdmin>HTML5 |  JavaScript | PHP</WhoPostAdmin>
                  </WhoPost>
                </DatePosted>

                <WorkDetails>
                  <WorkDetailsH2>Site vitrine EVAC SANTE : agence de tourisme médical</WorkDetailsH2>
                  <WorkInfos>Pour ce project, j&lsquo;ai développé ce site from scratch en HTML5, CSS3, Javascript pour les technologies Front-End et pour le Back-End nous avons du PHP.</WorkInfos>
                  <ProjectLinks>
                  <a href="https://evacsante.com" target="_blank" rel="noopener noreferrer">
                      <h6 className="learnmore">
                        <i className="fa fa-laptop" aria-hidden="true"></i>&nbsp;
                        Live Demo
                      </h6>
                    </a>
                    
                  </ProjectLinks>
                </WorkDetails>
                </ProjectDiv>

                </ProjectRow>
              </MyworkTitle>
            </MyworkDiv>
            </Row>
            </Container>
            </ServiceSection>

      </MainDiv>
        </>
    )
}
export default Home