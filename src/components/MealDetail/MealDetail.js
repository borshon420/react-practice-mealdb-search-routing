import React, { useEffect, useState } from 'react';
import './MealDetail.css';
import { Card, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';


const MealDetail = () => {
    const {idMeal} = useParams()
    const [meal, setMeal] = useState({})
    const history = useHistory()
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeal(data.meals[0]))
    }, [])

    const handleClick = () => {
        history.push('/restaurant')
    }
    return (
        <div>
            <h2>Meal details comming soon: {idMeal}</h2>
            <Card className="justify-content-center" style={{ width: '30%' }}>
            <Card.Img variant="top" src={meal.strMealThumb} />
            <Card.Body>
                <Card.Title>{meal.strMeal}</Card.Title>
                <Card.Text>
                    
                </Card.Text>
                <br />
                <Link to="/restaurant">Visit me</Link>
                <br />
                
                    <Button onClick={handleClick}>Go somewhere</Button>
                
                
            </Card.Body>
        </Card>
        </div>
    );
};

export default MealDetail;