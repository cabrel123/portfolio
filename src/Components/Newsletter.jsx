import styled from 'styled-components'
import { Container, Row } from 'react-bootstrap'
function Newsletter()
{
    const ServiceSection = styled.section`
    position:relative;
    background-color: #0d012c;
    color: #dce1eb;
    max-width: 100%;
    padding: 50px 0px 50px;
    `
    
    const ContactMe2 = styled.div`
    background: #0c0122;
    border-radius: 20px;
    color: #dce1eb;
    padding: 40px 60px 10px 30px;
    position: relative;
    `

    const ContactMeT1 = styled.div`
    padding-bottom: 1rem!important;
    `
    const ContactMeT1H2 = styled.h2`
    color: #59c378!important;
    font-size: 1.4rem;
    `
   
    const WorkTogetherH2 = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #fff!important;
    `
    const WorkTogetherText = styled.p`
    font-size: 14px;
    color: #ccc!important;
    margin-top: 0;
    margin-bottom: 1rem;
    `

    const WorkTogetherForm = styled.div`
    display: flex;
    justify-content: space-between;
    `
    const WorkTogetherFormInput = styled.input`
    background: #fff;
    border: none;
    border-radius: 50px;
    box-shadow: none;
    color: #10161b;
    font-family: Rubik,sans-serif;
    font-size: 15px;
    height: 60px;
    line-height: 24px;
    outline: none;
    padding: 12px 30px;
    width: 100%;
    `

    const WorkTogetherFormBtn = styled.button`
    background: #59c378;
    border-radius: 15px;
    box-shadow: 5px 5px 30px 0 rgba(0,0,0,.35);
    display: inline-block;
    font-family: Rubik,sans-serif;
    font-size: 13px;
    font-weight: 500;
    height: 60px;
    line-height: 24px;
    overflow: hidden;
    padding: 18px 20px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    z-index: 1;
    color: #fff!important;
    cursor: pointer;
    `
    return(
        <>
            <ServiceSection id="newsletter">
                <Container>
                    <Row>
                        <ContactMe2>
                            <ContactMeT1>
                                <ContactMeT1H2>Newsletter</ContactMeT1H2>
                            </ContactMeT1>
                            <div className="row align-items-center mb-5">
                                <div className="col-lg-5 col-md-12">
                                <div className="work-togather-text">
                                    <WorkTogetherH2>Travaillons ensemble</WorkTogetherH2>
                                    <WorkTogetherText>
                                    Êtes-vous impressionné et souhaitez-vous réaliser un projet, appelez-moi ou envoyez-moi un e-mail à tout moment.
                                    </WorkTogetherText>
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-7">
                                <WorkTogetherForm>
                                    <WorkTogetherFormInput
                                    type="email"
                                    name="Email"
                                    className="form-input-one subscribe-input"
                                    placeholder="Email Address"
                                    required=""
                                    />
                                </WorkTogetherForm>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                <div className="work-togather-form-btn">
                                    <WorkTogetherFormBtn type="submit">
                                    S&lsquo;abonner maintenant
                                    </WorkTogetherFormBtn>
                                </div>
                                </div>
                            </div>
                        </ContactMe2>
                    </Row>
                </Container>
            </ServiceSection>
        </>
    )
}
export default Newsletter