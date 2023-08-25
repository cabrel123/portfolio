import styled from 'styled-components'
import { Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faPen, faSnowflake, faCubes } from '@fortawesome/free-solid-svg-icons'
import mpsessa from '/images/mpesa_api.png'
import webapp from '/images/web_app.png'
import api from '/images/api.png'
import soft from '/images/soft.png'

function Services()
{
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

    return(
        <>
            <ServiceSection id="services">
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
        </>
    )
}
export default Services