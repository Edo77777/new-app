
import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
render() {
return (
<Footer  className="font-small pt-4 mt-4" style={{background:"rgb(41, 41, 41)"}}>
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title"  style={{color: "aliceblue"}}>Contact information:</h5>
      <p>
      someone@example.com
      </p>
      </Col>
      <Col md="2">
      <h5 className="title" style={{color: "aliceblue"}}>Links</h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!">Link 1</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 2</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 3</a>
        </li>
        
      </ul>
      </Col>
      <Col md="2">
      <h5 className="title"  style={{color: "aliceblue"}}>Links</h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!">Link 1</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 2</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 3</a>
        </li>
        
      </ul>
      </Col>
    </Row>
  </Container>
  <div className="footer-copyright text-center py-3" style={{background:"#212121"}}>
    <Container fluid style={{color:"white"}}>
      &copy; {new Date().getFullYear()} {" "}
      <a href="#"> React.js </a>
    </Container>
  </div>
</Footer>
);
}
}

export default FooterPage;