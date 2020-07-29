import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import './App.css';

import NavigationBar from './components/NavigationBar';
import {Container, Row, Col} from 'react-bootstrap';
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Book from "./components/Book";
import BookList from "./components/BookList";

function App() {
    const marginTop = {
        marginTop:"20px"
    }

  return (
    <Router>
        <NavigationBar />
        <Container>
            <Row>
                <Col lg={12} style={marginTop}>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/add" component={Book} />
                        <Route exact path="/list" component={BookList} />
                    </Switch>
                </Col>
            </Row>
        </Container>
        <Footer />
    </Router>
  );
}

export default App;
