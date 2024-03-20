import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import slide from "/images/bg.png";

function Home() {
  const IntroSection = styled.section`
    position: relative;
    padding: 50px 0 50px 0;
    background: #29155c;
  `;

  const DesignImage = styled.img`
    border-radius: 10px;
    margin-right: 0 !important;
    width: 80%;
    z-index: 50;
    display: block;
    vertical-align: middle;
    border-style: none;
  `;

  const CardImage = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
  `;
  const IntroName = styled.div`
    position: relative;
    color: #dce1eb;
    text-align: left;
  `;

  const Hello = styled.div`
    -webkit-text-fill-color: transparent;
    background: #eff30e;
    -webkit-background-clip: text;
    color: #ffffff;
    font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace;
    font-size: 17px;
    font-weight: 800;
    letter-spacing: 1px;
    margin-bottom: 10px;
    text-transform: uppercase;
  `;

  const Name = styled.div`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 15px;
  `;

  const JobTitle = styled.div`
    background: #d84f6f;
    background: linear-gradient(
      to right,
      #d84f6f 0%,
      #c060b6 50%,
      #1eacd9 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    color: #ffffff;
    font-size: 3rem;
    font-weight: 800 !important;
    margin-bottom: 20px !important;
  `;
  const MyInfo = styled.div`
    font-size: 16px;
    font-weight: 400 !important;
    margin-bottom: 20px;
    line-height: 1.9em;
  `;

  const LinkBtn = styled.a`
    color: #ffffff;
    text-decoration: none !important;
  `;

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
    `;

  return (
    <>
      <IntroSection>
        <Container>
          <Row>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <IntroName>
                <Hello>Full Stack Developer</Hello>
                <Name>Hey! I am</Name>
                <JobTitle>Cabrel Monkam</JobTitle>
                <MyInfo>
                  I am a software developer based in Cameroon, passionate and
                  experienced in creating web applications.
                </MyInfo>
                <div className="intro-btns">
                  <LinkBtn href="mailto:monkamcabrel11@gmail.com">
                    <ButtonCard className="contact-me">Contact me</ButtonCard>
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
    </>
  );
}
export default Home;
