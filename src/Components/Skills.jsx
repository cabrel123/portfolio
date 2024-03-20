import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import bootstrap from "/images/bootstrap.png";
import css3 from "/images/css3.png";
import django from "/images/django.png";
import git from "/images/git.png";
import html5 from "/images/html5.png";
import javascript from "/images/javascript.png";
import nextjs from "/images/nextjs.svg";
import python from "/images/python.png";
import react from "/images/react.png";
import tailwind from "/images/tailwind.png";
import php from "/images/php.png";
import f7 from "/images/f7.svg";
import sql from "/images/sql.png";
import cordova from "/images/cordova.png";
import android from "/images/android.png";
function Skills() {
  const ServiceSection = styled.section`
    position: relative;
    background-color: #0d012c;
    color: #dce1eb;
    max-width: 100%;
    padding: 50px 0px 50px;
  `;
  const ServiceSubSection = styled.div`
    position: relative;
  `;

  const ServiceTitle = styled.div`
    margin-bottom: 60px;
    text-align: center;
  `;
  const ServiceSectionTitle = styled.h2`
    font-size: 14px;
    font-weight: 300;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 10px;
    text-transform: uppercase;
    color: #59c378 !important;
  `;

  const ServiceSectionSubTitle = styled.h3`
    font-size: 2rem;
    text-transform: capitalize;
  `;
  const MylangDiv = styled.div`
    align-items: center;
    background: #14143a;
    border: 1px solid rgba(146, 146, 165, 0.1);
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-right: 15px;
    padding: 10px 0;
  `;
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
  `;

  const LangInfo = styled.div`
    align-items: center;
    display: block;
    margin-bottom: 10px;
  `;
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
  `;
  const LangInfoImg = styled.img`
    vertical-align: middle;
    border-style: none;
    height: 48px;
    width: 48px;
    margin: 0 auto;
    display: block;
  `;

  const SkillText = styled.p`
    border: 1px solid #252b58;
    border-radius: 10px;
    padding: 0 20px;
    color: #eb997c !important;
    font-size: 10px;
  `;

  const SkillTitle = styled.h3`
    color: rgb(255, 255, 255);
    font-size: 1.2rem;
  `;
  return (
    <>
      <ServiceSection id="skills">
        <Container>
          <Row>
            <ServiceSubSection>
              <ServiceTitle>
                <ServiceSectionTitle>Technologies mastered</ServiceSectionTitle>
                <ServiceSectionSubTitle>My Skills</ServiceSectionSubTitle>
              </ServiceTitle>
              <MylangRow>
                <MylangDiv>
                  <LangInfo>
                    <LangInfoDiv>
                      <LangInfoImg src={bootstrap} alt="" />
                    </LangInfoDiv>
                    <SkillTitle>Boostrap</SkillTitle>
                    <SkillText className="beginner">Expert</SkillText>
                  </LangInfo>
                </MylangDiv>

                <MylangDiv>
                  <LangInfo>
                    <LangInfoDiv>
                      <LangInfoImg src={html5} alt="" />
                    </LangInfoDiv>
                    <SkillTitle>HTML5</SkillTitle>
                    <SkillText className="Junior">Expert</SkillText>
                  </LangInfo>
                </MylangDiv>

                <MylangDiv>
                  <LangInfo>
                    <LangInfoDiv>
                      <LangInfoImg src={css3} alt="" />
                    </LangInfoDiv>
                    <SkillTitle>CSS3</SkillTitle>
                    <SkillText className="Junior">Expert</SkillText>
                  </LangInfo>
                </MylangDiv>

                <MylangDiv>
                  <LangInfo>
                    <LangInfoDiv>
                      <LangInfoImg src={javascript} alt="" />
                    </LangInfoDiv>
                    <SkillTitle>Javascript</SkillTitle>
                    <SkillText className="Junior">Expert</SkillText>
                  </LangInfo>
                </MylangDiv>

                <MylangDiv>
                  <LangInfo>
                    <LangInfoDiv>
                      <LangInfoImg src={react} alt="" />
                    </LangInfoDiv>
                    <SkillTitle>React</SkillTitle>
                    <SkillText className="Junior">Expert</SkillText>
                  </LangInfo>
                </MylangDiv>

                <MylangDiv>
                  <LangInfo>
                    <LangInfoDiv>
                      <LangInfoImg src={nextjs} alt="" />
                    </LangInfoDiv>
                    <SkillTitle>NextJs</SkillTitle>
                    <SkillText className="Junior">Intermediate</SkillText>
                  </LangInfo>
                </MylangDiv>

                <MylangDiv>
                  <LangInfo>
                    <LangInfoDiv>
                      <LangInfoImg src={django} alt="" />
                    </LangInfoDiv>
                    <SkillTitle>Django</SkillTitle>
                    <SkillText className="Junior">Expert</SkillText>
                  </LangInfo>
                </MylangDiv>

                <MylangDiv>
                  <LangInfo>
                    <LangInfoDiv>
                      <LangInfoImg src={git} alt="" />
                    </LangInfoDiv>
                    <SkillTitle>Git</SkillTitle>
                    <SkillText className="Junior">Intermediate</SkillText>
                  </LangInfo>
                </MylangDiv>

                <MylangDiv>
                  <LangInfo>
                    <LangInfoDiv>
                      <LangInfoImg src={python} alt="" />
                    </LangInfoDiv>
                    <SkillTitle>Python</SkillTitle>
                    <SkillText className="Junior">Expert</SkillText>
                  </LangInfo>
                </MylangDiv>

                <MylangDiv>
                  <LangInfo>
                    <LangInfoDiv>
                      <LangInfoImg src={sql} alt="" />
                    </LangInfoDiv>
                    <SkillTitle>SQL</SkillTitle>
                    <SkillText className="Junior">Expert</SkillText>
                  </LangInfo>
                </MylangDiv>

                <MylangDiv>
                  <LangInfo>
                    <LangInfoDiv>
                      <LangInfoImg src={php} alt="" />
                    </LangInfoDiv>
                    <SkillTitle>PHP</SkillTitle>
                    <SkillText className="Junior">Expert</SkillText>
                  </LangInfo>
                </MylangDiv>
                <MylangDiv>
                  <LangInfo>
                    <LangInfoDiv>
                      <LangInfoImg src={tailwind} alt="" />
                    </LangInfoDiv>
                    <SkillTitle>Tailwind</SkillTitle>
                    <SkillText className="Junior">Junior</SkillText>
                  </LangInfo>
                </MylangDiv>
                <MylangDiv>
                  <LangInfo>
                    <LangInfoDiv>
                      <LangInfoImg src={f7} alt="" />
                    </LangInfoDiv>
                    <SkillTitle>Framework7</SkillTitle>
                    <SkillText className="Junior">Intermediate</SkillText>
                  </LangInfo>
                </MylangDiv>
                <MylangDiv>
                  <LangInfo>
                    <LangInfoDiv>
                      <LangInfoImg src={cordova} alt="" />
                    </LangInfoDiv>
                    <SkillTitle>Cordova</SkillTitle>
                    <SkillText className="Junior">Intermediate</SkillText>
                  </LangInfo>
                </MylangDiv>

                <MylangDiv>
                  <LangInfo>
                    <LangInfoDiv>
                      <LangInfoImg src={android} alt="" />
                    </LangInfoDiv>
                    <SkillTitle>Android</SkillTitle>
                    <SkillText className="Junior">Intermediate</SkillText>
                  </LangInfo>
                </MylangDiv>
              </MylangRow>
            </ServiceSubSection>
          </Row>
        </Container>
      </ServiceSection>
    </>
  );
}
export default Skills;
