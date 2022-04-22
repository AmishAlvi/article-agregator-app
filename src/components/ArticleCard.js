import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ArticleCard({title,body}) {
    return (
        <Card>
            {/*}  <Card.Header>{title}</Card.Header> */}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                   {body}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default ArticleCard;