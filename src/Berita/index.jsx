// import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import axios from 'axios';
import { Form, Navbar, Nav, Container, Button, Card } from "react-bootstrap";




const API_KEY = "89f8f1d170d3d3ba82055e8f607f0352";
const HEADLINES_NEWS = "https://gnews.io/api/v4/top-headlines?token=";
const BUSINESS_NEWS = "https://gnews.io/api/v4/top-headlines?topic=business&token=";
const SPORTS_NEWS = "https://gnews.io/api/v4/top-headlines?topic=sports&token=";
const ENTERTAINMENT_NEWS = "https://gnews.io/api/v4/top-headlines?topic=entertainment&token=";
const TECHNOLOGY_NEWS = "https://gnews.io/api/v4/top-headlines?topic=technology&token=";
const NATIONAL_NEWS = "https://gnews.io/api/v4/top-headlines?topic=nation&token=";
const WORLD_NEWS = "https://gnews.io/api/v4/top-headlines?topic=world&token=";
const SCIENCE_NEWS = "https://gnews.io/api/v4/top-headlines?topic=science&token=";
const HEALTH_NEWS = "https://gnews.io/api/v4/top-headlines?topic=health&token=";
const SEARCH_NEWS = "https://gnews.io/api/v4/search?q=";

class Berita extends React.Component {
  
  
  constructor() {
    super()
    this.state = {
      newsType: "Headlines News",
      search: '',
      newsDetails: []
    }
  }
  
  headlineNews = async () => {
    let response = await axios.get(HEADLINES_NEWS + API_KEY)
    this.setState({
      newsDetails: response.data.articles
    })
  }

  businessNews = async () => {
    let response = await axios.get(BUSINESS_NEWS + API_KEY)
    this.setState({
      newsType: "Business News",
      newsDetails: response.data.articles
    })
  }

  sportsNews = async () => {
    let response = await axios.get(SPORTS_NEWS + API_KEY)
    this.setState({
      newsType: "Sports News",
      newsDetails: response.data.articles
    })
  }

  entertainmentNews = async () => {
    let response = await axios.get(ENTERTAINMENT_NEWS + API_KEY)
    this.setState({
      newsType: "Entertainment News",
      newsDetails: response.data.articles
    })
  }

  technologiNews = async () => {
    let response = await axios.get(TECHNOLOGY_NEWS + API_KEY)
    this.setState({
      newsType: "Technology News",
      newsDetails: response.data.articles
    })
  }

  nationalNews = async () => {
    let response = await axios.get(NATIONAL_NEWS + API_KEY)
    this.setState({
      newsType: "National News",
      newsDetails: response.data.articles
    })
  }

  worldNews = async () => {
    let response = await axios.get(WORLD_NEWS + API_KEY)
    this.setState({
      newsType: "World News",
      newsDetails: response.data.articles
    })
  }

  scienceNews = async () => {
    let response = await axios.get(SCIENCE_NEWS + API_KEY)
    this.setState({
      newsType: "Science News",
      newsDetails: response.data.articles
    })
  }

  healthNews = async () => {
    let response = await axios.get(HEALTH_NEWS + API_KEY)
    this.setState({
      newsType: "Health News",
      newsDetails: response.data.articles
    })
  }

  handleSearch = async (e) => {
    const search = e.target.value.toLowerCase()
    let response = await axios.get(SEARCH_NEWS+encodeURIComponent(search)+"&token="+API_KEY)
    this.setState({
      search: search,
      newsType: search,
      newsDetails: response.data.articles
    })
  }

  componentDidMount(){
    this.headlineNews()
  }
  
  render() {
    
    return (
      <>
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand className="navbar-brand" href="#">News <span className="text-warning">Rizhal</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">

                <Nav.Link
                  href=""
                  onClick={this.businessNews}>
                  Business
                </Nav.Link>

                <Nav.Link
                  href=""
                  onClick={this.sportsNews}>
                  Sport
                </Nav.Link>

                <Nav.Link
                  href=""
                  onClick={this.entertainmentNews}>
                  Entertainment
                </Nav.Link>

                <Nav.Link
                  href=""
                  onClick={this.technologiNews}>
                  Technology
                </Nav.Link>

                <Nav.Link
                  href=""
                  onClick={this.nationalNews}>
                  National
                </Nav.Link>

                <Nav.Link
                  href=""
                  onClick={this.worldNews}>
                  World
                </Nav.Link>

                <Nav.Link
                  href=""
                  onClick={this.scienceNews}>
                  Science
                </Nav.Link>

                <Nav.Link
                  href=""
                  onClick={this.healthNews}>
                  Health
                </Nav.Link>


              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container fluid="md">
          <Form className="d-flex" action="" onSubmit={this.handleSearch}>
            <Form.Group className="my-2">
              <Form.Label> Cari Berita </Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Search news" 
                aria-label="Search"
                name="search"
                onChange={this.handleSearch}
                >
              </Form.Control>
              <Button variant="warning">Search</Button>
            </Form.Group>
          </Form>
        </Container>


        <Container fluid>
          <div className="TitleBerita">{this.state.newsType}</div>
          <main id="content">
            {
              this.state.newsDetails.map((item,index) => (
                <Card style={{ width: '20rem' }} key={index}>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item.publishedAt.split("T")[0]}</Card.Subtitle>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                    <Nav.Link href={item.url} target="_blank" ><Button variant="warning">Read More</Button></Nav.Link>
                  </Card.Body>
                </Card>
              ))
            }

          </main>
        </Container>


        <Navbar className="footer" expand="lg" bg="dark" variant="dark">
          <Container fluid>
            <h5 className="text-muted me-auto ms-auto">News <span className="text-warning">Rizhal</span></h5>
          </Container>
        </Navbar>
      </>
    );
  } 
}

export default Berita;