import styles from './Footer.module.scss'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import {Container, Row, Col} from 'react-bootstrap'
function Footer()
{
    return(
        <footer className={styles.myfooter}>
            <Container>
                <Row>
                    <Col className='col-xl-12'>
                        <div className={styles.footerinfo}>
                            <div className={styles.copywrite}>
                                <p>© 2023 All rights reserved | Made with ❤️ by Cabrel</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer