// import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import axios from 'axios';
import { Form, Navbar, Nav, Container, Button, Card } from "react-bootstrap";




const API_KEY = "8fdc1021277a43c6b9edc3c67cdefc07";
// const API_KEY = "f83692ff5fa84daca326087f949d97c4";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=id&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=id&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=id&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=id&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

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

  generalNews = async () => {
    let response = await axios.get(GENERAL_NEWS + API_KEY)
    this.setState({
      newsType: "General news",
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

  handleSearch = async (e) => {
    const search = e.target.value.toLowerCase()
    let response = await axios.get(SEARCH_NEWS+encodeURIComponent(search)+"&apiKey="+API_KEY)
    this.setState({
      search: e.target.value.toLowerCase(),
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
                  onClick={this.generalNews}>
                  General
                </Nav.Link>

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
                  onClick={this.technologiNews}>
                  Technology
                </Nav.Link>

                <Nav.Link
                  href=""
                  onClick={this.entertainmentNews}>
                  Entertainment
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
                  <Card.Img variant="top" src={item.urlToImage} />
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