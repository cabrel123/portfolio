import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
function ContactMe() {
  const ReachMeContainer = styled.div`
    background: #0d012c;
    color: #dce1eb;
    position: relative;
    width: 100%;
    padding-bottom: 30px;
  `;

  const ReachMeContainerTitle = styled.div`
    margin: auto;
    max-width: 450px;
    text-align: center;
  `;

  const ReachMeContainerTitleH2 = styled.h2`
    font-size: 15px;
    color: #59c378 !important;
  `;
  const ReachMeContainerTitleH3 = styled.h3`
    font-size: 2.6rem;
    padding-bottom: 10px;
    text-align: center;
  `;
  const ContactInfo = styled.div`
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 10px 0 0 10px;
    align-items: center;
    display: flex;
    text-align: left !important;
  `;
  const ContactDetail = styled.div`
    justify-content: space-around;
    margin-right: 30px;
    display: flex;
    text-align: left !important;
  `;

  const ContactInfoPhone = styled.i`
    align-items: center;
    border-radius: 50%;
    border-radius: 150px;
    display: flex;
    font-size: 27px;
    height: 80px;
    justify-content: center;
    margin-bottom: 10px;
    margin-right: 20px;
    width: 80px;
    background: #fcdcdc;
    color: #f06a6a !important;
  `;
  const ContactInfoEmail = styled.i`
    align-items: center;
    border-radius: 50%;
    border-radius: 150px;
    display: flex;
    font-size: 27px;
    height: 80px;
    justify-content: center;
    margin-bottom: 10px;
    margin-right: 20px;
    width: 80px;
    background: #ddf5e6;
    color: #6ecc21 !important;
  `;
  const ContactInfoAddress = styled.i`
    align-items: center;
    border-radius: 50%;
    border-radius: 150px;
    display: flex;
    font-size: 27px;
    height: 80px;
    justify-content: center;
    margin-bottom: 10px;
    margin-right: 20px;
    width: 80px;
    background: #ddd6fa;
    color: #8b71e9 !important;
  `;
  const ContactMi = styled.div`
    margin-left: 10px;
    margin-top: 10px;
  `;
  const ContactMiH4 = styled.h4`
    font-size: 1.3rem;
    margin-bottom: 0;
    padding-bottom: 0;
  `;
  const ContactMiText = styled.p`
    color: #cacaca !important;
    font-weight: 500;
    line-height: 30px;
    font-size: 14px;
  `;

  const EmailFormMe = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
  `;
  const EmailFormMeInput = styled.input`
    border: none;
    border-radius: 6px;
    height: 55px;
    margin-bottom: 10px;
    background: #14143a;
    color: #fff;
    text-indent: 20px;
    width: 100%;
    margin: 0 0 10px 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  `;
  const EmailMeTextarea = styled.textarea`
    border-radius: 5px;
    padding-top: 20px;
    background: #14143a;
    color: #fff;
    text-indent: 20px;
    width: 100%;
    overflow: auto;
    resize: vertical;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  `;
  const EmailMeBtn = styled.button`
    cursor: pointer;
    background: #59c378;
    border-radius: 10px;
    font-size: 15px;
    height: 50px;
    margin-top: 30px;
    width: 150px;
    text-transform: none;
  `;

  return (
    <>
      <ReachMeContainer id="contactme">
        <Container>
          <Row>
            <ReachMeContainerTitle>
              <ReachMeContainerTitleH2>
                Give me your news
              </ReachMeContainerTitleH2>

              <ReachMeContainerTitleH3>Contact me</ReachMeContainerTitleH3>
            </ReachMeContainerTitle>
            <div className="row">
              <div className="col-md-6">
                <div className="reachme-title">
                  <div className="row">
                    <ContactInfo>
                      <ContactDetail>
                        <ContactInfoPhone className="fa fa-phone"></ContactInfoPhone>
                        <ContactMi>
                          <ContactMiH4>Phone Number:</ContactMiH4>
                          <ContactMiText>
                            +237655925698 / +237 681805142
                          </ContactMiText>
                        </ContactMi>
                      </ContactDetail>
                    </ContactInfo>
                    <ContactInfo>
                      <ContactDetail>
                        <ContactInfoEmail className="fa fa-enveloppe"></ContactInfoEmail>
                        <ContactMi>
                          <ContactMiH4>E-mail:</ContactMiH4>
                          <ContactMiText>
                            monkamcabrel11@gmail.com
                          </ContactMiText>
                        </ContactMi>
                      </ContactDetail>
                    </ContactInfo>
                    <ContactInfo>
                      <ContactDetail>
                        <ContactInfoAddress className="fa fa-map-marker"></ContactInfoAddress>
                        <ContactMi>
                          <ContactMiH4>Address:</ContactMiH4>
                          <ContactMiText>
                            30345 Rue de la chapelle nsymeyong, Yaoundé,
                            Cameroon
                          </ContactMiText>
                        </ContactMi>
                      </ContactDetail>
                    </ContactInfo>
                  </div>
                </div>
              </div>
              <EmailFormMe className="col-md-6">
                <form action="" className="contact-form" onSubmit="">
                  <div className="row">
                    <div className="col-md-12 mb-3 hire-me-title"></div>
                    <div className="col-md-6 ">
                      <EmailFormMeInput
                        type="text"
                        name="user_name"
                        id=""
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div className="col-md-6 ">
                      <EmailFormMeInput
                        type="email"
                        name="user_email"
                        id=""
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <div className="col-md-12">
                      <EmailFormMeInput
                        type="text"
                        name="subject"
                        id=""
                        placeholder="Enter Subject"
                      />
                    </div>
                    <div className="col-md-12 mb-2">
                      <EmailMeTextarea
                        name="message"
                        id=""
                        cols="60"
                        rows="8"
                        placeholder="Your Message"
                      ></EmailMeTextarea>
                      <EmailMeBtn type="submit">Send Message</EmailMeBtn>
                    </div>
                  </div>
                </form>
              </EmailFormMe>
            </div>
          </Row>
        </Container>
      </ReachMeContainer>
    </>
  );
}
export default ContactMe;
