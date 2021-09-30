import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const {strMeal, strMealThumb, strInstructions, strTags, idMeal} = props.meal;
    return (
        <div>
        <Card style={{ width: '80%' }}>
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <Card.Text>
                    
                </Card.Text>
                <br />
                <Link to={`/meal/${idMeal}`}>Visit me</Link>
                <br />
                <Link to="/home">
                    <Button variant="primary">Go somewhere</Button>
                </Link>
                
            </Card.Body>
        </Card>
        </div>
    );
};

export default Meal;