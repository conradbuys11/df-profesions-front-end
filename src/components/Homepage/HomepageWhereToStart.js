import React from "react";
import './HomepageWhereToStart.css';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';
import specTree from "../img/screenshots/specialization_tree_1140_520.png"
import recipeList from "../img/screenshots/recipe_list_1140_520.png"

const HomepageWhereToStart = props => {
    return(
        <div id="Homepage-Where-To-Start" className="homepage-component">
            <h1 className="header-lrg">Where Should I Start?</h1>
            <Container>
                <Row>
                    <Col lg={6} md={12}>
                        <img className="homepage-image-section-two" src={specTree} alt="specialization tree"/>
                    </Col>

                    <Col lg={6} med={12}>
                        <div className="where-to-start-basics">
                            <p className="text-lrg">Professions now have stats, talent trees... oh man, where to even begin? 
                            The <Link to="/basics" className="text-lrg-bold">Basics</Link> page will get you acclimated with these new systems.</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6} md={12}>
                        <div className="where-to-start-professions">
                            <p className="text-lrg">Want to just see what each profession can make in Dragonflight? 
                            Check the <Link to="/professions" className="text-lrg-bold">Profession List</Link> page.
                            Each one has a list of their common crafts & a full list of recipes available.</p>
                        </div>
                    </Col>

                    <Col lg={6} md={12}>
                        <img className="homepage-image-section-two" src={recipeList} alt="recipe list"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomepageWhereToStart;