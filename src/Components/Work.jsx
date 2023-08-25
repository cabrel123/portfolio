import styled from 'styled-components'
import { Container, Row } from 'react-bootstrap'
import project1 from '/images/project1.png'
import project2 from '/images/project2.png'
import project3 from '/images/project3.png'
import project4 from '/images/project4.png'
import project5 from '/images/project5.png'
import project6 from '/images/project6.png'

function Work()
{
    const ServiceSection = styled.section`
    position:relative;
    background-color: #0d012c;
    color: #dce1eb;
    max-width: 100%;
    padding: 50px 0px 50px;
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
            <ServiceSection id="work">
            <Container>
            <Row>
            <MyworkDiv>
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
        </>
    )
}
export default Work