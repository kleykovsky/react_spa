import {Col, Container, Row} from "react-bootstrap";


const Wrapper2 = (props) => {
    return(
        <Container>
            <Row>
                <Col>
                    {props.left}
                </Col>
                <Col>
                    {props.right}
                </Col>
            </Row>
        </Container>
    )
}

export default Wrapper2;