import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Row, Col, Image } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Mikail Esim</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Anasayfa</Nav.Link>
              <Nav.Link href="#">Mesajlar</Nav.Link>
              <NavDropdown title="Projeler" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Telgraf Web</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Telgraf iOS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Telgraf Android</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Ara" className="mr-sm-2" />
              <Button variant="outline-success">Ara</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="base-container">
        <Row>
          <Col xs={8} sm={8}>
            <Row>
              <Image src="https://www.premier-fm.co.uk/wp-content/uploads/2019/07/LinkedInDefaultBanner.png" fluid />
            </Row>
            <Row className="profile-photo-box">
              <Col xs={8} sm={8}>
                <Image className="profile-photo" src="https://media-exp1.licdn.com/dms/image/C4D03AQHSRHrItvuOTg/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=Ibod3jTqUdHHZK3XkRepROfVsqYN7Q4I-sbPUuh-cHg" roundedCircle />
              </Col>
              <Col xs={4} sm={4}>
                <p style={{ fontSize: "2vw" }}>Mikail Esim</p>
              </Col>
            </Row>
            <Row className="profile-info-box">
              <Col xs={12} sm={12}>
                <Row>
                  <p style={{ fontSize: "1.25vw" }}>Ankara Üniversitesi</p>
                </Row>
                <Row>
                  <p style={{ fontSize: "1.25vw" }}>Bilgisayar Mühendisi</p>
                </Row>
                <Row>
                  <a style={{ fontSize: "1.25vw" }} href="#"><p>Gölbaşı,</p></a>
                  <a style={{ fontSize: "1.25vw", marginLeft: "2%" }} href="#"><p>Ankara,</p></a>
                  <a style={{ fontSize: "1.25vw", marginLeft: "2%" }} href="#"><p>Türkiye</p></a>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={4} sm={4}>
            <Row>
              <Col className="projeler-box">
                <Form>
                  <Form.Group style={{ fontSize: "2vw" }}>Projeler</Form.Group>
                  <NavDropdown.Divider />
                  <Form.Text style={{ fontSize: "1.5vw" }}>Telgraf Web</Form.Text>
                  <Form.Text style={{ fontSize: "1.5vw" }}>Telgraf iOS</Form.Text>
                  <Form.Text style={{ fontSize: "1.5vw" }}>Telgraf Android</Form.Text>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col className="hobiler-box">
                <Form>
                  <Form.Group style={{ fontSize: "2vw" }}>Hobiler</Form.Group>
                  <NavDropdown.Divider />
                  <Form.Text style={{ fontSize: "1.5vw" }}>Futbol Oynamak</Form.Text>
                  <Form.Text style={{ fontSize: "1.5vw" }}>Voleybol Oynamak</Form.Text>
                  <Form.Text style={{ fontSize: "1.5vw" }}>Şiir Okumak</Form.Text>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
