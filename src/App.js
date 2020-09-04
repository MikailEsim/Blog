import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import web1 from './Web1.png';
import web2 from './Web2.png';
import web3 from './Web3.png';
import tel1 from './Tel1.png';
import tel2 from './Tel2.png';
import tel3 from './Tel3.png';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Row, Col, Image, Carousel, Card } from 'react-bootstrap';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#">Mikail Esim</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Messages</Nav.Link>
                <NavDropdown title="PERSONAL PROJECTS" id="basic-nav-dropdown">
                  <NavDropdown.Item href="https://telgraf.ankara.edu.tr/" target="_blank">Telgraf Web</NavDropdown.Item>
                  <NavDropdown.Item href="https://apps.apple.com/us/app/id1524302671" target="_blank">Telgraf iOS</NavDropdown.Item>
                  <NavDropdown.Item href="https://drive.google.com/file/d/1Xq0TTEgigSCcONey2SDM2jueak8kHeJM/view" target="_blank">Telgraf Android</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="base-container">
          <Row>
            <Col xs={8} sm={8}>
              <Row className="profile">
                <Col>
                  <Row>
                    <Image src="https://www.premier-fm.co.uk/wp-content/uploads/2019/07/LinkedInDefaultBanner.png" fluid />
                  </Row>
                  <Row>
                    <Col xs={12} sm={12}>
                      <Image className="profile-photo" src="https://media-exp1.licdn.com/dms/image/C4D03AQHSRHrItvuOTg/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=Ibod3jTqUdHHZK3XkRepROfVsqYN7Q4I-sbPUuh-cHg" roundedCircle />
                    </Col>
                  </Row>
                  <Row className="profile-info-box">
                    <Col xs={12} sm={12}>
                      <Row>
                        <Col xs={6} sm={6}>
                          <p>Mikail Esim</p>
                        </Col>
                        <Col xs={6} sm={6}>
                          <p>Computer Engineer</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={6} sm={6}>
                          <a href="https://www.google.com/maps/place/G%C3%B6lba%C5%9F%C4%B1,+Ankara/data=!4m2!3m1!1s0x14d34186cd4d979f:0x147a11a34ac6b5b8?sa=X&ved=2ahUKEwiiw8SP7szrAhXKAhAIHUBNBzUQ8gEwAHoECAsQAQ" target="_blank" rel="noopener noreferrer"><p>Golbasi, Ankara, Türkiye</p></a>
                        </Col>
                        <Col xs={6} sm={6}>
                          <p>University of Ankara</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="card-school">
                <Col style={{ paddingRight: "2%", paddingLeft: "0%" }} xs={4} sm={4}>
                  <a className="schools" href="http://kayesevi.meb.k12.tr/66/12/329202/okulumuz_hakkinda.html" target="_blank" rel="noopener noreferrer">
                    <Card className="card-shadow">
                      <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/D48dyqcjWsIlFP7pZs0PlOGXKr4LwiB4AxspXcGdxgJW8zJVDILFrna4NLF6WJ4GZpsE4mPXFgeiI2dSqYum" />
                      <Card.Body>
                        <Card.Text className="card-font-size">Ahmet Yesevi P.S.<br />(09/2003 - 06/2011)</Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted card-font-size">GPA: 90/100</small>
                      </Card.Footer>
                    </Card>
                  </a>
                </Col>
                <Col style={{ paddingLeft: "1%", paddingRight: "1%" }} xs={4} sm={4}>
                  <a className="schools" href="http://zilefenlisesi.meb.k12.tr/" target="_blank" rel="noopener noreferrer">
                    <Card className="card-shadow">
                      <Card.Img variant="top" src="https://imgrosetta.mynet.com.tr/file/2666889/728xauto.jpg" />
                      <Card.Body>
                        <Card.Text className="card-font-size">Zile Science H.S.<br />(09/2011 - 06/2015)</Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted card-font-size">GPA: 87.48/100</small>
                      </Card.Footer>
                    </Card>
                  </a>
                </Col>
                <Col style={{ paddingLeft: "2%", paddingRight: "0%" }} xs={4} sm={4}>
                  <a className="schools" href="http://comp.eng.ankara.edu.tr/" target="_blank" rel="noopener noreferrer">
                    <Card className="card-shadow">
                      <Card.Img variant="top" src="https://galeri2.uludagsozluk.com/352/ankara-universitesi-golbasi-yerleskesi_378337.jpg" />
                      <Card.Body>
                        <Card.Text className="card-font-size">University of Ankara<br />(08/2015 - 06/2020)</Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted card-font-size">GPA: 3.02/4.00</small>
                      </Card.Footer>
                    </Card>
                  </a>
                </Col>
              </Row>
              <Row className="card-work">
                <Col className="carousel-info">
                  <p className="project-header">Work Experience</p>
                </Col>
                <Card>
                  <Row>
                    <Col xs={6} sm={6}>
                      <Card.Img style={{ width: "100%", height: "100%" }} variant="top" src="https://lh3.googleusercontent.com/proxy/rvIAKNiMlE_SvWeVGCpetqkFCtmiqMVDHpm6qN8RmGq0H2Z7Vou5DGY8GAlzrnLxz27y51sryYPmpz64exBPFCAJPXUndTgtX-Cim_xtF7Jjlkc" />
                    </Col>
                    <Col xs={6} sm={6}>
                      <Card.Body>
                        <Card.Title>AselsanNET</Card.Title>
                        <Card.Text>
                          (07/2019 - 08/2019)<br />
                          It meets the electronic and communication devices requirements of civil institutions, organizations and end users.
                        </Card.Text>
                        <Button variant="outline-info" size="sm" target="_blank" onClick={event => window.open("https://www.aselsannet.com.tr/tr-tr", "_blank")}>Go Web Site</Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Row>
              <Row className="carousell-web">
                <Col>
                  <Row className="carousel-info">
                    <Col>
                      <p className="project-header">
                        <a href="https://telgraf.ankara.edu.tr/" target="_blank" rel="noopener noreferrer">Telgraf Web</a>
                        <NavDropdown.Divider />
                      Social sharing site developed for the communication of Ankara University students and graduates.
                    </p>
                    </Col>
                  </Row>
                  <Row>
                    <Carousel className="project-image">
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={web1}
                          height="100%"
                          alt="First slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={web2}
                          height="100%"
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={web3}
                          height="100%"
                          alt="Third slide"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6}>
                  <Row>
                    <Col className="carousell-ios">
                      <Row className="carousel-info">
                        <Col>
                          <p className="project-header">
                            <a href="https://apps.apple.com/us/app/id1524302671" target="_blank" rel="noopener noreferrer">Telgraf iOS</a>
                            <NavDropdown.Divider />
                          Social sharing mobile application developed for the communication of Ankara University students and graduates.
                        </p>
                        </Col>
                      </Row>
                      <Row>
                        <Carousel className="project-image">
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={tel1}
                              height="100%"
                              alt="First slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={tel2}
                              height="100%"
                              alt="Third slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={tel3}
                              height="100%"
                              alt="Third slide"
                            />
                          </Carousel.Item>
                        </Carousel>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col xs={6} sm={6}>
                  <Row>
                    <Col className="carousell-android">
                      <Row className="carousel-info">
                        <Col>
                          <p className="project-header">
                            <a href="https://drive.google.com/file/d/1Xq0TTEgigSCcONey2SDM2jueak8kHeJM/view" target="_blank" rel="noopener noreferrer">Telgraf Android</a>
                            <NavDropdown.Divider />
                          Social sharing mobile application developed for the communication of Ankara University students and graduates.
                        </p>
                        </Col>
                      </Row>
                      <Row>
                        <Carousel className="project-image">
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={tel1}
                              height="100%"
                              alt="First slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={tel2}
                              height="100%"
                              alt="Third slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={tel3}
                              height="100%"
                              alt="Third slide"
                            />
                          </Carousel.Item>
                        </Carousel>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xs={4} sm={4}>
              <Row>
                <Col className="iletisim-box">
                  <Form>
                    <Form.Group>CONTACT ADDRESSES</Form.Group>
                    <NavDropdown.Divider />
                    <Form.Text><a href="mailto:mikail__esim66@hotmail.com">mikail__esim66@hotmail.com</a></Form.Text>
                    <NavDropdown.Divider />
                    <Form.Text><a href="tel:+90 541 286 75 89">+90 541 286 75 89</a></Form.Text>
                    <NavDropdown.Divider />
                    <Form.Text><a href="https://www.linkedin.com/in/mikail-esim-122647173/" target="_blank" rel="noopener noreferrer">linkedin.com/in/mikailesim-122647173</a></Form.Text>
                    <NavDropdown.Divider />
                    <Form.Text><a href="https://github.com/MikailEsim" target="_blank" rel="noopener noreferrer">github.com/MikailEsim</a></Form.Text>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col className="yetenekler-box">
                  <Form>
                    <Form.Group>SKILLS</Form.Group>
                    <NavDropdown.Divider />
                    <Form.Text>Version Control System</Form.Text>
                    <Form.Text>Teamwork</Form.Text>
                    <Form.Text>Javascript</Form.Text>
                    <Form.Text>ReactJS</Form.Text>
                    <Form.Text>React Native</Form.Text>
                    <Form.Text>Bootstrap</Form.Text>
                    <Form.Text>HTML5</Form.Text>
                    <Form.Text>CSS3</Form.Text>
                    <Form.Text>Asp.Net</Form.Text>
                    <Form.Text>PHP</Form.Text>
                    <Form.Text>MySQL</Form.Text>
                    <Form.Text>C++</Form.Text>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col className="hobiler-box">
                  <Form>
                    <Form.Group>INTERESTS</Form.Group>
                    <NavDropdown.Divider />
                    <Form.Text>Football</Form.Text>
                    <Form.Text>Volleyball</Form.Text>
                    <Form.Text>Reading Poetry</Form.Text>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}